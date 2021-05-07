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
end
