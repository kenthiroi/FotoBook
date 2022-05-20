export const createFriendRequest = formData => {
  return (
    $.ajax({
      method: "POST",
      url: "/api/friend_requests",
      data: formData
    })
  )
}

export const getFriendRequests = userId => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/friend_requests/${userId}`,
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