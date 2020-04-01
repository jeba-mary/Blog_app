module V1
  module CustomDevise
    class RegistrationsController < Devise::RegistrationsController

    respond_to :json

      acts_as_token_authentication_handler_for User
      skip_before_action :verify_authenticity_token
      #skip_before_action :authenticate_entity_from_token!, only: [:create]
      #skip_before_action :authenticate_entity!, only: [:create]

      #skip_before_action :authenticate_scope!
     # append_before_filter :authenticate_scope!, only: [:destroy]


      # POST /users
    
      

      def create
        @user = User.new(sign_up_params)
        if @user.save
          render json: @user
        else
          warden.custom_failure!
          render json: { error: 'signup error' }, status: :unprocessable_entity       
         end
      end


      # DELETE /users/UUID
      def destroy
        resource.deactivated_at = DateTime.now
        resource.save!
        Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
      end

      private

      def sign_up_params
        params.fetch(:registration).permit([:password, :password_confirmation, :email])
      end

    end
  end
end