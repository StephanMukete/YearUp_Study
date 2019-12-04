require 'curb'

class Pokemon
  @@url = 'https://fizal.me/pokeapi/api/v2/id/257.json'
  attr_accessor :name
  def initialize(name)
    @name = name
    @hp = nil
    @atk = nil
    @defense = nil
    @sp_def = nil
    @exp = 0
    @level = 1
    self.request_pokemon
  end

  def request_pokemon
    req = Curl::Easy.perform(%(#{@@url}pokemon/#{@name.downcase}))
    data = JSON.parse(req.body_str)
    stats = {
      hp = data['stats'][5]['base_stat']
      atk = data['stats'][5]['base_stat']
      defence = data['stats'][5]['base_stat']
    }
    self.assign_stats(stats)
  end

  def assign_stats(s)
    @hp = s[:hp]
    @atk = s[:atk]
    @defense =s[:defense]
    @sp_atk = [:sp_atk]
    @sp_def = [:sp_def]
    @sp_atk

end
pokemon = Pokemon.new('pikachu')
