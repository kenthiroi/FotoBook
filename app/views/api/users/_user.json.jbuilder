json.extract! user, :id, :email, :first_name, :last_name, :email, :birthdate, :hometown, :school
json.posts do
  user.posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end