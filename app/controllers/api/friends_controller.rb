class Api::FriendsController < ApplicationController
  def create
    @friend = Friend.new(friend_params)
    if @friend.save
      render :show 
    else
      render json: @friend.errors.full_messages, status: 400
    end
  end

  def show
    @friends = Friend.where(user_id: params[:id]).or(Friend.where(friend_id: params[:id]));
    if !!@friends
      render :index
    else
      render json: @friends.errors.full_messages, status: 400
    end
  end
  
  def destroy
    @friend = Friend.find_by(id: params[:id])
    if @friend 
      @friend.destroy
      render :show 
    else
      render json: @friend.errors.full_messages, status: 404
    end
  end

  private

  def friend_params 
    params.require(:friend).permit(:id, :user_id, :friend_id)
  end
end
