json.(post, *Post.column_names, :num_comments, :num_likes)
json.user(post.user, *User.column_names)
json.comments post.comments, :user, :body, :created_at
json.likers post.likers, :username, :id
