

export const getLike = likeId => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/likes/${likeId}`
    })
  )
}

export const createLike = async(like) => {
  const res = await(
    $.ajax({
      method: "POST",
      url: "/api/likes",
      data: {
        like
      }
    })
  )

  return res
}

export const deleteLike = async(likeId) => {
  const res = await(
    $.ajax({
      method: "DELETE",
      url: `/api/likes/${likeId}`
    })
  )

  return res
}