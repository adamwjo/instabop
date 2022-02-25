class ProfilewithuserSerializer < ActiveModel::Serializer
  attributes :id, :phone_num, :bio, :profile_img, :age
  belongs_to :user
end
