json.extract! @user, :id, :username, :profile_desc, :profile_pic,
  :num_followers, :num_following, :num_posts
json.followers @user.followers do |follower|
  json.extract! follower, :id, :username
end
