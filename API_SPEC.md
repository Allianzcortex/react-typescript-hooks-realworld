#### Appliction Spec

> For authentication

A user profile:

```
{
    "user": {
    "email": "jake@jake.jake",
    "token": "jwt.token.here",
    "username": "jake",
    "bio": "I work at statefarm",
    }
}
```
Profile:

```
{
  "profile": {
    "username": "jake",
    "bio": "I work at statefarm",
    "following": false // not login and false by default
  }
}

```

Single post:

应该加上一个 single-single-post，来获得略观页面的展示

{
  "posts":[
    {
      "author":"MS1",
      "title":"aws title11111",
      "tagList":["aa","bb","cc","dd"],
      "commentCount":12
    },
    {
      "author":"MS2",
      "title":"aws title12222",
      "tagList":["ee","ff","gg","hh"],
      "commentCount":14
    },
  ]
}

```
{
  "post": {
    "slug": "how-to-train-your-dragon",
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "following": false  // if user is not logged, it will become false by default
    }
    // add status: -1 means deleted, 0 means draft, 1 means success
    "status": -1 / 0 / 1
  }
}
```

Multiple Articles

```
{
    "articles":[
    {
        "slug":"",
        "title":"",
        "description:""
        ...... // all other article attribute
        "author":{......}
    },
    {
         "slug":"",
        "title":"",
        "description:""
        ...... // all other article attribute
        "author":{......}
    },
    {
        "slug":"",
        "title":"",
        "description:""
        ...... // all other article attribute
        "author":{......}
    }]
}
```

Single Comment

```
{
  "comment": {
    "id": 1,
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:22:56.637Z",
    "body": "It takes a Jacobian",
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }
}
```

multiple comments

```
{
    "comments":[
        {
            "id": 1,
            ... // other comment attribute
            "author": {}
        },
        {
            
        },
        {

        }
    ]
}


```

List of Tags

```
{
  "tags": [
    "reactjs",
    "angularjs"
  ]
}
```

Errors and Status Codes

Code 442 for validation error

```
{
  "errors":{
    "body": [
      "can't be empty"
    ]
  }
}

```

Code 401 for Unauthorized requests

Code 403 no permission

Code 404 for Not found request

---

Endpoints


**login** :  `POST /api/v1/user/login`

```
Request body:

{
    "user": {
    "email": "jake@jake.jake", // required
    "password": "jakejake"     // required
    }
}
```

`return result` : return a user

---

// unlike Github, use `register` key-word explicitly

**register** : `POST /api/v1/user/register`

```
{
    "user": {
        "username": "Jacob",
        "email": "jake@jake.jake",
        "password": "jakejake"
    }
}
```

`return result` : return a user

---

**Get Current User** : `GET /api/v1/user`

Authentication required, return the current user

---

**Update User** : `PUT /api/v1/user`

```
{
    "user": {
        "email":"",
        "bio":"",
        "personal website":"",
        "hobbies":"",
    }
}
```

Accepted fields: email, username, password, image, bio

---

**Get Profile** : `GET /api/v1/profile/:username`

// authentication required

---

**Follow Topic** `POST /api/v1/topic/:topicname/follow`

Authentication required.

// Not decide yet about what to return

---

**Unfollow Topic** `POST /api/v1/topic/:topicname/unfollow`

Authentication required

---

**List Articles** `GET /api/v1/posts`

```
find all recent global posts

Provide 3 types of filters:

filter by category: ?category=AngularJS

filter by author: ?author=jake

// shou cang
filter by collect: ?collected=jake

Limit the number of articles(default 30): ?limit=30

Limit the offset(ordered by articles): ?offset=0

```

---

**Feed Articles** `GET /api/v1/feed`

```
Find all articles of categories that current user follows, ordered by recent time(updated)

Also take `limit` and `offset` as the query limit

```

---

**Feed Single Article** `GET /api/v1/posts/<postid>`
// 这里我就不用 slug 作为 post 的参数过去

return single article

---

**Create Article** `post article

`POST /api/v1/posts`

request body will be like:

```
{
    "post": {
        "title":"",
        "category":"",
        // no need to brief, it will be generated
        // automatically from main content
        "bdoy":"",
        "tagList":["reactjs","angular","vue"]
    }
}

```

It will return a post.

---

**Update Posts**

`PUT /api/v1/posts/:slug`

Body will be like:

```
{
    "article": {
        // could be combinations of any following
        "title":"",
        "category":"",
        "body":"",
        "tagList":[]
    }
}

The slug will also get updated automatically.

```

---

**Delete Article** : `DELETE /api/v1/posts/<postid>`

Authentication required

---

**Add Comments to an Article** : `POST /api/posts/<postid>/comment`

```
{
    "comment": {
        "body":"balabala"
    }
}
```

Authentication required, will return the created comment

---

**Get Comments from an Article**

`GET /api/v1/posts/<postid>/comments`

Authentication optional, return  multiple comments

---

**Delete Comment**
`DELETE /api/posts/<postId>/comments/<commentId>`

Authentication Required

---

**Collect Topics** 

`POST /api/v1/posts/<postId>/collect`

Authentication Required

---

**Uncollect Topics**

`POST /api/v1/posts/<postId>/uncollect`

Authentication Required.
Currently no idea what to return

---

**Get Tags**

`GET /api/v1/tags`

No Authentication Required

---


Authorization: Token jwt.token.here
