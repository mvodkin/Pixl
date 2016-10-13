class AddColumnToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :drawing, :json
  end
end
