# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "deleting users 🗑"
User.destroy_all

puts "deleting profiles 🗑"
Profile.destroy_all

puts "deleting posts 🗑"
Post.destroy_all

puts "creating users 🧑🏽‍💻 and their profiles"
user1 = User.create(email: "cowboybebop@mail.com", password: "password1")
user2 = User.create(email: "spacecowboy@mail.com", password: "password2")


profile1 = Profile.create(
    user_id: user1.id,
    full_name: Faker::Name.unique.name,
    bio: Faker::Lorem.sentence(word_count: 30),
    profile_img: Faker::Avatar.image,
    phone_num: "555-555-5555",
    age: 22
)

profile2 = Profile.create(
    user_id: user2.id,
    full_name: Faker::Name.unique.name,
    bio: Faker::Lorem.sentence(word_count: 30),
    profile_img: Faker::Avatar.image,
    phone_num: "555-555-5555",
    age: 45
)