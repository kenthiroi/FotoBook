class RemoveIndexOnFriendRequests < ActiveRecord::Migration[5.2]
  def change
    remove_index :friend_requests, name: "index_friend_requests_on_receiver_id"
    remove_index :friend_requests, name: "index_friend_requests_on_sender_id"
    add_index :friend_requests, [:receiver_id, :sender_id], unique: true
  end
end
