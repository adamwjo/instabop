class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :profile_img, :posts
  has_many :posts
end
