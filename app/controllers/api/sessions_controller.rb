class Api::SessionsController < ApplicationController
  def create
    if (User.find_by(email: params[:user][:email]))
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      if @user
        login(@user)
        render "api/users/show"
      else
        render json: ["Invalid login credentials"], status: 401
      end
    else
      render json: ["The email you entered isn’t connected to an account. Create a new account and log in."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
    else
      render json: ["A user is not logged in."], status: 404
    end
  end
end
