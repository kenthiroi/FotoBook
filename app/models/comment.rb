class Comment < ApplicationRecord
  validates :body, :author_id, presence: true
  
  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post,
    optional: true

  belongs_to :parent_comment,
    foreign_key: :parent_comment_id,
    class_name: :Comment,
    optional: true
  
  has_many :comments

  has_many :likes
end
