class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def index_by_user_id
    @posts = Post.where(:user_id => post_params[:user_id])
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      # if post_params[:profile_pic_update]
      #   @user = User.find(@post.user_id)
      #   puts @user.posts
      #   @user.post_with_profile_picture = @post
      #   puts @user.post_with_profile_picture.photoUrl
      # end
      render :show
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post
      @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  private

  def post_params
    params.require(:post).permit(:id, :user_id, :body, :photo, :profile_pic_update, :profile_banner_update);
  end
end
