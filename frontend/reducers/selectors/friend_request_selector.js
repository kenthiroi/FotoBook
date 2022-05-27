export const selectAllFriendRequests = (state) => {
  return Object.values(state.entities.friendRequests)
}

export const selectReceivingFriendRequests = (state, userId) => {
  const receivingFriendRequests = Object.values(state.entities.friendRequests).filter(friendRequest => {
    return userId === friendRequest.receiver_id;
  })
  return receivingFriendRequests;
}