def word_check(word1,word2)
  h = Hash.new{0}
  word1.each_char { |c| h[c] += 1  }
  p h
  word2.each_char { |c| h[c] -= 1  }
  p h
  h.values.each {|i|
    return false if i < 0
  }
  return true
end
p word_check('leap', 'apple')
