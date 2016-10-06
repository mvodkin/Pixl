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
