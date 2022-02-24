class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index
        render json: Post.all
    end

    def show
        post = find_post
        render json: post, status: :ok
    end

    def create
        new_post = Post.create!(post_params)
        render json: new_post, status: :created
    end

    def update
        post_to_update = find_post
        post_to_update = Post.update!(post_params)
        render json: post_to_update, status: :ok
    end

    def destroy
        post_to_delete = find_post
        post_to_delete.destroy
        render json: {message: "Post has been deleted"}
    end

    private

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:text_content, :image, :profile_id)
    end

    def unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def not_found_response
        render json: {errors: "Could not find what you were looking for"}, status: :not_found
    end
end
