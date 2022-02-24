class User < ApplicationRecord
    has_one :profile
    has_many :posts, through: :profile
end
