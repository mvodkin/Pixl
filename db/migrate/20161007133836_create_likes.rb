class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :liked_post_id, null: false

      t.timestamps null: false
    end

    add_index :likes, :liker_id
    add_index :likes, :liked_post_id
  end
end
