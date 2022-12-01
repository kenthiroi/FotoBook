export const createFriend = friend => {
  return (
    $.ajax({
      url: '/api/friends',
      method: "POST",
      data: friend,
      contentType: false,
      processData: false
    })
  )
}

export const deleteFriend = friendId => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/friends/${friendId}`,
      contentType: false,
      processData: false
    })
  )
}