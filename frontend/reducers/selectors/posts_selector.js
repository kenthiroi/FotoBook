export const selectAllPosts = (state) => {
  return Object.values(state.entities.posts)
}

export const selectUsersPosts = (state, userId) => {
  const posts = Object.values(state.entities.posts);
  const results = posts.filter(post => post.user_id = userId);
  return results;
}

export const getAllLikesFromPosts = (state) => {
  return Object.values(state.entities.likes)
}