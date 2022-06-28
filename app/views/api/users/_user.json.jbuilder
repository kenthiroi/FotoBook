json.extract! user, :id, :email, :first_name, :last_name, :email, :birthdate, :hometown, :school
json.profile_picture url_for(user.photo) if user.photo.attached?