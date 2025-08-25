export interface BibleCharacter {
  name: string;
  gender: 'male' | 'female';
  level: number;
  clues: string[];
}

export const characters: BibleCharacter[] = [
  // Level 1 - Well-known characters
  {
    name: "Adam",
    gender: "male",
    level: 1,
    clues: [
      "I was the first human created by God.",
      "I lived in the Garden of Eden with my wife.",
      "I was made from the dust of the earth.",
      "I was given the task to name all the animals.",
      "I disobeyed God by eating from the forbidden tree."
    ]
  },
  {
    name: "Eve",
    gender: "female", 
    level: 1,
    clues: [
      "I was the first woman created by God.",
      "I was made from one of Adam's ribs.",
      "I was deceived by a serpent in the garden.",
      "I am called 'the mother of all living.'",
      "I ate from the tree of knowledge of good and evil."
    ]
  },
  {
    name: "Noah",
    gender: "male",
    level: 1,
    clues: [
      "God told me to build a large boat.",
      "I saved animals from a worldwide flood.",
      "I was 600 years old when the flood came.",
      "I sent out a dove to find dry land.",
      "God made a covenant with me using a rainbow."
    ]
  },
  {
    name: "Abraham",
    gender: "male",
    level: 1,
    clues: [
      "God promised to make me the father of many nations.",
      "I left my homeland to go to a land God would show me.",
      "God tested my faith by asking me to sacrifice my son.",
      "I had two sons: Ishmael and Isaac.",
      "My wife Sarah laughed when told she would have a child."
    ]
  },
  {
    name: "Sarah",
    gender: "female",
    level: 1,
    clues: [
      "I was married to Abraham and was barren for many years.",
      "I laughed when angels said I would have a child in old age.",
      "I gave birth to Isaac when I was 90 years old.",
      "I told Abraham to send away Hagar and her son.",
      "I died at 127 years old and was buried in Hebron."
    ]
  },
  {
    name: "Moses",
    gender: "male",
    level: 1,
    clues: [
      "I led the Israelites out of slavery in Egypt.",
      "I received the Ten Commandments from God on Mount Sinai.",
      "I was hidden in a basket as a baby and found by Pharaoh's daughter.",
      "I parted the Red Sea for the Israelites to cross.",
      "I died at 120 years old but never entered the Promised Land."
    ]
  },
  {
    name: "David",
    gender: "male",
    level: 1,
    clues: [
      "I killed a giant named Goliath with a sling and stone.",
      "I was a shepherd boy who became king of Israel.",
      "I wrote many of the Psalms in the Bible.",
      "I had an affair with Bathsheba.",
      "God promised that the Messiah would come from my lineage."
    ]
  },
  {
    name: "Jesus",
    gender: "male",
    level: 1,
    clues: [
      "I was born of a virgin in Bethlehem.",
      "I turned water into wine at a wedding.",
      "I walked on water and fed 5,000 people with five loaves and two fish.",
      "I died on a cross and rose from the dead on the third day.",
      "I am called the Son of God and the Messiah."
    ]
  },
  {
    name: "Mary",
    gender: "female",
    level: 1,
    clues: [
      "An angel told me I would give birth to the Son of God.",
      "I was a virgin when I conceived Jesus.",
      "I traveled to Bethlehem with Joseph when heavily pregnant.",
      "I gave birth to Jesus in a stable.",
      "I kept many things about Jesus in my heart."
    ]
  },
  {
    name: "Peter",
    gender: "male",
    level: 1,
    clues: [
      "I was a fisherman before Jesus called me to follow him.",
      "I walked on water towards Jesus but began to sink.",
      "I denied knowing Jesus three times before his crucifixion.",
      "Jesus gave me the keys to the kingdom of heaven.",
      "I preached the first sermon after Jesus' resurrection."
    ]
  },

  // Level 2 - Moderately known characters
  {
    name: "Joseph",
    gender: "male",
    level: 2,
    clues: [
      "I was sold into slavery by my jealous brothers.",
      "I had dreams that my family would bow down to me.",
      "I interpreted Pharaoh's dreams about seven years of famine.",
      "I became second in command in Egypt.",
      "I wore a colorful coat given to me by my father."
    ]
  },
  {
    name: "Esther",
    gender: "female",
    level: 2,
    clues: [
      "I was a Jewish queen in Persia.",
      "I risked my life to save my people from destruction.",
      "My Hebrew name was Hadassah.",
      "I replaced Queen Vashti.",
      "I helped expose Haman's plot against the Jews."
    ]
  },
  {
    name: "Daniel",
    gender: "male",
    level: 2,
    clues: [
      "I was thrown into a den of lions but was not harmed.",
      "I interpreted King Nebuchadnezzar's dreams.",
      "I refused to eat the king's food and drink his wine.",
      "I prayed three times a day facing Jerusalem.",
      "I had visions of future kingdoms and the end times."
    ]
  },
  {
    name: "Ruth",
    gender: "female",
    level: 2,
    clues: [
      "I was a Moabite woman who married into a Jewish family.",
      "I told my mother-in-law 'Where you go, I will go.'",
      "I gleaned grain in the fields of Boaz.",
      "I became the great-grandmother of King David.",
      "I chose to stay with Naomi rather than return to my people."
    ]
  },
  {
    name: "Solomon",
    gender: "male",
    level: 2,
    clues: [
      "I was known for my great wisdom.",
      "I built the first temple in Jerusalem.",
      "I had 700 wives and 300 concubines.",
      "Two women came to me claiming the same baby was theirs.",
      "I wrote many proverbs and songs."
    ]
  },
  {
    name: "John the Baptist",
    gender: "male",
    level: 2,
    clues: [
      "I baptized Jesus in the Jordan River.",
      "I ate locusts and wild honey in the wilderness.",
      "I was beheaded by King Herod.",
      "I was Jesus' cousin and six months older than him.",
      "I prepared the way for Jesus' ministry."
    ]
  },
  {
    name: "Paul",
    gender: "male",
    level: 2,
    clues: [
      "I persecuted Christians before becoming one myself.",
      "I was blinded by a bright light on the road to Damascus.",
      "I wrote many letters to early Christian churches.",
      "I was a Roman citizen and a Pharisee.",
      "I went on three missionary journeys."
    ]
  },
  {
    name: "Deborah",
    gender: "female",
    level: 2,
    clues: [
      "I was a prophetess and judge of Israel.",
      "I led Israel to victory against the Canaanites.",
      "I sat under a palm tree and settled disputes.",
      "I sang a victory song after defeating Sisera.",
      "I was one of the few female leaders in the Old Testament."
    ]
  },
  {
    name: "Joshua",
    gender: "male",
    level: 2,
    clues: [
      "I led the Israelites into the Promised Land after Moses died.",
      "I commanded the sun to stand still during a battle.",
      "I was one of the twelve spies sent to scout Canaan.",
      "I led the Israelites in conquering Jericho.",
      "I divided the Promised Land among the twelve tribes."
    ]
  },
  {
    name: "Jonah",
    gender: "male",
    level: 2,
    clues: [
      "I was swallowed by a great fish for three days.",
      "I tried to run away from God's command to preach to Nineveh.",
      "I was angry when God showed mercy to my enemies.",
      "I preached under a vine that God provided for shade.",
      "I learned about God's compassion for all people."
    ]
  }
];

export const getCharactersByLevel = (level: number): BibleCharacter[] => {
  return characters.filter(char => char.level === level);
};

export const getAllCharacterNames = (): Array<{name: string, gender: 'male' | 'female'}> => {
  return characters.map(char => ({ name: char.name, gender: char.gender }));
};