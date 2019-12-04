def palindrome(word)
  if word == word.reverse
    puts 'it is a palindrom'
  else
    puts 'not a palindrome'
  end
end
palindrome('asa')


require 'facets'

s1 = "aasmflathesorcerersnstonedksaottersapldrrysaahf"
s2 = "harrypotterandtheasorcerersstone"
freq1 = s1.chars.frequency
freq2 = s2.chars.frequency
freq2.all? { |char2, count2| freq1[char2] >= count2 }
#=> true
Write your own Array#frequency if you don't want to the facets dependency.

class Array
  def frequency
    Hash.new(0).tap { |counts| each { |v| counts[v] += 1 } }
  end
end
