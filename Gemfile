source 'https://rubygems.org'

ruby '2.2.3'

gem 'rails', '4.2.5'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'devise'
gem 'react-rails', '~> 1.5.0'
gem 'activeadmin', github: 'activeadmin'
gem 'puma'
gem 'figaro'
gem 'gibbon'
gem 'mandrill-api'
gem 'httparty'

group :production do
  gem 'rails_12factor'
  gem 'pg'
end

group :development, :test do
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'annotate'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'foreman'
end

