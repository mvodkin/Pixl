# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  guest = User.new(
    username: "Super_User",
    email: "super_user@gmail.com",
    password: "password"
  )
  max = User.new(
    username: "max",
    email: "max@gmail.com",
    password: "password"
  )
  guest.save
  max.create

  first = Post.create(
    image_url: "https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header",
    description: "first_post",
    user_id: 2,
  )

  follow = Follow.create(follower_id: 1, followee_id: 2)
end
