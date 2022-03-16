class ProfilesController < ApplicationController

    def index
        render json: Profile.all
    end
    
    def show
        profile = find_profile
        render json: profile, status: :ok
    end

    private

    def find_profile
        Profile.find(params[:id])
    end

end
