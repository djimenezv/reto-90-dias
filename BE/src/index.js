import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { isLogged } from '../middlewares/isLogged';
import { addCors } from '../middlewares/cors';
import cors from 'cors';
import '../middlewares/auth';
import '../misc/config';

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));

app.use(session(({secret: 'cats'})));
app.use(passport.initialize());
app.use(passport.session());

// endpoints
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with google</a>');
});

app.get('/auth/google', 
    passport.authenticate('google', { scope :['email','profile']})
);

app.get('/callback',
    passport.authenticate('google',
    {
        successRedirect:'http://localhost:3000',
        failureRedirect:'/auth/failure'
    })
);

app.get('/me', isLogged, addCors, (req, res) => {
    res.send(req.user);
});

app.get('/auth/failure',(req, res) => {
    res.send('there was an error during authentication');
});

app.listen(9000, () => {
    console.log('app running on port 9000');
});