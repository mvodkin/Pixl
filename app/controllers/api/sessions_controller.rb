class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render :show
    else
      render json: "Invalid username or password", status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: {}, status: 422
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end

end
