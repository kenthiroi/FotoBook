class Post < ApplicationRecord
  validates :body, presence: true
  
  belongs_to :user

  has_one_attached :photo
end
