json.extract! post, :id, :body, :user_id
json.first_name post.user.first_name
json.last_name post.user.last_name
json.photoUrl url_for(post.photo) if post.photo.attached?