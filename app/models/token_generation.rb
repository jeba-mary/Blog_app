def generate_authentication_token
  loop do
    token = Devise.friendly_token
    break token unless self.class.exists?(authentication_token: token)
  end
end