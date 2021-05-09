class ActivitiesController < ApiController
    skip_before_action :authenticate_user!, only: [:index, :show]
    before_action :set_activity, only: [:show, :update, :destroy]

    def index
        @day = Day.find(params[:day_id])
        @activities = @day.activities
        render json: @activities
    end

    # def show
    #     render json: @activity
    # end

    def create
        @day = Day.find(params[:day_id])
        @activity = @day.activities.build(activity_params)
        if @activity.save
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
    end
        
    def destroy
        @activity.destroy
        render json: {message: "#{@activity.name} has been deleted"}
    end

    private

    def set_activity
        @activity = Activity.find(params[:id])
    end

    def activity_params
        params.require(:activity).permit(:id, :name, :location)
    end
end