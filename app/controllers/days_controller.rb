class DaysController < ApiController
    skip_before_action :authenticate_user!, only: [:index, :show]
    before_action :set_day, only: [:show, :update, :destroy]
    before_action :set_trip, only: [:index, :create]
    #get all the days based on trip id
    def index
        @days = @trip.days.order(trip_day: :asc)
        render json: @days, include: [:activities]
    end
    #get a specific day
    def show
        render json: @day, include: [:activities]
    end
    #create a day
    def create
        @day = @trip.days.build(day_params)
        if @day.save
            render json: @day, include: [:activities]
        else
            render json: @day.errors
        end
    end
    #update a day and acitvities
    def update
        if @day.update(update_params)
            render json: @day, include: [:activities]
        else 
            render json: @day.errors
        end
    end
    #delete a day
    def destroy
        @day.destroy
        render json: {message: "Day #{@day.trip_day} has been deleted"}
    end

    private

    def set_day
        @day = Day.find(params[:id])
    end

    def set_trip
        @trip = Trip.find(params[:trip_id])
    end

    def day_params
        params.require(:day).permit(:trip_day, activities_attributes: [:name, :location, :start])
    end

    def update_params
        params.require(:day).permit(:trip_day, activities_attributes: [:id, :name, :location, :start])
    end
end
