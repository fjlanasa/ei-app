# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
words = [
  {"happy" => [
    "optimistic",
    "intimate",
    "peaceful",
    "powerful",
    "accepted",
    "proud",
    "interested",
    "joyful",
    "liberated",
    "estatic",
    ]
  },
  {"surprise" => [
    "startled",
    "confused",
    "amazed",
    "excited"
    ]
  },
  {"fear" => [
    "humiliated",
    "rejected",
    "submissive",
    "insecure",
    "anxious",
    "scared"
    ]
  },
  {"anger" => [
    "hurt",
    "threatened",
    "hateful",
    "mad",
    "aggressive",
    "frustrated",
    "distant",
    "critical"
    ]
  },
  {"disgust" =>[
    "disapproval",
    "disappointed",
    "awful",
    "avoidance"
    ]
  },
  {"sad" => [
    "guilty",
    "abandoned",
    "despair",
    "depressed",
    "lonely",
    "bored"
    ]
  }
]

words.each do |word|
  word.each do |key, value|
    level_one_word = LevelOneWord.create(name: key)
    value.each do |word|
      LevelTwoWord.create(name: word, level_one_word_id: level_one_word.id)
    end
  end
end
