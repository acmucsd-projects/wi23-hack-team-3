const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const usersRouter = require('./routes/users');
const app = express();

app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

dotenv.config();

// will render the auth.ejs template
app.get('/', function(req, res) {
  res.render('pages/auth');
});

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

// user auth passport setup
const passport = require('passport');
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


/*  Google AUTH  */
 
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '598433507636-53p047nmkrdcv4jf1mj359df6q8o47ig.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });

module.exports = app;
