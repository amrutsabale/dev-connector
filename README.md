# dev-connector

Social network for all developers community

Demo: https://dev-connector-spa.herokuapp.com

# After Clone Do these stpes to run it locally:

1. Create `default.json` & `prduction.json` files in `/config` folder. Add below code inside those files.

```
{
  "mongoURI": "mongodb+srv://userID:password@devconnector.psdbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  "jwtSecret": "", // for password hash
  "githubClientId": "", // to read top 5 github repos of users, add your github details
  "githubSecret": ""
}
```

2. In `/client` folder add `.env`

```
GENERATE_SOURCEMAP=false
```

3. If you also want to deploy this app. Follow this Heroku guide

  For deplyment: https://devcenter.heroku.com/articles/git

  Video: https://www.youtube.com/watch?v=wKvi1Hm8haA
