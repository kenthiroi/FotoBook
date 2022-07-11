json.extract! user, :id, :email, :first_name, :last_name, :email, :birthdate, :gender, :hometown, :school, :work, :intro_bio, :relationship, :profile_picture, :profile_banner
json.photoUrl url_for(@photoUrl) if @photoUrl
json.friends do
  user.friends.each do |friend|
    json.set! friend.id do 
      json.partial! 'api/friends/friend', friend: friend
    end
  end
end