class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password
  has_one :profile
end
