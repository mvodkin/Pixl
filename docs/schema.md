<h3>Users</h3>

Column         | Data Type
---------------|----------
id             |Integer
username       |String
profile_desc   |String
profile_pic_id |String 
email          |String
session Token  |String
password digest|String


<h3>Posts</h3>

Column         | Data Type
---------------|----------
id             |Integer
img_url        |String
description    |Text
user_id        |Integer

<h3>Follows</h3>

Column         | Data Type
---------------|----------
id             |Integer
follower_id    |Integer
followee_id    |Integer

<h3>Likes</h3>

Column         | Data Type
---------------|----------
id             |Integer
liker_id       |Integer     
liked_post_id  |Integer

<h3>Comments</h3>

Column         | Data Type
---------------|----------
id             |Integer
body           |Text
commenter_id   |Integer
post_id        |Integer

<h3>Tags</h3>

Column         | Data Type
---------------|----------
id             |Integer
hash_tag       |String

<h3>Taggings</h3>

Column         | Data Type
---------------|----------
id             |Integer
tag_id         |Integer
post_id        |Integer
