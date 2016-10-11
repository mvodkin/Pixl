class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(
      follower_id: current_user.id,
      followee_id: params[:userId]
    )

    if @follow.save
      render :show, status: 200
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(
      follower_id: current_user.id,
      followee_id: params[:userId]
    )

    if @follow
      render :show, status: 200
      @follow.destroy
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

end
