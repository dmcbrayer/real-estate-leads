class LeadMailer < BaseMandrillMailer
  LEAD_FOLLOWUP_TEMPLATE = 'your-home-value'

  def lead_message(lead)
    
    merge_vars = {
      'LEAD_NAME' => lead.name,
    }

    email = lead.email
    subject = "Your free home value report is on its way!"
    template = LEAD_FOLLOWUP_TEMPLATE

    construct_and_send(email, subject, template, merge_vars)
  end
end
