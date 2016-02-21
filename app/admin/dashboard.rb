ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  page_action :export_mailchimp, method: :get do
    puts "NAAAAATTUUUUUUUREEEE"
    redirect_to admin_dashboard_path, notice: "Leads successfully exported"
  end

  action_item :export do
    link_to "Export Leads to Mailchimp", admin_dashboard_export_mailchimp_path, method: :get
  end

  content title: proc{ I18n.t("active_admin.dashboard") } do
    columns do
        column do
            panel "Recent Leads" do
                ul do
                    Lead.last(5).map do |lead|
                        li link_to(lead.address, admin_lead_path(lead))
                    end
                end
            end
        end
    end


    # div class: "blank_slate_container", id: "dashboard_default_message" do
    #   span class: "blank_slate" do
    #     span I18n.t("active_admin.dashboard_welcome.welcome")
    #     small I18n.t("active_admin.dashboard_welcome.call_to_action")
    #   end

    # Here is an example of a simple dashboard with columns and panels.
    #
    # columns do
    #   column do
    #     panel "Recent Posts" do
    #       ul do
    #         Post.recent(5).map do |post|
    #           li link_to(post.title, admin_post_path(post))
    #         end
    #       end
    #     end
    #   end

    #   column do
    #     panel "Info" do
    #       para "Welcome to ActiveAdmin."
    #     end
    #   end
    # end
  end # content
end
