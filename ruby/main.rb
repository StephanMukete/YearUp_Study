class Pokemon
  attr_reader :name, :hp
  def initialize(name,hp)
    @name = name
    @hp = hp
  end
end

pokemon = Pokemon.new('steph', 200)

puts pokemon
