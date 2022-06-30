json.extract! post, :id, :body, :user_id, :profile_banner_update, :profile_pic_update
json.first_name post.user.first_name
json.last_name post.user.last_name
json.photoUrl url_for(post.photo) if post.photo.attached?
json.likes do
  post.likes.each do |like|
    json.set! like.id do 
      json.partial! 'api/likes/like', like: like
    end
  end
end
json.comments do
  post.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end