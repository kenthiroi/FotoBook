class User < ApplicationRecord
  after_initialize :ensure_session_token
  attr_reader :password
  validates :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true
  
  has_one_attached :photo

  has_many :posts

  has_many :likes

  has_many :friends,
     ->(user) { unscope(where: :user_id).where("user_id = ? OR friend_id = ?", user.id, user.id) }, 
     class_name: :Friend

  has_many :friend_requests

  has_many :comments

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_valid_password?(password)
      return user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end