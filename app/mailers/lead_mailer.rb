class LeaderMailer < BaseMandrillMailer

  LEAD_FOLLOWUP_TEMPLATE = ''

  def lead_message(lead)
    
    merge_vars = {
      'LEAD_NAME' => lead.name,
    }

    email = lead.email
    subject = "Your report is on its way"
    template = LEAD_FOLLOWUP_TEMPLATE

    construct_and_send(email, subject, template, merge_vars)
  end
end
