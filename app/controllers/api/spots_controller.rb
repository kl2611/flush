class Api::SpotsController < ApplicationController
    def index
        #get_spots_from_params
        @spots = Spot.all
        render :index
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
end
