export const fetchPosts = (success, error) => {
  $.ajax({
    method: "GET",
    url: "api/posts",
    success,
    error
  });
}

export const createPost = (post, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/posts",
    data: post,
    success,
    error
  });
}

export const createLike = (post_id, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/likes",
    data: { like: post_id },
    success,
    error
  })
}

export const destroyLike = (post_id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: "api/likes",
    data: { like: post_id },
    success,
    error
  })
}
