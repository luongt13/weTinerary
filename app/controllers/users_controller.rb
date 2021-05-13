class UsersController < ApiController
    skip_before_action :authenticate_user!, only: [:index, :show]

    def index
        @users = User.all
        render json: @users, include: :trips
    end

    def show
        @user = User.find(params[:id])
        render json: @user, include: :trips
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user, status: :created
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end
    
    private
    
    def user_params
        params.permit(:name, :picture)
    end
    
end
