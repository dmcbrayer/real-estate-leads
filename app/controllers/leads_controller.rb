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

  def send_email
    lead = Lead.find(params[:lead_id])
    if LeadMailer.lead_message(lead).deliver_now 
      render json: { messsage: 'okey dokey' }, status: :ok
    else
      render json: { errors: ["Email could not be sent."]}, status: 422
    end
  end

  def get_value
    lead = Lead.find(params[:id])
    value = GetZestimate.new(address: lead.street_address, city_state: lead.city_state).call
    
    if value != nil
      render json: { value: value.to_f }, status: :ok
    else
      render json: { errors: ['No value for that address'] }, status: 422
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
