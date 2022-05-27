export const selectAllFriendRequests = (state) => {
  return Object.values(state.entities.friendRequests)
}