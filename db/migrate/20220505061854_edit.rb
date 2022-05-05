class Edit < ActiveRecord::Migration[5.2]
  def change
    add_index :friend_requests, [:sender_id], unique: true
    add_index :friend_requests, [:receiver_id], unique: true
    add_index :friends, [:user_id], unique: true
    add_index :friends, [:friend_id], unique: true
  end
end
