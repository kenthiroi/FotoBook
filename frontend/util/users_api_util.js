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

export const searchUsers = formData => {
  console.log(formData.get('user[first_name]'));

  return $.ajax({
    method: 'POST',
    url: `/api/users/search`,
    data: formData,
    contentType: false,
    processData: false,
  })
}