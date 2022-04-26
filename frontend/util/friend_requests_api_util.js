export const createFriendRequest = friendRequest => {
  return (
    $.ajax({
      method: "POST",
      url: "/api/friend_requests",
      data: {
        friendRequest
      }
    })
  )
}

export const deleteFriendRequest = friendRequestId => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/friend_requests/${friendRequestId}`
    })
  )
}