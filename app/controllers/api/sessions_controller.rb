class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      #render "index" page with json? after login
    else
      console.log("not logged in")
      render json: ["Invalid login credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      #render "login" page after logout
    else
      render json: ["Not a valid action"], status: 404
    end
  end
end