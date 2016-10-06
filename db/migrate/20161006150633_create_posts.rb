class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :img_url
      t.text :description
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
