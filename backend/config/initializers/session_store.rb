# Be sure to restart your server when you modify this file.

# NOTE: Too create cookies only for domain and not subdomain
# Rails.application.config.session_store :cookie_store, key: '_backend_session', domain: :all

Rails.application.config.session_store :cookie_store, key: '_backend_session'
