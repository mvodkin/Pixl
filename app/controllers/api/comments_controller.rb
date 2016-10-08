class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:post_id, :body)
  end

end
