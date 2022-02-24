class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  # added rescue_from

    def index
        
    end

    def show
        
        post = Post.find(params[:id])

        if post
            render json: post, status: :ok
        else
            render json: {message: "Sorry cant find that bro"}, status: :not_found
        end
    end

    def create
        new_post = Post.create(post_params)
        if new_post.valid?
            render json: new_post, status: :ok
        else
            render json: {errors: new_post.errors.full_messages}, status: :unprocessable_entity 
        end
    end

    private

    def post_params
        params.permit(:text_content, :image, :profile_id)
    end

    def unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def not_found_response
        
    end
end
