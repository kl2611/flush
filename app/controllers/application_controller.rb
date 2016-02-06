class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper_method :current_user, :current_user_id, :logged_in?

    private
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def current_user_id
        current_user ? current_user.id : nil
    end

    def logged_in?
        !current_user.nil?
    end

    def login_user!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout_user!
        current_user.reset_session_token! unless current_user.nil?
        session[:session_token] = nil
    end

    def require_user!
        render json: ["Not logged in!"] if current_user.nil?
    end

    def require_no_user!
        render json: {error: "Already logged in"}, status: 400 if current_user
    end

    def require_login!
        render json: {error: "Not logged in"}, status: 401 if current_user.nil?
    end

    def require_logged_in!
        redirect_to new_session_url if current_user.nil?
    end

    def require_logged_out!
        redirect_to root_url if logged_in?
    end
end
