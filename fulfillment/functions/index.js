'use strict';

const { actionssdk } = require('actions-on-google').di;
const functions = require('firebase-functions');

const app = actionssdk({ debug: true });

app.intent('actions.intent.MAIN', (conv) => {
  const ssml = '<speak>Hi! <break time="200ms"/> ' +
    'Welcome to My <say-as interpret-as="characters">AFL</say-as>. <break time="100ms"/>. ' +
    'What is your name?</speak>'
  conv.ask(ssml);
});

var name = '';
app.intent('actions.intent.TEXT', (conv, input) => {
  if (input === 'bye') {
    return conv.close('Goodbye, have a good day !!!')
  }
  if (input === 'yes' || input === 'alright' || input === 'okay') {
    const ssml = `<speak>Thankyou, please visit ${name}. my <say-as interpret-as="characters">AFL</say-as></speak>`;
    return conv.close(ssml)
  }

  const ssml = `<speak>You said ${input}?</speak>`
  name = input;
  return conv.ask(ssml)
});

app.intent('actions.intent.PERMISSION', (conv, info) => {
  // convo.username = info;

  // question = new Question
  const ssml = `<speak>okay</speak>`
  return conv.close(ssml)
});

app.intent('com.example.myAfl.TEAM', (conv, team) => {
  const ssml = `Thankyou, please visit ${username}.myAfl`;
  return conv.ask(ssml)
});

// More intent handling if needed
exports.myAFLApp = functions.https.onRequest(app);
