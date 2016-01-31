class LeadsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @lead = Lead.create(lead_params)
    if @lead.save
      render json: @lead, status: :ok
    else
      render json: { errors: ["Problem saving lead"] }, status: 422
    end
  end

  private

  def lead_params
    params.require(:lead).permit(
      :email, 
      :name, 
      :survey, 
      :address, 
      :phone
    )
  end
end