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
  
end
