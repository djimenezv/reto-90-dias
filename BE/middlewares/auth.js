import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { getOrCreateUser } from '../data-access/users';
import { ENV_VARS }from '../misc/config';

passport.use(new GoogleStrategy({
    clientID: ENV_VARS.CLIENT_ID,
    clientSecret: ENV_VARS.CLIENT_SECRET,
    callbackURL:ENV_VARS.CALLBACK_URL,
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    getOrCreateUser(profile).then( r => done(null, profile));
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});