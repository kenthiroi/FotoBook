class Comment < ApplicationRecord
  validates :body, :author_id, :post_id, presence: true
  
  belongs_to :user

  belongs_to :comments
  
  has_many :comments

  has_many :likes

end
