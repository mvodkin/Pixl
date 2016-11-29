export const fetchPosts = (success, error, userId = null, explore = false) => {
  $.ajax({
    method: "GET",
    url: "api/posts",
    data: { userId, explore },
    success,
    error
  });
}

export const fetchPost = (success, error, postId) => {
  $.ajax({
    method: "GET",
    url: `api/posts/${postId}`,
    success,
    error
  })
}

export const updatePost = (success, error, post) => {
  $.ajax({
    method: "PATCH",
    url: `api/posts/${post.post.id}`,
    data: post,
    success,
    error
  })
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
    data: { likes: { post_id } },
    success,
    error
  })
}

export const destroyLike = (post_id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: "api/likes",
    data: { likes: { post_id } },
    success,
    error
  })
}
