json.extract! user, :id, :username, :email, :profile_pic_id, :profile_desc

if user.posts
  json.array! user.posts do |post|
    # json.set! post.id do
      json.partial! '../posts/post', post: post
    # end
  end
end
