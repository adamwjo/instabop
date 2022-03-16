class AuthController < ApplicationController

    def profile
        render json: User.first.profile
    end
end
