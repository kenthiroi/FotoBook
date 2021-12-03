export const getPostIndex = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/api/posts"
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

export const editPost = post => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/posts/${post.id}`,
      data: {
        post
      }
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