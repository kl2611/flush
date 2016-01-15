class Api::TagsController < ApplicationController
    def index
        if params[:query]
            @tags =  Tag.queried_tags(params[:query])
            render :index
        elsif params[:number]
            @tags = []
            params[:number].to_i.times do
                @tags << Tag.all.sample
            end
            render :index
        end
    end

    def create
        @tag = Tag.new(tag_params)

        if tag.save
            render :show
        else
            flash[:errors] = @tag.errors.full_messages
        end
    end

    def show
        @tag = Tag.find(params[:id])
        render :show
    end

    private
    def tag_params
        params.require(:tag).permit(:name)
    end
end
