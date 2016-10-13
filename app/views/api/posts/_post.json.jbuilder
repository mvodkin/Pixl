json.(post, :id, :description, :created_at, :drawing)
json.num_likes post.likes.length
json.num_comments post.comments.length
json.user(post.author, :username, :id) #:profile_pic)
json.comments post.comments do |comment|
  json.extract! comment, :body, :created_at
  json.user comment.user, :id, :username
end
json.likers post.likers, :username, :id
