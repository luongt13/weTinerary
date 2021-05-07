class DaysController < ApiController
    skip_before_action :authenticate_user!, only: [:index, :show]
    before_action :set_day, only: [:show, :update, :destroy]

    def index
        @trip = Trip.find(params[:trip_id])
        @days = @trip.days
        render json: @days, include: [:activities]
    end

    def show
        render json: @day, include: [:activities]
    end

    def create
        @trip = Trip.find(params[:trip_id])
        @day = @trip.days.build(day_params)
        # @day = Day.new(day_params)
        if @day.save
            render json: @day, include: [:activities]
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
    end
        
    def destroy
        @day.destroy
        render json: {message: "Day #{@day.trip_day} has been deleted"}
    end

    private

    def set_day
        @day = Day.find(params[:id])
    end

    def day_params
        params.require(:day).permit(:trip_day, activities_attributes: [:name, :location])
    end
end
