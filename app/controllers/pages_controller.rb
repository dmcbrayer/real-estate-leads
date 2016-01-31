class PagesController < ApplicationController
  def home
  end

  def map
    @latitude = params[:latitude]
    @longitude = params[:longitude]
  end

  def thanks
  end
end
