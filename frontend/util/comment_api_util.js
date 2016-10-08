export const createComment = (comment, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/comments",
    data: comment,
    success,
    error
  })
}
