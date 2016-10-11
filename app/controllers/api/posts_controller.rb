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
    if params[:userId] == ""
      @posts = current_user.followed_posts
        .includes(:user, comments: :user, likes: :liker)
    # elsif params[:hashtag]
    #   @posts = Post.all
    else
      @posts = Post.where(user_id: params[:userId])
        .includes(:user, comments: :user, likes: :liker)
    end
    render :index
  end

  private

  def post_params
    params.require(:post).permit(:img_url, :description)
  end

end
