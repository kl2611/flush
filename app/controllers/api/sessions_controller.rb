class SessionsController < ApplicationController
    before_action :require_logged_in!, only: [:destroy]
    before_action :require_logged_out!, only: [:new, :create]

    def new
        render :new
    end

    def create
        user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if user.nil?
            flash.now[:errors] = ["Incorrect username and/or password"]
            render :new
        else
            login_user!(user)
            render json: current_user
        end
    end

    def destroy
        logout_user!
        render json: ["Logged out successfully"]
    end

    def show
        render json: current_user
    end
end
