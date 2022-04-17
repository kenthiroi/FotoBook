json.extract! friend_request, :id, :sender_id, :receiver_id
json.first_name friend_request.sender.first_name
json.last_name friend_request.sender.last_name