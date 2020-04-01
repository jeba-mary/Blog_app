module V1
  module CustomDevise
    class SessionsController < Devise::SessionsController
      respond_to :json

      acts_as_token_authentication_handler_for User, fallback_to_devise: false
      #skip_before_action :authenticate_entity_from_token!, only: [:create]
      #skip_before_action :authenticate_entity!, only: [:create]

      # POST /users/sign_in
      skip_before_action :verify_authenticity_token

      # POST /v1/login
      def create
        @user = User.find_by_email(sign_in_params[:email])
        return invalid_login_attempt unless @user
    
        if @user.valid_password?(sign_in_params[:password])
          sign_in :user, @user
          render json: @user
        else
          invalid_login_attempt
        end
      end


      # DELETE /users/sign_out
      

      def destroy
        sign_out(@user)
        render :json=> {:success=>true}
      end
      private

      def sign_in_params
        params.fetch(:session).permit([:password, :email])
      end

      def reset_token(resource)
        resource.authentication_token = nil
        resource.save!
      end
    end
  end
end