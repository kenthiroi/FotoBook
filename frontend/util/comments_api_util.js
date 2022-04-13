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

export const editComment = formData => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/comments/${formData.get('comment[id]')}`,
      data: formData,
      contentType: false,
      processData: false
    })
  )
}

export const deleteComment = commentId => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/comments/${commentId}`
    })
  )
}