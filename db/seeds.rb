# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Template:
# User.create(first_name: '', last_name: '', email: '', password: '', birthday: '', gender: '', hometown: '', school: '', profile_picture: '', work: '', intro_bio: '', relationship: '');


ActiveRecord::Base.transaction do
  demo_user = User.create(first_name: 'Demo', last_name: 'User', email: 'kentokento@kento.com', password: 'ajtedjsgea', birthdate: 'Mar 3 1990', gender: 'Male', hometown: 'Demo Town', school: 'Demo School', profile_picture: '', work: 'Demoing', intro_bio: 'Demo Introduction Bio', relationship: 'Single');
  its_a_me = User.create(first_name: 'Kent', last_name: 'Hiroi', email: 'kent@kent.com', password: 'kentspassword', birthdate: 'Nov 21 1996', gender: 'Male', hometown: 'San Francisco', school: 'San Francisco State University', profile_picture: '', work: 'Open for work!', intro_bio: 'Im Kent, woo!', relationship: '');
  random_user = User.create(first_name: 'Random', last_name: 'Man', email: 'random@random.com', password: 'randompassword', birthdate: 'Dec 23 1998', gender: 'Male', hometown: 'Random Town', school: 'Random School', profile_picture: '', work: 'Being Random', intro_bio: 'Some random bio blah blah blah', relationship: "It's complicated");
  tokidoki = User.create(first_name: 'Hajime', last_name: 'Taniguchi', email: 'tokidoki777@lucky.com', password: 'tokidoki7', birthday: 'Jul 7 1985', gender: 'Male', hometown: 'Chiba', school: 'Tokyo University', profile_picture: '', work: 'Professional Gamer', intro_bio: 'Fighting games are something so great', relationship: 'Single');
end