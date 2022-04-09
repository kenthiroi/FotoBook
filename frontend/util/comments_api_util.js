export const createComment = formData => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/comments',
      data: formData,
      contentType: false,
      processData: false
    })
  )
}

export const editComment = comment => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/comments/${comment.id}`,
      data: {
        comment
      }
    })
  )
}

export const deletecomment = commentId => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/comments/${commentId}`
    })
  )
}