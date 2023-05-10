if @users
  @users.each do |user|
    json.set! "#{user.id}" do
      json.extract! user, 
        :id, :email, :fname, :lname, :jobs, :schools, :current_city, 
        :hometown, :birthday, :gender, :relationship_status, :created_at
      json.friends user.friends

      if user.profpic.attached?
        json.profpic user.profpic.service_url
      end

      if user.cover_photo.attached?
        json.cover_photo user.cover_photo.service_url
      end
    end
  end
end