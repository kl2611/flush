class Api::ReviewsController < ApplicationController

    def index
        get_reviews_from_params
        render :index
    end

    def create
        @review = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages
        end
    end

    def show
        @review = Review.find(params[:id])
    end

    def update
        @review = Review.find(params[:review][:id])

        if @review.update(rating: params[:review][:rating], comment: params[:review][:comment])
            render :update
        else
            render json: @review.errors.full_messages
        end
    end

    def destroy
        @review = Review.find(params[:review][:id])

        if @review.delete
            render :show
        else
            render json: @review.errors.full_messages
        end
    end

    private
    def review_params
        params.require(:review).permit(:rating, :comment, :spot_id)
    end

    def get_reviews_from_params
        if params[:number]
            limit = params[:number]
            @reviews = Review.where("updated_at <= ?", DateTime.now).order("created_at DESC").limit(limit)
        elsif params[:user_id]
            @reviews = Review.where("user_id = #{params[:user_id]}").order("created_at DESC").limit(limit)
        elsif params[:spot_id]
            @reviews = Review.where("spot_id = #{params[:spot_id]}").order("created_at DESC").limit(limit)
        else
            @reviews = Review.all
        end
    end
end
