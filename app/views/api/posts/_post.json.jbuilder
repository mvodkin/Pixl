# json.extract! post, :id, :description, :image_url, :created_at, :user_id, :user
# json.poster post.user

json.(post, *Post.column_names)
json.user(post.user, *User.column_names)
