module V1
  class ArticlesController < ApplicationController
      before_action :set_article, only: [:show, :update, :destroy]
      skip_before_action :verify_authenticity_token


      def index 
        if user_signed_in?
          render json: current_user.articles
        else
          render json: {}, status: 401
        end 
      end

      def create 
        if user_signed_in? 
          if article = current_user.articles.create(article_params)
            render json: article, status: :created 
          else 
            render json: article.errors, status: 400
          end
        else 
          render json: {}, status: 401
        end
      end

      def show
        render json: current_user.articles
      end

      def update
        if @article.update(article_params)
         render json: @article
        else
         render json: @article.errors, status: :unprocessable_entity
        end
      end


      def destroy
        @article.destroy
      end

      private
      def set_article
        @article = Article.find(params[:id])
      end

      def article_params
       params.require(:article).permit(:title, :content)
      end
  end

end