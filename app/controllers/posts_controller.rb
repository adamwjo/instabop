class PostsController < ApplicationController

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

    def update
        #get the param so we can find the entity we are trying to update
        my_post = Post.find(params[:id]) #we'll try to find it
        if my_post
            #if we find it, update it
            my_post.update(post_params)
            render json: my_post
        else
            render json: {message: "cant find the post you're looking for"}, status: :not_found
        end

        #if we cant we'll let people know
    end

    def destroy
        #get the param so we can find the entity we are trying to destory
        my_post = Post.find(params[:id])
        #we'll try to find it
        if my_post
            my_post.destroy
            render json: {message: "DELETED"}
        else
            render json: {message: my_post.errors.full_messages}, status: :not_found
        end
        #if we find it, delete it, we'll let people know it's deleted

        #if we cant we'll let people know
    end

    private

    def post_params
        params.permit(:text_content, :image, :profile_id)
    end
end
