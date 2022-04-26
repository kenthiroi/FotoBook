json.extract! friend_request, :id, :sender_id, :receiver_id
json.sender_first_name friend_request.sender.first_name
json.sender_last_name friend_request.sender.last_name