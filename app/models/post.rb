class Post < ApplicationRecord
    belongs_to :profile

    validates :text_content, length: { maximum: 500, minimum: 10 }
end
