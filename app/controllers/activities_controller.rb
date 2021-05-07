class ActivitiesController < ApiController
    skip_before_action :authenticate_user!, only: [:index, :show]
    before_action :set_actvity, only: [:show, :update, :destroy]

    def index
        @activities = Activity.all
        render json: @activities
    end

    def show
        render json: @activity
    end

    def create
        @activity = Activity.new(activity_params)
        if activity.save
            render json: @activity
        else
            render json: @activity.errors
        end
    end

    def update
        if @activity.update(activity_params)
            render json: @activity
        else 
            render json: @activity.errors
    end
        
    def destroy
        @activity.destroy
        render json: {message: "#{@activity.type} has been deleted"}
    end

    private

    def set_activity
        @activity = Activity.find(params[:id])
    end

    def activity_params
        params.require(:activity).permit(:name, :location, :description)
    end
end
