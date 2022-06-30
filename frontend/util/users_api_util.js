export const getUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
}

export const updateUser = formData => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${formData.get('user[id]')}`,
    data: formData,
    contentType: false,
    processData: false,
  })
}