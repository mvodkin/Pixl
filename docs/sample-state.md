<h1>Sample State</h2>

```javascript
{
  currentUser: {
    id: 1,
    username: "mvodkin"
  },
  form: {
    signUp: {errors: []},
    signIn: {errors: []},
    postForm: {errors: []}
  }
  posts: {
    1: {
      user: {
        username: "marutaro",
        id: 2
      }
      img_url: "http//:www.imageurl.com/image.jpg",
      description: "Hi, this is Maru the doge!",
      likes_count: 45,345,
      comments: {
        1: {
          id: 1
          commenter_id: 1,
          comment_body: "Good pup!"
        },
        2: //...
      },
      tags: {
        1: {
          hashtag: "shibainu",
          id: 1
        }
        2: {
          hashtag: "doge"
          id: 2
        }
        3: {
          hashtag: "doggo",
          id: 3
        }
      }
    }
    2: //...
  }
}
```
