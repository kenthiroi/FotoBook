class IndexOnFriendRequestIndexes < ActiveRecord::Migration[5.2]
  def change
    add_index :friend_requests, [:sender_id]
    add_index :friend_requests, [:receiver_id]
  end
end
