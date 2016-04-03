class GetZestimate

  def initialize(params)
    @address = params[:address]
    @city_state = params[:city_state]
  end

  def call
    get_property.price
  end

  def get_property
    Rubillow::HomeValuation.search_results({
      address: @address,
      citystatezip: @city_state
    })
  end

end