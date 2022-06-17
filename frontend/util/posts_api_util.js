export const getPostIndex = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/api/posts",
    })
  )
}

export const getUsersPosts = formData => {
  return (
    $.ajax({
      method: "POST",
      url: "/api/posts/by_user_id",
      data: formData,
      contentType: false,
      processData: false
    })
  )
}

export const getPost = postId => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/posts/${postId}`
    })
  )
}

// export const createPost = post => {
//   return (
//     $.ajax({
//       method: "POST",
//       url: "/api/posts",
//       data: {
//         post
//       }
//     })
//   )
// }

export const createPost = formData => {
  return (
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
  )
}

export const editPost = formData => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/posts/${formData.get('post[id]')}`,
      data: formData,
      contentType: false,
      processData: false
    })
  )
}

export const deletePost = postId => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/posts/${postId}`
    })
  )
}