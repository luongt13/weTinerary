class TripsController < ApiController
    skip_before_action :authenticate_user!, only: [:index, :show, :all_trips]
    before_action :set_trip, only: [:show, :update, :destroy]

    def index
        # @trips = Trip.all
        # render json: @trips, include: [:user]
        @trips = User.find(params[:user_id]).trips
    end

    def all_trips
        @trips = Trip.all
        render json: @trips, include: [:user]
    end

    def show
        render json: @trip, include: [:days]
    end

    def create
        # @trip = current_user.trips.new(trip_params)
        @trip = Trip.new(trip_params)
        # @trip.user_id = @current_user
        if trip.save
            render json: @trip
        else
            render json: @trip.errors
        end
    end

    def update
        if @trip.update(trip_params)
            render json: @trip
        else 
            render json: @trip.errors
        end
    end
        
    def destroy
        @trip.destroy
        render json: {message: "#{@trip.name} has been deleted"}
    end

    private

    def set_trip
        @trip = Trip.find(params[:id])
    end

    def trip_params
        params.require(:trip).permit(:name, :location, :description)
    end
end