export const fetchProfile = (userId, success, error) => {
  $.ajax({
    method: "GET",
    url: `api/users/${userId}`,
    success,
    error
  })
}

export const updateProfile = (user, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: user,
    success,
    error
  })
}

export const createFollow = (userId, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/follows",
    data: { userId },
    success,
    error
  })
}

export const destroyFollow = (userId, success, error) => {
  $.ajax({
    method: "DELETE",
    url: "api/follows",
    data: { userId },
    success,
    error
  })
}
