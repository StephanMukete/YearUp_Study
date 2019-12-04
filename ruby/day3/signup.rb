class User
  attr_accessor :email, :password
  def initialize(email, password)
    @email = email
    @password = password
  end
end
puts "Welcome to my app!"
puts "What is your email?"
email = gets.chomp
puts "Create a password"
password = gets.chomp # works like prompt() in JS
user = User.new(email, password)
puts "Your profile:\n#{user.email}\n#{user.password}"
