# == Schema Information
#
# Table name: comments
#
#  id           :integer          not null, primary key
#  body         :text
#  commenter_id :integer          not null
#  post_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Comment < ActiveRecord::Base

  validates :body, length: { in: 1..1000 }

  belongs_to :user,
    class_name: "User",
    foreign_key: :commenter_id,
    primary_key: :id


end
