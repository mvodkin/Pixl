<h1>Redux Structure</h1>

<h2>Auth</h2>

<h3>Session API Actions</h3>
* `SignUp`
* `SignIn`
* `SignOut`
* `fetchCurrentUser`

<h3>Session API Response Actions</h3>
* `receiveCurrentUser`
* `removeCurrentUser`

<h3>Errors</h3>
* `setErrors`
* `removeErrors`

<h2>Post Cycles</h2>

<h3>API Request Actions</h3>
* `fetchAllPosts`
  1. Invoked from `postsIndex` on `componentDidMount`
  2. `GET api/posts`
* `createPost`
  1. Invoked from `postForm`
  2. `POST api/posts`
* `destroyPost`
  1. Invoked from `postIndexItem`
  2. `DELETE api/posts/:id`
* `likePost`
  1. Invoked from `postIndexItem`
  2. `POST api/likes`
* `postComment`
  1. Invoked from `commentInput`
  2. `POST api/comments`


<h3>API Response Actions</h3>
* `receiveAllPosts`
  1. Invoked as API success callback
  2. `PostReducer` sets posts
* `receiveLike`
  1. `PostReducer` sets whether the post is liked by the currentUser
  2. Invoked as API success callback from `LikePost`
* `receiveComment`
  1. `PostReducer` adds comment to `postIndexItem`'s list of comments'
  2. Invoked as API success callback from `postComment`
* `removePost`
  1. `PostReducer` removes post from `allPosts`

<h2>User Profile Cycles</h2>

<h3>API Request Actions</h3>
* `fetchProfile`
  1. Invoked `onClick` from `userName` in `postItem` or profile button in navbar
* `fetchAllPosts`
  1. Same as `fetchAllPosts`

<h3>API response Actions</h3>
* `receiveProfile`
  1. Invoked in API callback
  2. ProfileReducer sets the `currentProfile`
* `receiveAllPosts`
  1. PostReducer sets current posts

<h2>Search Cycle</h2>

<h3>API Request Actions</h3>
* `fetchSearchSuggestions`
  1. Invoked `onChange` from `SearchInput`
  2. `GET api/tags`
  3. `receiveSearchSuggestions` invoked as success callback
* `fetchSearchResults`
  1. Invoked `onSubmit` from `SearchInput`
  2. `GET api/posts/:params`
  3. `receiveSearchResults`
<h3>API response Actions</h3>
* `receiveProfile`
* `receiveAllPosts`
