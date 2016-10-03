OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '992813024162576', '02f8cd0c65445d1b1ea8afb620347711'
end
