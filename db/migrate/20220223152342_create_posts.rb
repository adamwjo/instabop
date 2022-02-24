class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :text_content
      t.string :image
      t.integer :profile_id
      t.timestamps
    end
  end
end
