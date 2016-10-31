# EI Builder

Demo site: http://ei-app.herokuapp.com

### About

EI Builder is an app meant to help users develop their emotional intelligence. Users click on words describing basic emotions and are prompted to identify more specific emotions using definitions and gifs delivered through the [Words] (https://www.wordsapi.com/) and [GIPHY] (https://api.giphy.com/) APIs, respectively. Authenticated users can write journal entries describing their current emotions, as well as read their past posts and other users' posts.

It is a single-page app, with a PostgreSQL database and Ruby on Rails API backend; React and JavaScript front end.

### Download
```
git clone https://github.com/fjlanasa/ei-app.git
cd volunteer-meetup
bundle install
rake db:create
rake db:migrate
npm install
npm start
```
(In a seperate tab: `rails s` to start the server)

You will need to create a `.env` file in the root directory of the project, setting your API keys like so:

```
SESSION_SECRET=[YOUR SESSION SECRET KEY]
FACEBOOK_CLIENT_ID=[YOUR FACEBOOK CLIENT ID]
FACEBOOK_CLIENT_SECRET=[YOUR FACEBOOK CLIENT SECRET]
WORD_KEY=[YOUR WORD API KEY]
GIPHY_KEY=[YOUR GIPHY API KEY]
```
