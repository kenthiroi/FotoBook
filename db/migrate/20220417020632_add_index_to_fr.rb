class AddIndexToFr < ActiveRecord::Migration[5.2]
  def change
    add_index :friend_requests, [:sender_id, :receiver_id], unique: true
    add_index :friends, [:user_id, :friend_id], unique: true
  end
end
