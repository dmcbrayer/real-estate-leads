class PagesController < ApplicationController
  def home
    @location = params[:location]
  end

  def map
    @address = params[:address]
    @latitude = params[:latitude] || "33.5206608"
    @longitude = params[:longitude] || "-86.80248999999998"
  end

  def privacy
  end

end
