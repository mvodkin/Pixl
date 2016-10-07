class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      render :index
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    @posts = current_user.followed_posts.includes(:comments).includes(:likes)
    render :index
  end

  private

  def post_params
    params.require(:post).permit(:img_url, :description)
  end

end
