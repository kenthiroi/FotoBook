class Api::FriendRequestsController < ApplicationController
  def create
    @friend_request = FriendRequest.new(friend_request_params)
    if @friend_request.save
      render :show 
    else
      render json: @friend_request.errors.full_messages, status: 400
    end
  end

  def show
    @friend_requests = FriendRequest.where(sender_id: params[:id]).or(FriendRequest.where(receiver_id: params[:id]));
    if !!@friend_requests
      render :index
    else
      render json: @friend_requests.errors.full_messages, status: 400
    end
  end

  def destroy
    @friend_request = FriendRequest.find_by(id: params[:id])
    if @friend_request 
      @friend_request.destroy 
      render :show 
    else
      render json: @friend_request.errors.full_messages, status: 404
    end
  end


  def friend_request_params 
    params.require(:friend_request).permit(:id, :sender_id, :receiver_id)
  end
end
