'use strict';

const {actionssdk} = require('actions-on-google');
const functions = require('firebase-functions');

const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('Hi! Welcome to My AFL, what are you looking for today?');
});

// More intent handling if needed

exports.myFunction = functions.https.onRequest(app);
