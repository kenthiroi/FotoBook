export const selectAllPosts = (state) => {
  return Object.values(state.entities.posts)
}

export const selectUsersPosts = (state, userId) => {
  const posts = Object.values(state.entities.posts);
  console.log(posts);
  const results = posts.filter(post => post.user_id === parseInt(userId));
  return results;
}

export const getAllLikesFromPosts = (state) => {
  return Object.values(state.entities.likes)
}