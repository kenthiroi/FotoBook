export const createFriend = friend => {
  return (
    $.ajax({
      method: "POST",
      url: "/api/friends",
      data: {
        friendRequest
      }
    })
  )
}

export const deleteFriend = friendId => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/friends/${friendId}`
    })
  )
}