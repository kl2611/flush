class UsersController < ApplicationController
    before_action :require_logged_in!, only: [:index]
    before_action :require_logged_out!, only: [:new, :create]

    def index
        @users = User.all
        render :index
    end

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login_user!(@user)
            redirect_to :root
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    private
    def user_params
        params.require(:user).permit(:password, :username)
    end
end
