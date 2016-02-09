class Api::UsersController < ApplicationController
    before_action :require_no_user!, only: [:create]

    def create
        @user = User.new(user_params)

        if @user.save
            login_user!(@user)
            render json: current_user
        else
            render json: @user.errors.full_messages, status: 400
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:password, :username)
    end
end
