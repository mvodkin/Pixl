<h1>Component Heirarchy</h1>

<h4>AuthFormContainer</h4>
* AuthForm

<h4>HeaderContainer</h4>
* SearchInput
  * SearchResults
* Home Button
* Profile Button
* Post Button

<h4>PostsIndexContainer</h4>
* PostsIndex
  * PostItem
    * Image
    * Description
    * Comments
    * Likes
    * LikeButton
    * CommentForm

<h4>PostFormContainer</h4>
  * PostForm

<h4>ProfileContainer</h4>
* UserPostsIndex
  * PostItem
    * Image
    * Description
    * Comments
    * Likes
  * FollowButton

<h1>Routes</h4>

Path           | Component
---------------|----------
"/"            |PostsIndexContainer
"/profile/:id" |ProfileContainer
"/signup"      |AuthFormContainer
"/signin"      |AuthFormContainer
"/post-form"   |PostFormContainer
"/like"        |LikeButton
"/comment"     |CommentForm
"/search"      |SearchInput
