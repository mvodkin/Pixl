class Api::LikesController < ApplicationController

  def create
    @like = Like.new(
      liker_id: current_user.id,
      liked_post_id: likes_params[:post_id]
    )

    if @like.save
      render json: @like, status 200
    else
      render json: @like.errors.full_messages, status 422
    end
  end

  def destroy
    @like = Like.find_by(
      liker_id: current_user.id,
      liked_post_id: likes_params[:post_id]
    )

    if @like
      like = @like.dup
      @like.destroy
      render json: like, status 200
    else
      render json: ["like not found"], status 422
    end
  end

  private

  def likes_params
    params.require(:like).permit(:post_id)
  end

end
