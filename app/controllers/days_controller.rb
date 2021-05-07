class DaysController < ApiController
    skip_before_action :authenticate_user!, only: [:index, :show]
    before_action :set_day, only: [:show, :update, :destroy]

    def index
        @days = Day.all
        render json: @days
    end

    def show
        render json: @day, include: [:activities]
    end

    def create
        @day = Day.new(day_params)
        if day.save
            render json: @day
        else
            render json: @day.errors
        end
    end

    def update
        if @day.update(day_params)
            render json: @day
        else 
            render json: @day.errors
    end
        
    def destroy
        @day.destroy
        render json: {message: "Day #{@day.day} has been deleted"}
    end

    private

    def set_day
        @day = Day.find(params[:id])
    end

    def day_params
        params.require(:day).permit(:day)
    end
end
