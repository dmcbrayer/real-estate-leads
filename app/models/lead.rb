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

class Lead < ActiveRecord::Base

  def first_name
    name.split(' ').first
  end

  def last_name
    name.split(' ').last
  end

  def survey_response
    case survey
    when 1
      "I'm selling in 1-3 months"
    when 2
      "I'm selling in 3-6 months"
    when 3
      "I'm selling in 6-12 months"
    when 4
      "I'm just curious"
    when 5
      "I'm refinancing"
    else
      "No Response"
    end
  end
  
end
