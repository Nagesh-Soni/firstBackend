require ('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

const githubData = {
  "login": "Nagesh-Soni",
  "id": 235837855,
  "node_id": "U_kgDODg6Znw",
  "avatar_url": "https://avatars.githubusercontent.com/u/235837855?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Nagesh-Soni",
  "html_url": "https://github.com/Nagesh-Soni",
  "followers_url": "https://api.github.com/users/Nagesh-Soni/followers",
  "following_url": "https://api.github.com/users/Nagesh-Soni/following{/other_user}",
  "gists_url": "https://api.github.com/users/Nagesh-Soni/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Nagesh-Soni/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Nagesh-Soni/subscriptions",
  "organizations_url": "https://api.github.com/users/Nagesh-Soni/orgs",
  "repos_url": "https://api.github.com/users/Nagesh-Soni/repos",
  "events_url": "https://api.github.com/users/Nagesh-Soni/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Nagesh-Soni/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Nagesh soni",
  "company": null,
  "blog": "https://nagesh-soni.github.io/currency-converter/",
  "location": "Indore",
  "email": null,
  "hireable": true,
  "bio": "React Developer ⚛️\r\nCrafting responsive UIs with Tailwind CSS\r\nOpen to learning & collaboration 💻",
  "twitter_username": null,
  "public_repos": 31,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2025-10-03T07:04:44Z",
  "updated_at": "2026-06-25T07:09:17Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/githubdata', (req, res) => {
  res.json(githubData);
});


app.get ('/instagram' ,(req, res)=>{
    res.send("Ha insta user Nagesh soni ! ")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});