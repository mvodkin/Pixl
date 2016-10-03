<h1>Component Hierarchy</h1>

<h4>AuthFormContainer</h4>
* AuthForm

<h4>HeaderContainer</h4>
* SearchInput
  * SearchResults
* HomeButton
* ProfileButton
* PostButton

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
  * **Alternatively** DrawForm
    * Canvas

<h4>ProfileContainer</h4>
* UserProfile
  * ProfileImage
  * ProfileDescription
  * FollowButton
* UserPostsIndex
  * PostItem
    * Image
    * Description
    * Comments
    * Likes


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
