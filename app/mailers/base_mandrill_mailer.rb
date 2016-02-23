require 'mandrill'

class BaseMandrillMailer < ActionMailer::Base

  default(
    from: "\"Dan\" <dan@effortlesshomevalues.com>",
    reply_to: 'info@effortlesshomevalues.com',
  )

  private

  def send_mail(email, subject, body)
    mail(to: email, subject: subject, body: body, content_type: 'text/html')
  end

  def mandrill_template(template_name, attributes)
    mandrill = Mandrill::API.new ENV['MANDRILL_KEY']

    merge_vars = attributes.map do |key, value|
      { name: key, content: value }
    end

    mandrill.templates.render(template_name, [], merge_vars)['html']
  end

  def construct_and_send(email, subject, template, merge_vars)
    body = mandrill_template(template, merge_vars)
    send_mail(email, subject, body)
  rescue Mandrill::Error => e
    puts "A mandrill error occurred: #{e.class} - #{e.message}"
    false
  end
end
