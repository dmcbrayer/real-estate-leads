class PagesController < ApplicationController
  def home
  end

  def map
    @address = params[:address]
    @latitude = params[:latitude]
    @longitude = params[:longitude]
  end

end
