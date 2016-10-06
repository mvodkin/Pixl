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
#

class Post < ActiveRecord::Base

  validates :user_id, presence: true

  belongs_to :user

  has_many :followers,
    through: :user,
    source: :followers

end
