# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  img_url     :string
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  drawing     :json
#

class Post < ActiveRecord::Base

  validates :user_id, presence: true

  belongs_to :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  has_many :followers,
    through: :author,
    source: :followers

  has_many :likes,
    class_name: "Like",
    primary_key: :id,
    foreign_key: :liked_post_id

  has_many :likers,
    through: :likes,
    source: :liker

  has_many :comments,
    class_name: "Comment",
    primary_key: :id,
    foreign_key: :post_id

  def num_likes
    Like.where(liked_post_id: self.id).count(:id)
  end

  def num_comments
    Comment.where(post_id: self.id).count(:id)
  end

  def self.feed(current_user)

    Post.joins(:author)
      .joins("LEFT OUTER JOIN follows ON followee_id = users.id")
      .where("follows.follower_id = :id OR posts.user_id = :id", id: current_user.id)
      .order("posts.id DESC").select("DISTINCT ON (posts.id) posts.*")

  end


end
