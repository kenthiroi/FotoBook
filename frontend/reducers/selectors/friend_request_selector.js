export const selectAllFriendRequests = (state) => {
  return Object.values(state.entities.friend_requests)
}