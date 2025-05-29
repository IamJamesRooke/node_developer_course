const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
const { verify } = require('crypto');

require('dotenv').config();

const PORT = 3000;

const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
}

function verifyCallback(accessToken, refreshToken, profile, done) {
    console.log('Google profile', profile)
    done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

// Save session to cookie.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Read session from cookie.
passport.deserializeUser((id, done) => {
    done(null, id);
});

const app = express();

app.use(helmet());

app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [ config.COOKIE_KEY_1, config.COOKIE_KEY_2]
}));

// Don't remove this code.
app.use((req, res, next) => {
    if (req.session && !req.session.regenerate) {
        req.session.regenerate = (cb) => {
            cb();
        }
    }
    if (req.session && !req.session.save) {
        req.session.save = (cb) => {
            cb();
        }
    }
    next();
});

app.use(passport.initialize());
app.use(passport.session());

function checkLoggedIn(req, res, next) {
    const isLoggedIn = true; //TODO
    if (!isLoggedIn) {
        return res.status(401).json({
            error: 'You must log in!',
        });
    }
    next();
}

app.get('/auth/google', 
    passport.authenticate('google', {
        scope: ['email']
    })
);

app.get('/auth/google/callback', 
    passport.authenticate('google', {
    failureRedirect: '/failure',
    success: '/',
    session: true,
    }), 
    (req, res) => {
        console.log('Google Called Back')
    }
);

app.get('/auth/logout', (req, res) => {})

app.get('/secret', checkLoggedIn, (req, res) => {
    return res.send('Password: password');
})

app.get('/failure', (req, res) => {
    return res.send('Failed to login.')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {
    console.log(`Listening on https://localhost:${PORT}...`)
    console.log(`Secret found on https://localhost:${PORT}/secret`)
})