<h1>README</h1>

<h2>Minimum Viable Product</h2>

Pixl (working title) is a full stack web application inspired by Instagram. It allows users to post like and comment on pictures.

- [ ] Hosting on Heroku
- [ ] Login creation, sign-in, sign-out and guest sign-in
- [ ] Posts: users post pictures with descriptions
- [ ] Follows: users can follow other users
- [ ] Likes: users can like posts
- [ ] Comments: users can leave comments on posts
- [ ] Tags: users can tag posts with hashtags
- [ ] infinite scroll
- [ ] BONUS: users create pixelated html canvas drawings instead of posting photographs

<h2>Design Docs</h2>

* [Wireframes]()
* [API Endpoints](https://github.com/mvodkin/insta_clone/blob/master/docs/api-endpoints.md)
* [Component Heirarchy](https://github.com/mvodkin/insta_clone/blob/master/docs/component-heirarchy.md)
* [Redux Structure](https://github.com/mvodkin/insta_clone/blob/master/docs/redux-structure.md)
* [Sample State](https://github.com/mvodkin/insta_clone/blob/master/docs/sample-state.md)
* [Schema](https://github.com/mvodkin/insta_clone/blob/master/docs/schema.md)

<h2>Implementation Timeline</h2>
- [ ] Phase I - W1D1 - W1D2
  - [ ] User model and back end Auth
  - [ ] Front end Auth
  - [ ] Seed users
  - [ ] `AuthForm`
  - [ ] CSS for `AuthForm`
  - [ ] Deploy to Heroku

- [ ] Phase II - W1D3 - W1D4
  - [ ] `PostIndexContainer`
  - [ ] `PostItemContainer`
  - [ ] Seed posts

- [ ] Phase III - W1D5
  - [ ] CSS for `PostsIndexContainer`, navigation header & `PostItemContainer`

- [ ] Phase IV - W2D1
  - [ ] `CommentForm`
  - [ ] `Comments`
  - [ ] `Like Button`
  - [ ] `Likes`
  - [ ] CSS for above

- [ ] Phase V - W2D2
  - [ ] `UserProfileContainer`
  - [ ] `ProfileIndexContainer`
  - [ ] CSS for for `UserProfileContainer`

- [ ] Phase VI - W2D3-W2D4
  - [ ] If I am on schedule at this point I will implement the drawing form
  - [ ] Else, I will implement a post form to upload photographs

- [ ] Phase VII - W2D5
  - [ ] Implement infinite scroll
  - [ ] Implement Search

<h3>Bonus Features</h3>

- [ ] Hashtags are automatically added when written into the body of description or comment and become clickable links to a search by that hashtag
- [ ] Optionally view post index and search results as thumbnails
- [ ] Notifications. A list of recent, likes, follows and comments
- [ ] Privacy. Users can choose to make their profiles private (only accessible to followers)
- [ ] Direct Message.
