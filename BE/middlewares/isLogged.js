export const isLogged = (req, res, next) => {
    req.user
        ? next()
        : res.sendStatus(401);
};
