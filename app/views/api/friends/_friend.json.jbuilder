json.extract! friend, :id, :user_id, :friend_id
json.user_first_name friend.user.first_name
json.user_last_name friend.user.last_name
json.friend_first_name friend.friend.first_name
json.friend_last_name friend.friend.last_name