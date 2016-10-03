<h1>API ENDPOINTS</h1>

<h2>HTML API</h2>

<h3>Root</h3>
  * `GET /` -loads React frontend

<h2>JSON API</h2>

<h3>Users</h3>
  * `POST /api/users`
  * `PATCH /api/users`
  * `DELETE /api/users`
  * `GET /api/users/:id`

<h3>Session</h3>
  * `POST /api/session`
  * `DELETE /api/session`
  * `GET /api/session`

<h3>Posts</h3>
  * `GET /api/posts`
    * Fetches all posts from users followed by the current user. When viewing a profile it fetches all posts from that user.
  * `POST /api/posts`
  * `PATCH /api/posts`
  * `DELETE /api/posts`

<h3>Comments</h3>
  * `POST /api/comments`
  * `DELETE /api/comments`

<h3>Likes</h3>
  * `POST /api/likes`
  * `DELETE /api/likes`

<h3>Follows</h3>
  * `POST /api/follows`
  * `DELETE /api/follows`
