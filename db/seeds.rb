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
  demo_user = User.create(first_name: '', last_name: '', email: '', password: '', birthday: '', gender: '', hometown: '', school: '', profile_picture: '', work: '', intro_bio: '', relationship: '');