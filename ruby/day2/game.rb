class Unit
  attr_accessor :name, :hp, :atk
  def initialize(name,hp,atk)
    self.name = name
    self.hp = 100
    self.atk = 20
  end

  def attack
    puts %(#{self.name} attacked)
  end
end

class Knight < Unit
  def initialize(name)
    super name
    self.hp = 120
    self.atk = 30
  end
end

# def self.all
#   puts "This is a static method"
# end
# def all
#   puts "this is an instance method"
# end
