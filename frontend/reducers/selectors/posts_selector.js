export const selectAllPosts = (state) => {
  return Object.values(state.entities.posts)
}

export const getAllLikesFromPosts = (state) => {
  return Object.values(state.entities.likes)
}