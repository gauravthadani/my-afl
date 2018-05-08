# my-afl

Using Actions on google sdk to create a sample voice app
There are 2 parts to the application:

1) [Actions](actions/README.md)

This contains the main intent, which delegates control from the voice assistant to the my-afl app

2) [Fulfillments](fulfillment/README.md)

The back end, or handlers to the main and the text intents of the application

Steps to create the app:

- Create a voice app in https://console.actions.google.com/
- with type actions sdk
