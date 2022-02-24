class Post < ApplicationRecord
    belongs_to :profile

    validates :text_content, length: { maximum: 50 }
end
