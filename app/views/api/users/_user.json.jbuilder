json.extract! user, :id, :email, :first_name, :last_name, :email, :birthdate, :gender, :hometown, :school, :profile_picture, :profile_banner
json.photoUrl url_for(@photoUrl) if @photoUrl