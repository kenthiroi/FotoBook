class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :friend_1, null: false
      t.integer :friend_2, null: false
      t.timestamps
    end
  end
end
