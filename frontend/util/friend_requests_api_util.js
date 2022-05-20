export const createFriendRequest = formData => {
  return (
    $.ajax({
      url: '/api/friend_requests',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
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