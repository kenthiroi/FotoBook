class Api::FriendsController < ApplicationController
  def create
    @friend = Friend.new(friend_params)
    if @friend.save
      render :show 
    else
      render json: @friend.errors.full_messages, status: 400
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


  def friend_params 
  params.require(:friend).permit(:id, :user_id, :friend_id)
  end
end
