class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :current_user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :current_user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:followers).find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :profile_desc, :profile_pic_id)
  end

end
