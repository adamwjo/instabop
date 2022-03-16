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
# t.text "text_content"
# t.string "image"
# t.integer "profile_id"

# post1 = 
# post2 = 

profile2 = Profile.create(
    user_id: user2.id,
    full_name: Faker::Name.unique.name,
    bio: Faker::Lorem.sentence(word_count: 30),
    profile_img: Faker::Avatar.image,
    phone_num: "555-555-5555",
    age: 45
)

post1 = Post.create({
    text_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/22.png",
    profile_id: profile1.id
})
post2 = Post.create({
    text_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/153.png",
    profile_id: profile1.id
})
post3 = Post.create({
    text_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/423.png",
    profile_id: profile2.id
})
post4 = Post.create({
    text_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/193.png",
    profile_id: profile2.id
})