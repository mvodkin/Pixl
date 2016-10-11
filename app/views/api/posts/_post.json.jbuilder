json.(post, *Post.column_names, :num_comments, :num_likes)
json.user(post.user, :username, :id, :profile_pic)
json.comments post.comments do |comment|
  json.extract! comment, :body, :created_at
  json.user comment.user, :id, :username
end
json.likers post.likers, :username, :id
