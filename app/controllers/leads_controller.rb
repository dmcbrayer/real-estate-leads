# == Schema Information
#
# Table name: leads
#
#  id         :integer          not null, primary key
#  email      :string
#  address    :string
#  name       :string
#  phone      :string
#  survey     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class LeadsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @lead = Lead.create
    render json: @lead, status: :ok
  end

  def create
    @lead = Lead.create(lead_params)
    if @lead.save
      render json: @lead, status: :ok
    else
      render json: { errors: ["Problem saving lead"] }, status: 422
    end
  end

  def update
    @lead = Lead.find(params[:id])
    if @lead.update(lead_params)
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
