class IndexOnFriendRequests < ActiveRecord::Migration[5.2]
  def change
    remove_index :friend_requests, name: "index_friend_requests_on_receiver_id_and_sender_id"
    remove_index :friend_requests, name: "index_friend_requests_on_sender_id_and_receiver_id"
    add_index :friend_requests, [:sender_id, :receiver_id], name: "index_on_friend_requests_1", unique: true
    add_index :friend_requests, [:receiver_id, :sender_id], name: "index_on_friend_requests_2", unique: true
  end
end
