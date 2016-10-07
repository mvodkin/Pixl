# == Schema Information
#
# Table name: likes
#
#  id            :integer          not null, primary key
#  liker_id      :integer          not null
#  liked_post_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ActiveRecord::Base

  validates_uniqueness_of :liker_id, scope: :liked_post_id
  validates :liker_id, :liked_post_id, presence: true

  belongs_to :liker,
    class_name: "User",
    foreign_key: :liker_id,
    primary_key: :id

  belongs_to :post,
    class_name: "Post",
    foreign_key: :liked_post_id,
    primary_key: :id


end
