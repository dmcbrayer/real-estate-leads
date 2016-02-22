class AddToMailchimp
  include ApplicationHelper

  LEADS_LIST='53691ce293'

  def initialize(lead)
    @gibbon = Gibbon::Request.new
    @list = LEADS_LIST
    @lead = lead
  end

  def call
    hash = build_hash
    @gibbon.lists(@list).members.create(hash)

  rescue Gibbon::MailChimpError => e
    puts "#{e}"
    return false
  end

  private
  
  def build_hash
    hash = {
      body: {
        email_address: @lead.email,
        status: "subscribed",
        merge_fields: {
          FNAME: @lead.first_name || '',
          LNAME: @lead.last_name || '',
          ADDRESS: @lead.address || '',
          HORIZON: @lead.survey_response || '',
          PHONE: @lead.phone || '',
        }
      }
    }

    hash
  end
end