class AddToMailchimp

  LEADS_LIST='53691ce293'

  def initialize(user)
    @gibbon = Gibbon::Request.new
    @list = LEADS_LIST
    @user = user
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
        email_address: @user.email,
        status: "subscribed",
        merge_fields: {
          FNAME: @user.first_name,
          LNAME: @user.last_name
        }
      }
    }

    hash
  end
end