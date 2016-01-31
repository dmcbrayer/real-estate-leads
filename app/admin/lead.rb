ActiveAdmin.register Lead do

  permit_params :email, :name, :survey, :phone, :address

  index do
    selectable_column
    id_column
    column :name
    column :email
    column :address
    column :phone
    column :survey
    column :created_at
    actions
  end

  filter :name
  filter :email
  filter :address
  filter :phone
  filter :survey
  filter :created_at

  form do |f|
    f.inputs "Lead Details" do
      f.input :name
      f.input :email
      f.input :phone
      f.input :address
      f.input :survey
    end
    f.actions
  end

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end


end
