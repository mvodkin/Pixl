json.extract! @user, :id, :username, :profile_desc, :profile_pic,
  :num_followers, :num_following, :num_posts
json.followers @user.followers do |follower|
  json.extract! follower, :id, :username
end

# json.partial! "api/users/user", user: @user

# json.extract! user, :id, :username, :email, :profile_pic_id, :profile_desc
