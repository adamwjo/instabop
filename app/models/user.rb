class User < ApplicationRecord
    has_secure_password
    has_one :profile
    has_many :posts, through: :profile

    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
    
end
