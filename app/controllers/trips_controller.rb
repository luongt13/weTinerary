class TripsController < ApiController
    skip_before_action :authenticate_user!, only: [:all_trips, :show]
    before_action :set_trip, only: [:show, :update, :destroy]

    #user logged in
    def index
        @trips = current_user.trips
        render json: @trips, include: [:user]
    end
    #all trips in database
    def all_trips
        @trips = Trip.all
        render json: @trips
    end

    def search 
        @results = Trip.location_similarity(params[:location])
        render json: @results
    end
    #show a specific trip
    def show
        render json: @trip, include: [:days, :activities]
    end
    #create a trip, specific to that user
    def create
        @trip = current_user.trips.build(trip_params)
        if @trip.save
            render json: @trip, status: :created
        else
            render json: @trip.errors
        end
    end
    #update trip name and descriptions
    def update
        if @trip.update(trip_params)
            render json: @trip
        else 
            render json: @trip.errors
        end
    end
    #delete a trip
    def destroy
        @trip.destroy
        render json: {message: "#{@trip.name} has been deleted"}
    end

    private
    #find a trip based on id
    def set_trip
        @trip = Trip.find(params[:id])
    end

    def trip_params
        params.require(:trip).permit(:name, :location, :description)
    end
end