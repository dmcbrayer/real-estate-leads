# == Route Map
#
#                         Prefix Verb       URI Pattern                               Controller#Action
#         new_admin_user_session GET        /admin/login(.:format)                    active_admin/devise/sessions#new
#             admin_user_session POST       /admin/login(.:format)                    active_admin/devise/sessions#create
#     destroy_admin_user_session DELETE|GET /admin/logout(.:format)                   active_admin/devise/sessions#destroy
#            admin_user_password POST       /admin/password(.:format)                 active_admin/devise/passwords#create
#        new_admin_user_password GET        /admin/password/new(.:format)             active_admin/devise/passwords#new
#       edit_admin_user_password GET        /admin/password/edit(.:format)            active_admin/devise/passwords#edit
#                                PATCH      /admin/password(.:format)                 active_admin/devise/passwords#update
#                                PUT        /admin/password(.:format)                 active_admin/devise/passwords#update
#                     admin_root GET        /admin(.:format)                          admin/dashboard#index
# batch_action_admin_admin_users POST       /admin/admin_users/batch_action(.:format) admin/admin_users#batch_action
#              admin_admin_users GET        /admin/admin_users(.:format)              admin/admin_users#index
#                                POST       /admin/admin_users(.:format)              admin/admin_users#create
#           new_admin_admin_user GET        /admin/admin_users/new(.:format)          admin/admin_users#new
#          edit_admin_admin_user GET        /admin/admin_users/:id/edit(.:format)     admin/admin_users#edit
#               admin_admin_user GET        /admin/admin_users/:id(.:format)          admin/admin_users#show
#                                PATCH      /admin/admin_users/:id(.:format)          admin/admin_users#update
#                                PUT        /admin/admin_users/:id(.:format)          admin/admin_users#update
#                                DELETE     /admin/admin_users/:id(.:format)          admin/admin_users#destroy
#                admin_dashboard GET        /admin/dashboard(.:format)                admin/dashboard#index
#       batch_action_admin_leads POST       /admin/leads/batch_action(.:format)       admin/leads#batch_action
#                    admin_leads GET        /admin/leads(.:format)                    admin/leads#index
#                                POST       /admin/leads(.:format)                    admin/leads#create
#                 new_admin_lead GET        /admin/leads/new(.:format)                admin/leads#new
#                edit_admin_lead GET        /admin/leads/:id/edit(.:format)           admin/leads#edit
#                     admin_lead GET        /admin/leads/:id(.:format)                admin/leads#show
#                                PATCH      /admin/leads/:id(.:format)                admin/leads#update
#                                PUT        /admin/leads/:id(.:format)                admin/leads#update
#                                DELETE     /admin/leads/:id(.:format)                admin/leads#destroy
#                 admin_comments GET        /admin/comments(.:format)                 admin/comments#index
#                                POST       /admin/comments(.:format)                 admin/comments#create
#                  admin_comment GET        /admin/comments/:id(.:format)             admin/comments#show
#                                DELETE     /admin/comments/:id(.:format)             admin/comments#destroy
#                           root GET        /                                         pages#home
#                            map GET        /map(.:format)                            pages#map
#                          leads GET        /leads(.:format)                          leads#new
#                                POST       /leads(.:format)                          leads#create
#                                PATCH      /leads(.:format)                          leads#update
#

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  root                      to: 'pages#home'

  get '/map',               to: 'pages#map'
  get '/privacy',           to: 'pages#privacy'

  get '/leads',             to: 'leads#new'
  post '/leads',            to: 'leads#create'
  post '/leads/send_email', to: 'leads#send_email'
  patch '/leads/:id',       to: 'leads#update'

  get '/value/:id',         to: 'leads#get_value'

end
