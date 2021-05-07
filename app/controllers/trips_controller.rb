class TripsController < ApiController
    skip_before_action :authenticate_user!, only: [:all_trips, :show]
    before_action :set_trip, only: [:show, :update, :destroy]

    #user logged in
    def index
        @trips = current_user.trips
        render json: @trips, include: [:user]
        # @trips = User.find(params[:user_id]).trips
    end
    #all trips in database
    def all_trips
        @trips = Trip.all
        render json: @trips
    end

    def show
        render json: @trip, include: [:days]
    end

    def create
        # @user = User.find(params[:user_id])
        # render json: @user
        @trip = current_user.trips.build(trip_params)
        if @trip.save
            render json: @trip, status: :created
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