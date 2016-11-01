# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  profile_desc    :string
#  profile_pic_id  :integer
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  attr_reader :password

  after_initialize :ensure_session_token

  validates :username, :email, presence: true, uniqueness: true
  validates :session_token, :password_digest, presence: true
  validates :password, length: { in: 6..20, allow_nil: true }
  validates :profile_desc, length: { maximum: 200, allow_nil: true }

  has_many :posts

  has_many :following_you,
    class_name: "Follow",
    primary_key: :id,
    foreign_key: :followee_id

  has_many :you_following,
    class_name: "Follow",
    primary_key: :id,
    foreign_key: :follower_id

  has_many :followers,
    through: :following_you,
    source: :follower

  has_many :followees,
    through: :you_following,
    source: :followee

  has_many :followed_posts,
    through: :followees,
    source: :posts

  # belongs_to :profile_pic,
  #   class_name: "Post",
  #   primary_key: :id,
  #   foreign_key: :profile_pic_id

  def num_followers
    followers.count(:id) || 0
  end

  def num_posts
    posts.count(:id) || 0
  end

  def num_following
    you_following.count(:id) || 0
  end

  def profile_pic
    Post.select(:drawing).where(id: self.profile_pic_id).first
  end

  def following?
    self.followers.include?(current_user)
  end


  #_________Authentication________

  def self.generate_session_token
    SecureRandom.base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user ||= User.find_by(email: username)
    return user if user && user.is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end
