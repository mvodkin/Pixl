# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ActiveRecord::Base

  validates_uniqueness_of :follower_id, scope: :followee_id

  belongs_to :follower,
    class_name: "User",
    primary_key: :id,
    foreign_key: :follower_id

  belongs_to :followee,
    class_name: "User",
    primary_key: :id,
    foreign_key: :followee_id

end
