json.extract! comment, :id, :author_id, :post_id, :body
json.first_name comment.user.first_name
json.last_name comment.user.last_name