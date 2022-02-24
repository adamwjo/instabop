class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.text :bio
      t.string :full_name
      t.string :phone_num
      t.string :profile_img
      t.integer :age
      t.integer :user_id
      t.timestamps
    end
  end
end
