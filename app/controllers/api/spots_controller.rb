class Api::SpotsController < ApplicationController

    def index
        get_spots_from_params
        render :index
    end

    def create
        spot = Spot.create!(spot_params)
        render json: spot
    end

    def show
        @spot = Spot.find(params[:id])
        render :show
    end

  private
    def get_spots_from_params
        @spots = Spot.all.includes(:tags)
        if params[:tag_search]
            @spots = Spot.find_by_tag_partial(params[:tag_search])
        elsif params[:spot_search]
            @spots = Spot.find_by_spot_partial(params[:spot_search])
        end
    end

    def spot_params
        params.require(:spot).permit(
            :name,
            :lat,
            :lng,
            :description,
            :seating
        )
    end

    def bounds
        params[:bounds]
    end
end
