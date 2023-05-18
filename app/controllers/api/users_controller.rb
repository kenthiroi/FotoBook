class Api::UsersController < ApplicationController
  
  def index
    @users = User.where(first_name: user_params['first_name'], last_name: user_params['last_name'])
    render :index
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      @photo_post = Post.find_by(id: @user.profile_picture)
      if @photo_post
        @photoUrl = @photo_post.photo
      end
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :gender, :birthdate, :email, :password, :profile_picture, :profile_banner, :intro_bio, :work, :school, :relationship, :hometown)
  end
end