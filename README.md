# serverless-slack-events-handler-example

## Install
1. Install packages
`nvm install 6.10.3`
`npm install -g serverless`
`npm install -g typescript`
`npm install -g nodemon`
2. Change `VERIFICATION_TOKEN` to your's bot verification token. You can find it here: https://api.slack.com/apps/[YOUR_BOT_ID]/general

## Run
1. `ngrok http 8080`
2. `nodemon index.js`
3. Copy url to slack bot events subscription page: https://api.slack.com/apps/[YOUR_BOT_ID]/event-subscriptions
4. Start getting events on localhost

## Deploy
1. Export `AWS_SECRET_ACCESS_KEY` and `AWS_SECRET_ACCESS_KEY`
```
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
```
2. `sls deploy`
3. Copy url to slack bot events subscription page: https://api.slack.com/apps/[YOUR_BOT_ID]/event-subscriptions
4. Start getting events on function

## Logging
`serverless logs -f app`