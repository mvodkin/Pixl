class Api::PostsController < ApplicationController

  def create
    p params
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      render :index
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    if params[:explore] == "true"
      @posts = Post.all.includes(:author, :likes, :likers, comments: :user)
    elsif params[:userId] == ""
      @posts = Post.feed(current_user)
        .includes(:author, :likes, :likers, comments: :user)#.page(1).per_page(2)

    else
      @posts = Post.where(user_id: params[:userId])
        .includes(:author, :likes, :likers, comments: :user)
        # .includes(:user, comments: :user, likes: :liker)
    end
    render :index
  end

  private

  def post_params
    params.require(:post).permit(:description, drawing: [])
  end

end
