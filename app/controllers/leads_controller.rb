class LeadsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @lead = Lead.create(lead_params)
    if @lead.save
      flash[:notice] = "Thanks!"
      redirect_to thanks_path
    else
      flash[:danger] = "Nope"
      redirect_to root_url
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