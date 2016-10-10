class Api::LikesController < ApplicationController

  def create

    @like = Like.new(
      liker_id: current_user.id,
      liked_post_id: likes_params[:post_id]
    )

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(
      liker_id: current_user.id,
      liked_post_id: likes_params[:post_id]
    )

    if @like
      render :show
      @like.destroy
    else
      render json: ["like not found"], status: 422
    end
  end

  private

  def likes_params
    params.require(:likes).permit(:post_id)
  end

end
