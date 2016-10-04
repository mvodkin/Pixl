class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :profile_desc, :profile_pic_id)
  end

end
