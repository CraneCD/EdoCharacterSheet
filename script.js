// Subclass definitions based on 2024 PHB and Artificer
const subclasses = {
  artificer: {
    level: 3,
    options: [
      "Alchemist",
      "Armorer",
      "Artillerist",
      "Battle Smith"
    ]
  },
  barbarian: {
    level: 3,
    options: [
      "Path of the Berserker",
      "Path of the Storm Herald",
      "Path of the Wild Heart",
      "Path of the Zealot"
    ]
  },
  bard: {
    level: 3,
    options: [
      "College of Creation",
      "College of Glamour",
      "College of Lore",
      "College of Spirits",
      "College of Swords",
      "College of Valor"
    ]
  },
  cleric: {
    level: 1,
    options: [
      "Life Domain",
      "Light Domain",
      "Nature Domain",
      "Protection Domain",
      "Trickery Domain",
      "War Domain"
    ]
  },
  druid: {
    level: 2,
    options: [
      "Circle of the Land",
      "Circle of the Moon",
      "Circle of the Shepherd",
      "Circle of the Stars",
      "Circle of Wildfire"
    ]
  },
  fighter: {
    level: 3,
    options: [
      "Battle Master",
      "Champion",
      "Eldritch Knight",
      "Psi Knight",
      "Rune Knight"
    ]
  },
  monk: {
    level: 3,
    options: [
      "Way of Mercy",
      "Way of Shadow",
      "Way of the Ascendant Dragon",
      "Way of the Open Hand"
    ]
  },
  paladin: {
    level: 3,
    options: [
      "Oath of Devotion",
      "Oath of Glory",
      "Oath of the Ancients",
      "Oath of Vengeance"
    ]
  },
  ranger: {
    level: 3,
    options: [
      "Beast Master",
      "Fey Wanderer",
      "Gloom Stalker",
      "Hunter",
      "Swarmkeeper"
    ]
  },
  rogue: {
    level: 3,
    options: [
      "Arcane Trickster",
      "Assassin",
      "Phantom",
      "Swashbuckler",
      "Thief"
    ]
  },
  sorcerer: {
    level: 1,
    options: [
      "Aberrant Mind",
      "Clockwork Soul",
      "Divine Soul",
      "Draconic Bloodline",
      "Storm Sorcery",
      "Wild Magic"
    ]
  },
  warlock: {
    level: 1,
    options: [
      "The Archfey",
      "The Celestial",
      "The Fiend",
      "The Great Old One",
      "The Undying"
    ]
  },
  wizard: {
    level: 2,
    options: [
      "School of Abjuration",
      "School of Conjuration",
      "School of Divination",
      "School of Enchantment",
      "School of Evocation",
      "School of Illusion",
      "School of Necromancy",
      "School of Transmutation"
    ]
  }
};

// Tab Navigation
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.dataset.tab;
    
    // Update active tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // Show corresponding content
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === targetTab) {
        content.classList.add('active');
      }
    });
  });
});

// Calculate Ability Modifiers
const abilityInputs = document.querySelectorAll('.ability-input');

function calculateModifier(score) {
  return Math.floor((score - 10) / 2);
}

function updateModifier(abilityId) {
  const abilityScore = parseInt(document.getElementById(abilityId).value);
  const modifier = calculateModifier(abilityScore);
  const modSign = modifier >= 0 ? '+' : '';
  document.getElementById(`${abilityId}-mod`).textContent = `${modSign}${modifier}`;
  
  // Update related skills
  updateSkills();
  
  // Update saving throws
  updateSavingThrows();
  
  // Update initiative if dexterity changes
  if (abilityId === 'dexterity') {
    document.getElementById('initiative').value = `${modSign}${modifier}`;
  }
  
  // Update spell save DC and attack bonus if spellcasting ability changes
  updateSpellcasting();
}

abilityInputs.forEach(input => {
  input.addEventListener('change', () => {
    updateModifier(input.id);
  });
});

// Initialize ability modifiers
abilityInputs.forEach(input => {
  updateModifier(input.id);
});

// Update Skills based on ability modifiers and proficiency
function updateSkills() {
  const proficiencyBonus = 2 + Math.ceil(parseInt(document.getElementById('level').value) / 4) - 1;
  
  const skillMappings = {
    'acrobatics': 'dexterity',
    'animal-handling': 'wisdom',
    'arcana': 'intelligence',
    'athletics': 'strength',
    'deception': 'charisma',
    'history': 'intelligence',
    'insight': 'wisdom',
    'intimidation': 'charisma',
    'investigation': 'intelligence',
    'medicine': 'wisdom',
    'nature': 'intelligence',
    'perception': 'wisdom',
    'performance': 'charisma',
    'persuasion': 'charisma',
    'religion': 'intelligence',
    'sleight-of-hand': 'dexterity',
    'stealth': 'dexterity',
    'survival': 'wisdom'
  };
  
  Object.entries(skillMappings).forEach(([skill, ability]) => {
    const abilityScore = parseInt(document.getElementById(ability).value);
    const abilityMod = calculateModifier(abilityScore);
    let skillMod = abilityMod;
    
    // Add proficiency bonus if proficient
    if (document.getElementById(skill).checked) {
      skillMod += proficiencyBonus;
    }
    
    const modSign = skillMod >= 0 ? '+' : '';
    document.getElementById(`${skill}-mod`).textContent = `${modSign}${skillMod}`;
  });
}

// Add event listeners to skill checkboxes
document.querySelectorAll('.skill-item input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', updateSkills);
});

// Update level dependent calculations
document.getElementById('level').addEventListener('change', () => {
  updateSkills();
  updateSavingThrows();
  updateSpellcasting();
  updateHitDice();
});

// Update Hit Dice based on class and level
function updateHitDice() {
  const level = parseInt(document.getElementById('level').value);
  const characterClass = document.getElementById('class').value;
  let hitDie = 'd8'; // default
  
  // Set hit die based on class (updated for 5.5e)
  switch(characterClass) {
    case 'barbarian':
      hitDie = 'd12';
      break;
    case 'fighter':
    case 'paladin':
    case 'ranger':
      hitDie = 'd10';
      break;
    case 'sorcerer':
    case 'wizard':
      hitDie = 'd6';
      break;
    default:
      hitDie = 'd8'; // bard, cleric, druid, monk, rogue, warlock
  }
  
  document.getElementById('hit-dice').value = `${level}${hitDie}`;
}

// Update hit dice when class changes
document.getElementById('class').addEventListener('change', updateHitDice);

// Update Spellcasting information
function updateSpellcasting() {
  const spellcastingAbility = document.getElementById('spellcasting-ability').value;
  if (!spellcastingAbility) return;
  
  const abilityScore = parseInt(document.getElementById(spellcastingAbility).value);
  const abilityMod = calculateModifier(abilityScore);
  const proficiencyBonus = 2 + Math.ceil(parseInt(document.getElementById('level').value) / 4) - 1;
  
  // Calculate spell save DC: 8 + proficiency + ability modifier
  const saveDC = 8 + proficiencyBonus + abilityMod;
  document.getElementById('spell-save-dc').value = saveDC;
  
  // Calculate spell attack bonus: proficiency + ability modifier
  const attackBonus = proficiencyBonus + abilityMod;
  const modSign = attackBonus >= 0 ? '+' : '';
  document.getElementById('spell-attack-bonus').value = `${modSign}${attackBonus}`;
}

// Update spell calculations when spellcasting ability changes
document.getElementById('spellcasting-ability').addEventListener('change', updateSpellcasting);

// Update Saving Throws based on ability modifiers and proficiency
function updateSavingThrows() {
  const proficiencyBonus = 2 + Math.ceil(parseInt(document.getElementById('level').value) / 4) - 1;
  
  const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
  
  abilities.forEach(ability => {
    const abilityScore = parseInt(document.getElementById(ability).value);
    const abilityMod = calculateModifier(abilityScore);
    let saveMod = abilityMod;
    
    // Add proficiency bonus if proficient
    if (document.getElementById(`${ability}-save`).checked) {
      saveMod += proficiencyBonus;
    }
    
    const modSign = saveMod >= 0 ? '+' : '';
    document.getElementById(`${ability}-save-mod`).textContent = `${modSign}${saveMod}`;
  });
}

// Add event listeners to saving throw checkboxes
document.querySelectorAll('.save-item input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', updateSavingThrows);
});

// Spell database (2024 PHB spells)
const spellDatabase = {
  // Cantrips (level 0)
  0: [
    { name: "Acid Splash", castingTime: "1 action", range: "60 feet" },
    { name: "Blade Ward", castingTime: "1 action", range: "Self" },
    { name: "Chill Touch", castingTime: "1 action", range: "120 feet" },
    { name: "Dancing Lights", castingTime: "1 action", range: "120 feet" },
    { name: "Fire Bolt", castingTime: "1 action", range: "120 feet" },
    { name: "Guidance", castingTime: "1 action", range: "Touch" },
    { name: "Light", castingTime: "1 action", range: "Touch" },
    { name: "Mage Hand", castingTime: "1 action", range: "30 feet" },
    { name: "Mending", castingTime: "1 minute", range: "Touch" },
    { name: "Message", castingTime: "1 action", range: "120 feet" },
    { name: "Minor Illusion", castingTime: "1 action", range: "30 feet" },
    { name: "Poison Spray", castingTime: "1 action", range: "10 feet" },
    { name: "Prestidigitation", castingTime: "1 action", range: "10 feet" },
    { name: "Ray of Frost", castingTime: "1 action", range: "60 feet" },
    { name: "Resistance", castingTime: "1 action", range: "Touch" },
    { name: "Sacred Flame", castingTime: "1 action", range: "60 feet" },
    { name: "Shillelagh", castingTime: "1 bonus action", range: "Touch" },
    { name: "Shocking Grasp", castingTime: "1 action", range: "Touch" },
    { name: "Spare the Dying", castingTime: "1 action", range: "Touch" },
    { name: "Thaumaturgy", castingTime: "1 action", range: "30 feet" },
    { name: "True Strike", castingTime: "1 action", range: "30 feet" },
    { name: "Vicious Mockery", castingTime: "1 action", range: "60 feet" }
  ],
  // Level 1 spells
  1: [
    { name: "Burning Hands", castingTime: "1 action", range: "Self (15-foot cone)" },
    { name: "Charm Person", castingTime: "1 action", range: "30 feet" },
    { name: "Cure Wounds", castingTime: "1 action", range: "Touch" },
    { name: "Detect Magic", castingTime: "1 action", range: "Self" },
    { name: "Disguise Self", castingTime: "1 action", range: "Self" },
    { name: "Faerie Fire", castingTime: "1 action", range: "60 feet" },
    { name: "Feather Fall", castingTime: "1 reaction", range: "60 feet" },
    { name: "Find Familiar", castingTime: "1 hour", range: "10 feet" },
    { name: "Fog Cloud", castingTime: "1 action", range: "120 feet" },
    { name: "Goodberry", castingTime: "1 action", range: "Touch" },
    { name: "Healing Word", castingTime: "1 bonus action", range: "60 feet" },
    { name: "Identify", castingTime: "1 minute", range: "Touch" },
    { name: "Jump", castingTime: "1 action", range: "Touch" },
    { name: "Longstrider", castingTime: "1 action", range: "Touch" },
    { name: "Mage Armor", castingTime: "1 action", range: "Touch" },
    { name: "Magic Missile", castingTime: "1 action", range: "120 feet" },
    { name: "Protection from Evil and Good", castingTime: "1 action", range: "Touch" },
    { name: "Shield", castingTime: "1 reaction", range: "Self" },
    { name: "Silent Image", castingTime: "1 action", range: "60 feet" },
    { name: "Sleep", castingTime: "1 action", range: "90 feet" },
    { name: "Thunderwave", castingTime: "1 action", range: "Self (15-foot cube)" },
    { name: "Unseen Servant", castingTime: "1 action", range: "60 feet" }
  ],
  // Level 2 spells
  2: [
    { name: "Alter Self", castingTime: "1 action", range: "Self" },
    { name: "Blindness/Deafness", castingTime: "1 action", range: "30 feet" },
    { name: "Darkvision", castingTime: "1 action", range: "Touch" },
    { name: "Enhance Ability", castingTime: "1 action", range: "Touch" },
    { name: "Enlarge/Reduce", castingTime: "1 action", range: "30 feet" },
    { name: "Hold Person", castingTime: "1 action", range: "60 feet" },
    { name: "Invisibility", castingTime: "1 action", range: "Touch" },
    { name: "Knock", castingTime: "1 action", range: "60 feet" },
    { name: "Levitate", castingTime: "1 action", range: "60 feet" },
    { name: "Mirror Image", castingTime: "1 action", range: "Self" },
    { name: "Misty Step", castingTime: "1 bonus action", range: "Self" },
    { name: "Scorching Ray", castingTime: "1 action", range: "120 feet" },
    { name: "See Invisibility", castingTime: "1 action", range: "Self" },
    { name: "Spider Climb", castingTime: "1 action", range: "Touch" },
    { name: "Suggestion", castingTime: "1 action", range: "30 feet" }
  ],
  // Level 8 spells
  8: [
    { name: "Antimagic Field", castingTime: "1 action", range: "Self (10-foot radius)" },
    { name: "Antipathy/Sympathy", castingTime: "1 hour", range: "60 feet" },
    { name: "Clone", castingTime: "1 hour", range: "Touch" },
    { name: "Control Weather", castingTime: "10 minutes", range: "Self (5-mile radius)" },
    { name: "Demiplane", castingTime: "1 action", range: "60 feet" },
    { name: "Dominate Monster", castingTime: "1 action", range: "60 feet" },
    { name: "Feeblemind", castingTime: "1 action", range: "150 feet" },
    { name: "Incendiary Cloud", castingTime: "1 action", range: "150 feet" },
    { name: "Maze", castingTime: "1 action", range: "60 feet" },
    { name: "Mind Blank", castingTime: "1 action", range: "Touch" },
    { name: "Power Word Stun", castingTime: "1 action", range: "60 feet" },
    { name: "Sunburst", castingTime: "1 action", range: "150 feet" },
    { name: "Telepathy", castingTime: "1 action", range: "Unlimited" }
  ],
  // Level 9 spells
  9: [
    { name: "Astral Projection", castingTime: "1 hour", range: "10 feet" },
    { name: "Foresight", castingTime: "1 minute", range: "Touch" },
    { name: "Gate", castingTime: "1 action", range: "60 feet" },
    { name: "Imprisonment", castingTime: "1 minute", range: "30 feet" },
    { name: "Meteor Swarm", castingTime: "1 action", range: "1 mile" },
    { name: "Power Word Kill", castingTime: "1 action", range: "60 feet" },
    { name: "Prismatic Wall", castingTime: "1 action", range: "60 feet" },
    { name: "Shapechange", castingTime: "1 action", range: "Self" },
    { name: "Time Stop", castingTime: "1 action", range: "Self" },
    { name: "True Polymorph", castingTime: "1 action", range: "30 feet" },
    { name: "Weird", castingTime: "1 action", range: "120 feet" },
    { name: "Wish", castingTime: "1 action", range: "Self" }
  ]
};

// Class spell lists (which classes get which spells)
const classSpellLists = {
  bard: {
    0: ["Blade Ward", "Dancing Lights", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Prestidigitation", "True Strike", "Vicious Mockery"],
    1: ["Animal Friendship", "Bane", "Charm Person", "Comprehend Languages", "Cure Wounds", "Detect Magic", "Disguise Self", "Faerie Fire", "Feather Fall", "Healing Word", "Heroism", "Identify", "Illusory Script", "Longstrider", "Silent Image", "Sleep", "Speak with Animals", "Tasha's Hideous Laughter", "Thunderwave", "Unseen Servant"],
    2: ["Animal Messenger", "Blindness/Deafness", "Calm Emotions", "Cloud of Daggers", "Crown of Madness", "Detect Thoughts", "Enhance Ability", "Enthrall", "Heat Metal", "Hold Person", "Invisibility", "Knock", "Lesser Restoration", "Locate Animals or Plants", "Locate Object", "Magic Mouth", "Phantasmal Force", "See Invisibility", "Shatter", "Silence", "Suggestion", "Zone of Truth"],
    3: ["Bestow Curse", "Clairvoyance", "Dispel Magic", "Fear", "Feign Death", "Glyph of Warding", "Hypnotic Pattern", "Leomund's Tiny Hut", "Major Image", "Nondetection", "Plant Growth", "Sending", "Speak with Dead", "Stinking Cloud", "Tongues"],
    4: ["Compulsion", "Confusion", "Dimension Door", "Freedom of Movement", "Greater Invisibility", "Hallucinatory Terrain", "Locate Creature", "Polymorph"],
    5: ["Animate Objects", "Awaken", "Dominate Person", "Dream", "Geas", "Greater Restoration", "Hold Monster", "Legend Lore", "Mass Cure Wounds", "Mislead", "Modify Memory", "Planar Binding", "Raise Dead", "Scrying", "Seeming", "Teleportation Circle"],
    6: ["Eyebite", "Find the Path", "Guards and Wards", "Mass Suggestion", "Otto's Irresistible Dance", "Programmed Illusion", "True Seeing"],
    7: ["Etherealness", "Forcecage", "Mirage Arcane", "Project Image", "Regenerate", "Resurrection", "Symbol", "Teleport"],
    8: ["Dominate Monster", "Feeblemind", "Glibness", "Mind Blank", "Power Word Stun"],
    9: ["Foresight", "Power Word Heal", "Power Word Kill", "True Polymorph"]
  },
  cleric: {
    0: ["Guidance", "Light", "Mending", "Resistance", "Sacred Flame", "Spare the Dying", "Thaumaturgy"],
    1: ["Bane", "Bless", "Command", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Guiding Bolt", "Healing Word", "Inflict Wounds", "Protection from Evil and Good", "Purify Food and Drink", "Sanctuary", "Shield of Faith"],
    2: ["Aid", "Augury", "Blindness/Deafness", "Calm Emotions", "Continual Flame", "Enhance Ability", "Find Traps", "Gentle Repose", "Hold Person", "Lesser Restoration", "Locate Object", "Prayer of Healing", "Protection from Poison", "Silence", "Spiritual Weapon", "Warding Bond", "Zone of Truth"],
    3: ["Animate Dead", "Beacon of Hope", "Bestow Curse", "Clairvoyance", "Create Food and Water", "Daylight", "Dispel Magic", "Feign Death", "Glyph of Warding", "Magic Circle", "Mass Healing Word", "Meld into Stone", "Protection from Energy", "Remove Curse", "Revivify", "Sending", "Speak with Dead", "Spirit Guardians", "Tongues", "Water Walk"],
    4: ["Banishment", "Control Water", "Death Ward", "Divination", "Freedom of Movement", "Guardian of Faith", "Locate Creature", "Stone Shape"],
    5: ["Commune", "Contagion", "Dispel Evil and Good", "Flame Strike", "Geas", "Greater Restoration", "Hallow", "Insect Plague", "Legend Lore", "Mass Cure Wounds", "Planar Binding", "Raise Dead", "Scrying"],
    6: ["Blade Barrier", "Create Undead", "Find the Path", "Forbiddance", "Harm", "Heal", "Heroes' Feast", "Planar Ally", "True Seeing", "Word of Recall"],
    7: ["Conjure Celestial", "Divine Word", "Etherealness", "Fire Storm", "Plane Shift", "Regenerate", "Resurrection", "Symbol"],
    8: ["Antimagic Field", "Control Weather", "Earthquake", "Holy Aura", "Sunburst"],
    9: ["Astral Projection", "Gate", "Mass Heal", "True Resurrection"]
  },
  druid: {
    level: 2,
    options: [
      "Circle of the Land",
      "Circle of the Moon",
      "Circle of the Shepherd",
      "Circle of the Stars",
      "Circle of Wildfire"
    ]
  },
  fighter: {
    level: 3,
    options: [
      "Battle Master",
      "Champion",
      "Eldritch Knight",
      "Psi Knight",
      "Rune Knight"
    ]
  },
  monk: {
    level: 3,
    options: [
      "Way of Mercy",
      "Way of Shadow",
      "Way of the Ascendant Dragon",
      "Way of the Open Hand"
    ]
  },
  paladin: {
    level: 3,
    options: [
      "Oath of Devotion",
      "Oath of Glory",
      "Oath of the Ancients",
      "Oath of Vengeance"
    ]
  },
  ranger: {
    level: 3,
    options: [
      "Beast Master",
      "Fey Wanderer",
      "Gloom Stalker",
      "Hunter",
      "Swarmkeeper"
    ]
  },
  rogue: {
    level: 3,
    options: [
      "Arcane Trickster",
      "Assassin",
      "Phantom",
      "Swashbuckler",
      "Thief"
    ]
  },
  sorcerer: {
    level: 1,
    options: [
      "Aberrant Mind",
      "Clockwork Soul",
      "Divine Soul",
      "Draconic Bloodline",
      "Storm Sorcery",
      "Wild Magic"
    ]
  },
  warlock: {
    level: 1,
    options: [
      "The Archfey",
      "The Celestial",
      "The Fiend",
      "The Great Old One",
      "The Undying"
    ]
  },
  wizard: {
    level: 2,
    options: [
      "School of Abjuration",
      "School of Conjuration",
      "School of Divination",
      "School of Enchantment",
      "School of Evocation",
      "School of Illusion",
      "School of Necromancy",
      "School of Transmutation"
    ]
  }
};

// Function to filter spells by class and level
function getSpellsForClassAndLevel(className, level) {
  if (!className || !classSpellLists[className]) return spellDatabase[level] || [];
  
  const classSpells = classSpellLists[className][level] || [];
  return spellDatabase[level].filter(spell => classSpells.includes(spell.name));
}

// Function to show spell suggestions
function showSpellSuggestions(input, level) {
  const container = input.parentElement;
  const suggestions = container.querySelector('.spell-name-suggestions');
  const value = input.value.toLowerCase();
  
  const className = document.getElementById('spellcasting-class').value;
  const spells = getSpellsForClassAndLevel(className, level);
  
  const filtered = spells.filter(spell => 
    spell.name.toLowerCase().includes(value)
  );
  
  suggestions.innerHTML = '';
  filtered.forEach(spell => {
    const div = document.createElement('div');
    div.className = 'spell-suggestion';
    div.textContent = spell.name;
    div.addEventListener('click', () => {
      input.value = spell.name;
      // Auto-fill casting time and range
      const spellItem = input.closest('.spell-item');
      spellItem.querySelectorAll('input')[1].value = spell.castingTime;
      spellItem.querySelectorAll('input')[2].value = spell.range;
      suggestions.style.display = 'none';
    });
    suggestions.appendChild(div);
  });
  
  if (filtered.length > 0) {
    suggestions.style.display = 'block';
  } else {
    suggestions.style.display = 'none';
  }
}

// Add event listeners for spell name inputs
document.addEventListener('input', (e) => {
  if (e.target.classList.contains('spell-name-input')) {
    const level = parseInt(e.target.dataset.level);
    showSpellSuggestions(e.target, level);
  }
});

// Hide suggestions when clicking elsewhere
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('spell-name-input')) {
    document.querySelectorAll('.spell-name-suggestions').forEach(el => {
      el.style.display = 'none';
    });
  }
});

// Update spell suggestions when class changes
document.getElementById('spellcasting-class').addEventListener('change', () => {
  document.querySelectorAll('.spell-name-input').forEach(input => {
    const level = parseInt(input.dataset.level);
    showSpellSuggestions(input, level);
  });
});

// Function to create a new spell item
function createSpellItem(level) {
  const container = document.createElement('div');
  container.classList.add('spell-item');

  container.innerHTML = `
    <div class="spell-name-container">
      <input type="text" placeholder="Spell name" class="spell-name-input" data-level="${level}">
      <div class="spell-name-suggestions"></div>
    </div>
    <input type="text" placeholder="Casting Time">
    <input type="text" placeholder="Range">
    <button class="remove-spell" type="button">×</button>
  `;

  // Add remove button handler
  container.querySelector('.remove-spell').addEventListener('click', () => {
    container.remove();
  });

  return container;
}

document.addEventListener('DOMContentLoaded', () => {
  const cantripList = document.getElementById('cantrips-list');
  const level1List = document.getElementById('level-1-list');

  document.getElementById('add-cantrip').addEventListener('click', () => {
    const newCantrip = createSpellItem(0);
    cantripList.appendChild(newCantrip);
  });

  for (let i = 1; i <= 9; i++) {
    const listId = `level-${i}-list`;
    const buttonId = `add-level-${i}`;
    const container = document.getElementById(listId);
    const button = document.getElementById(buttonId);
    if (container && button) {
      button.addEventListener('click', () => {
        const newSpell = createSpellItem(i);
        container.appendChild(newSpell);
      });
    }
  }
});

// --- Add/Remove Attack Rows ---
document.addEventListener('DOMContentLoaded', () => {
  const attacksTableBody = document.querySelector('#attacks-table tbody');

  function createAttackRow() {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td data-label="Name"><input type="text" name="attack-name"></td>
      <td data-label="Attack Bonus"><input type="text" name="attack-bonus"></td>
      <td data-label="Damage/Type"><input type="text" name="attack-damage"></td>
      <td><button type="button" class="remove-attack-row">×</button></td>
    `;

    // Remove this row when the "×" button is clicked
    row.querySelector('.remove-attack-row').addEventListener('click', () => {
      row.remove();
    });

    return row;
  }

  // Add row on button click
  document.getElementById('add-attack-row').addEventListener('click', () => {
    const newRow = createAttackRow();
    attacksTableBody.appendChild(newRow);
  });

  // Enable "×" buttons on existing rows
  document.querySelectorAll('.remove-attack-row').forEach(button => {
    button.addEventListener('click', () => {
      button.closest('tr').remove();
    });
  });
});

// Update spellcasting class options based on character class
document.getElementById('class').addEventListener('change', () => {
  const characterClass = document.getElementById('class').value;
  const spellcastingClass = document.getElementById('spellcasting-class');
  
  if (['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock', 'wizard'].includes(characterClass)) {
    spellcastingClass.value = characterClass;
    
    // Set default spellcasting ability based on class (updated for 5.5e)
    const abilityMapping = {
      'bard': 'charisma',
      'cleric': 'wisdom',
      'druid': 'wisdom',
      'paladin': 'charisma',
      'ranger': 'wisdom',
      'sorcerer': 'charisma',
      'warlock': 'charisma',
      'wizard': 'intelligence'
    };
    
    document.getElementById('spellcasting-ability').value = abilityMapping[characterClass];
    updateSpellcasting();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Existing tab switching logic, etc.

  // Cantrip and Spell containers
  const cantripList = document.getElementById('cantrip-list');
  const spellList = document.getElementById('spell-list');

  // Add Cantrip
  document.getElementById('add-cantrip').addEventListener('click', () => {
    const cantripItem = document.createElement('div');
    cantripItem.classList.add('spell-item');
    cantripItem.innerHTML = `
      <input type="text" placeholder="Cantrip Name" />
      <button class="remove-spell">X</button>
    `;
    cantripList.appendChild(cantripItem);
    addRemoveHandler(cantripItem);
  });

  // Add Spell
  document.getElementById('add-spell').addEventListener('click', () => {
    const spellItem = document.createElement('div');
    spellItem.classList.add('spell-item');
    spellItem.innerHTML = `
      <input type="text" placeholder="Spell Name" />
      <button class="remove-spell">X</button>
    `;
    spellList.appendChild(spellItem);
    addRemoveHandler(spellItem);
  });

  // Handle spell removal
  function addRemoveHandler(container) {
    container.querySelector('.remove-spell').addEventListener('click', () => {
      container.remove();
    });
  }
});

// Add more equipment items
document.getElementById('add-equipment').addEventListener('click', () => {
  const equipmentItems = document.getElementById('equipment-items');
  const newItem = document.createElement('div');
  newItem.className = 'equipment-item';
  newItem.style = 'display: flex; margin-bottom: 5px;';
  
  newItem.innerHTML = `
    <input type="text" placeholder="Item name" style="flex: 3;">
    <input type="number" placeholder="Qty" min="1" value="1" style="flex: 1; margin-left: 5px;">
    <input type="text" placeholder="Weight" style="flex: 1; margin-left: 5px;">
    <button type="button" class="remove-equipment" style="margin-left: 5px;">×</button>
  `;
  
  // Add event listener to the remove button
  newItem.querySelector('.remove-equipment').addEventListener('click', function() {
    this.closest('.equipment-item').remove();
  });
  
  equipmentItems.appendChild(newItem);
});

// Add event listeners to existing remove equipment buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.remove-equipment').forEach(button => {
    button.addEventListener('click', function() {
      this.closest('.equipment-item').remove();
    });
  });
});

// Helper: Collect attacks data
function getAttacksData() {
  return Array.from(document.querySelectorAll('#attacks-table tbody tr')).map(row => ({
    name: row.querySelector('input[name="attack-name"]').value,
    bonus: row.querySelector('input[name="attack-bonus"]').value,
    damage: row.querySelector('input[name="attack-damage"]').value
  }));
}

// Helper: Load attacks from data
function loadAttacksData(attacks = []) {
  const tbody = document.querySelector('#attacks-table tbody');
  tbody.innerHTML = '';
  attacks.forEach(atk => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td data-label="Name"><input type="text" name="attack-name" value="${atk.name || ''}"></td>
      <td data-label="Attack Bonus"><input type="text" name="attack-bonus" value="${atk.bonus || ''}"></td>
      <td data-label="Damage/Type"><input type="text" name="attack-damage" value="${atk.damage || ''}"></td>
      <td><button type="button" class="remove-attack-row">×</button></td>
    `;
    row.querySelector('.remove-attack-row').addEventListener('click', () => row.remove());
    tbody.appendChild(row);
  });
}

// Save character to file
document.getElementById('save-character').addEventListener('click', () => {
  const formData = new FormData(document.getElementById('character-form'));
  const characterData = {};

  formData.forEach((value, key) => {
    characterData[key] = value;
  });

  // Equipment
  characterData.equipment = Array.from(document.querySelectorAll('.equipment-item')).map(item => {
    const inputs = item.querySelectorAll('input');
    return {
      name: inputs[0].value,
      quantity: inputs[1].value,
      weight: inputs[2].value
    };
  });

  // Spells
  for (let i = 0; i <= 9; i++) {
    const key = i === 0 ? 'cantrips' : `level${i}Spells`;
    const listId = i === 0 ? 'cantrips-list' : `level-${i}-list`;
    characterData[key] = Array.from(document.querySelectorAll(`#${listId} .spell-item`)).map(spell => {
      const inputs = spell.querySelectorAll('input');
      return {
        name: inputs[0].value,
        castingTime: inputs[1].value,
        range: inputs[2].value
      };
    });
  }

  // Attacks
  characterData.attacks = getAttacksData();

  // Export to file
  const blob = new Blob([JSON.stringify(characterData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const filename = (characterData['character-name'] || 'character') + '.json';
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Load character from file
document.getElementById('load-character').addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const data = JSON.parse(e.target.result);

        // Clear form
        document.getElementById('clear-form').click();

        // Base fields
        Object.entries(data).forEach(([key, value]) => {
          if (!['equipment', 'attacks', ...Array.from({ length: 10 }, (_, i) => i === 0 ? 'cantrips' : `level${i}Spells`)].includes(key)) {
            const field = document.getElementById(key);
            if (field) {
              if (field.type === 'checkbox') {
                field.checked = value === 'on';
              } else {
                field.value = value;
              }
            }
          }
        });

        // Equipment
        const equipmentContainer = document.getElementById('equipment-items');
        equipmentContainer.innerHTML = '';
        (data.equipment || []).forEach(item => {
          const newItem = document.createElement('div');
          newItem.className = 'equipment-item';
          newItem.style = 'display: flex; margin-bottom: 5px;';
          newItem.innerHTML = `
            <input type="text" placeholder="Item name" style="flex: 3;" value="${item.name || ''}">
            <input type="number" placeholder="Qty" min="1" style="flex: 1; margin-left: 5px;" value="${item.quantity || 1}">
            <input type="text" placeholder="Weight" style="flex: 1; margin-left: 5px;" value="${item.weight || ''}">
          `;
          equipmentContainer.appendChild(newItem);
        });

        // Spells
        for (let i = 0; i <= 9; i++) {
          const spellKey = i === 0 ? 'cantrips' : `level${i}Spells`;
          const listId = i === 0 ? 'cantrips-list' : `level-${i}-list`;
          const buttonId = i === 0 ? 'add-cantrip' : `add-level-${i}`;
          const container = document.getElementById(listId);
          const addButton = document.getElementById(buttonId);
          container.innerHTML = '';
          container.appendChild(addButton);
          (data[spellKey] || []).forEach(spell => {
            const newSpell = createSpellItem(i);
            const inputs = newSpell.querySelectorAll('input');
            inputs[0].value = spell.name || '';
            inputs[1].value = spell.castingTime || '';
            inputs[2].value = spell.range || '';
            container.insertBefore(newSpell, addButton);
          });
        }

        // Attacks
        loadAttacksData(data.attacks);

        // Recalculate modifiers
        abilityInputs.forEach(input => updateModifier(input.id));

        alert('Character loaded successfully!');
      } catch (err) {
        alert('Error loading character: ' + err.message);
      }
    };
    reader.readAsText(file);
  });
  input.click();
});

// Clear form
document.getElementById('clear-form').addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all character data?')) {
    document.getElementById('character-form').reset();
    
    // Reset ability modifiers
    abilityInputs.forEach(input => {
      input.value = 10;
      updateModifier(input.id);
    });
    
    // Reset equipment
    const equipmentContainer = document.getElementById('equipment-items');
    equipmentContainer.innerHTML = `
      <div class="equipment-item" style="display: flex; margin-bottom: 5px;">
        <input type="text" placeholder="Item name" style="flex: 3;">
        <input type="number" placeholder="Qty" min="1" value="1" style="flex: 1; margin-left: 5px;">
        <input type="text" placeholder="Weight" style="flex: 1; margin-left: 5px;">
      </div>
    `;
    
    // Reset spells for all levels
    for (let i = 0; i <= 9; i++) {
      const listId = i === 0 ? 'cantrips-list' : `level-${i}-list`;
      const buttonId = i === 0 ? 'add-cantrip' : `add-level-${i}`;
      
      const spellsContainer = document.getElementById(listId);
      const addButton = document.getElementById(buttonId);
      spellsContainer.innerHTML = '';
      
      const defaultSpell = createSpellItem(i);
      spellsContainer.appendChild(defaultSpell);
      spellsContainer.appendChild(addButton);
    }
  }
});

// Export as PDF 
document.getElementById('export-pdf').addEventListener('click', () => {
  const name = document.getElementById('character-name').value || 'character';
  
  // Create a temporary container for the printable version
  const tempContainer = document.createElement('div');
  tempContainer.style.width = '8.5in'; // Set width to standard paper size
  const printableSheet = createPrintableSheet();
  tempContainer.appendChild(printableSheet);
  document.body.appendChild(tempContainer);

  const opt = {
    margin: 0.5,
    filename: `${name}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      scrollY: -window.scrollY, // Ensure proper positioning
      windowWidth: tempContainer.offsetWidth
    },
    jsPDF: { 
      unit: 'in', 
      format: 'letter', 
      orientation: 'portrait'
    },
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy'],
      before: '.print-bio'
    }
  };

  // Generate PDF from the printable version
  html2pdf()
    .set(opt)
    .from(tempContainer)
    .save()
    .then(() => {
      // Clean up
      document.body.removeChild(tempContainer);
    })
    .catch(err => {
      console.error('Error generating PDF:', err);
      document.body.removeChild(tempContainer);
    });
});

// Initialize the form
updateHitDice();
updateSkills();
updateSpellcasting();

// Synchronize Features & Traits between Combat and Biography tabs
const combatFeatures = document.getElementById('combat-features');
const bioFeatures = document.getElementById('features');

// Update Combat tab when Bio tab changes
bioFeatures.addEventListener('input', () => {
  combatFeatures.value = bioFeatures.value;
});

// Update Bio tab when Combat tab changes
combatFeatures.addEventListener('input', () => {
  bioFeatures.value = combatFeatures.value;
});

// Load initial value if exists
if (bioFeatures.value) {
  combatFeatures.value = bioFeatures.value;
} else if (combatFeatures.value) {
  bioFeatures.value = combatFeatures.value;
}

// Update subclass options when class changes
document.getElementById('class').addEventListener('change', () => {
  const characterClass = document.getElementById('class').value;
  const subclassSelect = document.getElementById('subclass');
  const level = parseInt(document.getElementById('level').value);
  
  // Clear existing options
  subclassSelect.innerHTML = '<option value="">Select Subclass</option>';
  
  if (characterClass && subclasses[characterClass]) {
    const subclassInfo = subclasses[characterClass];
    
    // Add new options
    subclassInfo.options.forEach(subclass => {
      const option = document.createElement('option');
      option.value = subclass.toLowerCase().replace(/\s+/g, '-');
      option.textContent = subclass;
      subclassSelect.appendChild(option);
    });
    
    // Show/hide based on level
    subclassSelect.disabled = level < subclassInfo.level;
    if (level < subclassInfo.level) {
      subclassSelect.title = `Available at level ${subclassInfo.level}`;
    } else {
      subclassSelect.title = '';
    }
  }
  
  // Update spellcasting options
  if (['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock', 'wizard', 'artificer'].includes(characterClass)) {
    const spellcastingClass = document.getElementById('spellcasting-class');
    spellcastingClass.value = characterClass;
    
    // Set default spellcasting ability based on class
    const abilityMapping = {
      'artificer': 'intelligence',
      'bard': 'charisma',
      'cleric': 'wisdom',
      'druid': 'wisdom',
      'paladin': 'charisma',
      'ranger': 'wisdom',
      'sorcerer': 'charisma',
      'warlock': 'charisma',
      'wizard': 'intelligence'
    };
    
    document.getElementById('spellcasting-ability').value = abilityMapping[characterClass];
    updateSpellcasting();
  }
});

// Update subclass availability when level changes
document.getElementById('level').addEventListener('change', () => {
  const characterClass = document.getElementById('class').value;
  const subclassSelect = document.getElementById('subclass');
  const level = parseInt(document.getElementById('level').value);
  
  if (characterClass && subclasses[characterClass]) {
    const subclassInfo = subclasses[characterClass];
    subclassSelect.disabled = level < subclassInfo.level;
    if (level < subclassInfo.level) {
      subclassSelect.title = `Available at level ${subclassInfo.level}`;
    } else {
      subclassSelect.title = '';
    }
  }
  
  updateSkills();
  updateSavingThrows();
  updateSpellcasting();
  updateHitDice();
});

// Race Features (2024 PHB)
const raceFeatures = {
  ardling: [
    "Celestial Legacy",
    "Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.",
    "Flight: You have a flying speed equal to your walking speed.",
    "Healing Touch: As an action, you can touch a creature and restore hit points equal to your proficiency bonus. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
  ],
  dragonborn: [
    "Breath Weapon: You can use your action to exhale destructive energy.",
    "Damage Resistance: You have resistance to the damage type associated with your draconic ancestry.",
    "Draconic Ancestry: You have draconic ancestry, which determines your breath weapon and damage resistance."
  ],
  dwarf: [
    "Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.",
    "Dwarven Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.",
    "Dwarven Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
    "Forge Wise: You gain tool proficiency with artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
    "Stonecunning: You have advantage on Intelligence (History) checks related to the origin of stonework."
  ],
  elf: [
    "Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.",
    "Fey Ancestry: You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    "Keen Senses: You have proficiency in the Perception skill.",
    "Trance: You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours."
  ],
  gnome: [
    "Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.",
    "Gnomish Cunning: You have advantage on Intelligence, Wisdom, and Charisma saving throws against magic.",
    "Small: Your size is Small.",
    "Gnomish Magic: You know the Minor Illusion cantrip."
  ],
  goliath: [
    "Little Giants: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
    "Mountain Born: You have resistance to cold damage.",
    "Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
    "Stone's Endurance: You can focus yourself to occasionally shrug off injury."
  ],
  halfling: [
    "Brave: You have advantage on saving throws against being frightened.",
    "Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours.",
    "Lucky: When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
    "Small: Your size is Small."
  ],
  human: [
    "Resourceful: You gain proficiency in one skill of your choice.",
    "Versatile: You gain one feat of your choice.",
    "Ambitious: You gain inspiration whenever you finish a long rest."
  ],
  orc: [
    "Adrenaline Rush: You can take the Dash action as a bonus action. You can use this trait a number of times equal to your proficiency bonus.",
    "Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.",
    "Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
    "Relentless Endurance: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead."
  ],
  tiefling: [
    "Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.",
    "Fiendish Legacy: You know the Thaumaturgy cantrip.",
    "Fire Resistance: You have resistance to fire damage.",
    "Legacy Magic: You can cast spells based on your Otherworldly Legacy."
  ]
};

// Class Features (Level 1)
const classFeatures = {
  artificer: [
    "Magical Tinkering: You can use your tools to create small magical objects.",
    "Spellcasting: You can cast artificer spells using Intelligence as your spellcasting ability.",
    "Tool Expertise: Your proficiency bonus is doubled for any ability check you make that uses your proficiency with a tool."
  ],
  barbarian: [
    "Rage: In battle, you fight with primal ferocity. You can enter a rage as a bonus action.",
    "Unarmored Defense: While you are not wearing any armor, your AC equals 10 + your Dexterity modifier + your Constitution modifier."
  ],
  bard: [
    "Bardic Inspiration: You can inspire others through stirring words or music.",
    "Spellcasting: You can cast bard spells using Charisma as your spellcasting ability."
  ],
  cleric: [
    "Divine Domain: Choose a domain related to your deity.",
    "Spellcasting: You can cast cleric spells using Wisdom as your spellcasting ability.",
    "Channel Divinity: You can channel divine energy directly from your deity."
  ],
  druid: [
    "Druidic: You know Druidic, the secret language of druids.",
    "Spellcasting: You can cast druid spells using Wisdom as your spellcasting ability."
  ],
  fighter: [
    "Fighting Style: You adopt a particular style of fighting as your specialty.",
    "Second Wind: You have a limited well of stamina that you can draw on to protect yourself from harm."
  ],
  monk: [
    "Unarmored Defense: While you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.",
    "Martial Arts: Your practice of martial arts gives you mastery of combat styles."
  ],
  paladin: [
    "Divine Sense: Your blessed awareness lets you detect strong evil and powerful good.",
    "Lay on Hands: Your blessed touch can heal wounds."
  ],
  ranger: [
    "Favored Enemy: You have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
    "Natural Explorer: You are particularly familiar with one type of natural environment."
  ],
  rogue: [
    "Expertise: Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools.",
    "Sneak Attack: You know how to strike subtly and exploit a foe's distraction.",
    "Thieves' Cant: You have learned thieves' cant, a secret mix of dialect, jargon, and code."
  ],
  sorcerer: [
    "Sorcerous Origin: Choose a sorcerous origin, which describes the source of your innate magical power.",
    "Spellcasting: You can cast sorcerer spells using Charisma as your spellcasting ability."
  ],
  warlock: [
    "Otherworldly Patron: You have struck a bargain with an otherworldly being.",
    "Pact Magic: You can cast warlock spells using Charisma as your spellcasting ability."
  ],
  wizard: [
    "Arcane Recovery: You have learned to regain some of your magical energy by studying your spellbook.",
    "Spellcasting: You can cast wizard spells using Intelligence as your spellcasting ability."
  ]
};

// Subclass Features (Initial features when subclass is gained)
const subclassFeatures = {
  artificer: {
    "alchemist": [
      "Tool Proficiency: You gain proficiency with alchemist's supplies.",
      "Experimental Elixir: You can magically create experimental elixirs in your alchemist's supplies.",
      "Alchemical Savant: You develop masterful command of magical chemicals. Whenever you cast a spell using your alchemist's supplies as the spellcasting focus, you gain a bonus to one roll of the spell."
    ],
    "armorer": [
      "Tools of the Trade: You gain proficiency with heavy armor and smith's tools.",
      "Arcane Armor: Your metallurgical pursuits have led to you making armor a conduit for your magic.",
      "Armor Model: You can customize your arcane armor. Choose either Guardian or Infiltrator."
    ],
    "artillerist": [
      "Tool Proficiency: You gain proficiency with woodcarver's tools.",
      "Eldritch Cannon: You learn how to create a magical cannon.",
      "Arcane Firearm: You can use your tools to craft a magical firearm."
    ],
    "battle-smith": [
      "Tool Proficiency: You gain proficiency with smith's tools.",
      "Battle Ready: Your combat training and your experiments with magic have paid off.",
      "Steel Defender: Your tinkering has borne you a faithful companion."
    ]
  },
  barbarian: {
    "path-of-the-berserker": [
      "Frenzy: You can go into a frenzy when you rage.",
      "Mindless Rage: You can't be charmed or frightened while raging."
    ],
    "path-of-the-storm-herald": [
      "Storm Aura: While raging, you emanate an aura of stormy energy.",
      "Storm Soul: Your connection to the storm grants you elemental protection."
    ],
    "path-of-the-wild-heart": [
      "Bestial Heart: Your rage takes the form of a bestial transformation.",
      "Primal Intuition: You gain proficiency in two skills from Animal Handling, Nature, Perception, or Survival."
    ],
    "path-of-the-zealot": [
      "Divine Fury: You can channel divine fury into your weapon strikes.",
      "Warrior of the Gods: Your soul is marked for endless battle."
    ]
  },
  bard: {
    "college-of-creation": [
      "Mote of Potential: You can imbue a small object with magic using your Bardic Inspiration.",
      "Performance of Creation: As an action, you can create a nonmagical item of your choice."
    ],
    "college-of-glamour": [
      "Mantle of Inspiration: You gain the ability to weave a song of fey magic.",
      "Enthralling Performance: You can charm humanoids through a magical performance."
    ],
    "college-of-lore": [
      "Bonus Proficiencies: You gain three skill proficiencies of your choice.",
      "Cutting Words: You learn how to use your wit to distract, confuse, and weaken your foes."
    ],
    "college-of-spirits": [
      "Spiritual Focus: You can use a special focus for your spells.",
      "Tales from Beyond: You can reach out to spirits who tell their tales through you."
    ],
    "college-of-swords": [
      "Bonus Proficiencies: You gain proficiency with medium armor and scimitars.",
      "Fighting Style: You adopt a particular style of fighting as your specialty.",
      "Blade Flourish: You learn to perform impressive displays of martial prowess and speed."
    ],
    "college-of-valor": [
      "Bonus Proficiencies: You gain proficiency with medium armor, shields, and martial weapons.",
      "Combat Inspiration: You learn to inspire others in battle."
    ]
  },
  cleric: {
    "life-domain": [
      "Bonus Proficiency: You gain proficiency with heavy armor.",
      "Disciple of Life: Your healing spells are more effective.",
      "Domain Spells: You gain domain spells related to life and healing."
    ],
    "light-domain": [
      "Bonus Cantrip: You gain the Light cantrip.",
      "Warding Flare: You can use your holy symbol to protect yourself from attacks.",
      "Domain Spells: You gain domain spells related to light and fire."
    ],
    "nature-domain": [
      "Acolyte of Nature: You learn one druid cantrip and gain proficiency in a skill.",
      "Bonus Proficiency: You gain proficiency with heavy armor.",
      "Domain Spells: You gain domain spells related to nature."
    ],
    "protection-domain": [
      "Shield of the Faithful: You can use your shield to protect nearby allies.",
      "Bonus Proficiency: You gain proficiency with heavy armor.",
      "Domain Spells: You gain domain spells related to protection."
    ],
    "trickery-domain": [
      "Blessing of the Trickster: You can grant an ally advantage on stealth checks.",
      "Domain Spells: You gain domain spells related to deception and illusion."
    ],
    "war-domain": [
      "War Priest: You can make weapon attacks as a bonus action.",
      "Bonus Proficiencies: You gain proficiency with martial weapons and heavy armor.",
      "Domain Spells: You gain domain spells related to combat."
    ]
  },
  druid: {
    "circle-of-the-land": [
      "Bonus Cantrip: You learn an additional druid cantrip.",
      "Natural Recovery: You can recover some spell slots during a short rest.",
      "Circle Spells: You gain additional spells based on your chosen land type."
    ],
    "circle-of-the-moon": [
      "Combat Wild Shape: You can use Wild Shape as a bonus action.",
      "Circle Forms: You can transform into more powerful beasts.",
      "Primal Strike: Your attacks in beast form count as magical."
    ],
    "circle-of-the-shepherd": [
      "Speech of the Woods: You can talk with beasts.",
      "Spirit Totem: You can call forth nature spirits to aid you.",
      "Spirit Bond: Your spirit totems grant additional benefits."
    ],
    "circle-of-the-stars": [
      "Star Map: You gain a celestial map that aids your magic.",
      "Starry Form: You can take on a starry form with special abilities.",
      "Cosmic Omen: You gain insight from the stars."
    ],
    "circle-of-wildfire": [
      "Summon Wildfire Spirit: You can summon a wildfire spirit.",
      "Enhanced Bond: Your magic is enhanced when near your wildfire spirit.",
      "Fiery Soul: You gain resistance to fire damage."
    ]
  },
  fighter: {
    "battle-master": [
      "Combat Superiority: You learn special maneuvers that enhance your combat abilities.",
      "Student of War: You gain proficiency with one type of artisan's tools.",
      "Maneuvers: You learn three maneuvers of your choice."
    ],
    "champion": [
      "Improved Critical: Your weapon attacks score a critical hit on a roll of 19 or 20.",
      "Remarkable Athlete: You gain a bonus to certain physical checks and jumps."
    ],
    "eldritch-knight": [
      "Spellcasting: You learn to cast wizard spells.",
      "Weapon Bond: You can bond with up to two weapons.",
      "War Magic: You learn to combine weapon attacks with spellcasting."
    ],
    "psi-knight": [
      "Psionic Power: You gain psionic energy dice to fuel your abilities.",
      "Protective Field: You can protect allies with your psionic energy.",
      "Psionic Strike: You can enhance your weapon attacks with psionic energy."
    ],
    "rune-knight": [
      "Bonus Proficiency: You gain proficiency with smith's tools.",
      "Rune Carver: You learn to inscribe magical runes on your gear.",
      "Giant's Might: You can magically become Large size."
    ]
  },
  monk: {
    "way-of-mercy": [
      "Implements of Mercy: You gain proficiency in herbalism kit.",
      "Hand of Healing: You can spend ki points to heal wounds.",
      "Hand of Harm: You can spend ki points to cause extra harm."
    ],
    "way-of-shadow": [
      "Shadow Arts: You gain magical abilities that emphasize stealth.",
      "Shadow Step: You gain the ability to step from one shadow into another.",
      "Cloak of Shadows: You can become invisible in dim light."
    ],
    "way-of-the-ascendant-dragon": [
      "Draconic Disciple: You gain draconic abilities.",
      "Breath of the Dragon: You can spend ki points to use a dragon's breath weapon.",
      "Wings Unfurled: You can sprout spectral dragon wings."
    ],
    "way-of-the-open-hand": [
      "Open Hand Technique: You gain additional effects when using Flurry of Blows.",
      "Wholeness of Body: You gain the ability to heal yourself.",
      "Tranquility: You can enter a special meditation that surrounds you with peace."
    ]
  },
  paladin: {
    "oath-of-devotion": [
      "Oath Spells: You gain oath spells related to protection and purification.",
      "Channel Divinity: Sacred Weapon and Turn the Unholy",
      "Divine Health: You are immune to disease."
    ],
    "oath-of-glory": [
      "Oath Spells: You gain oath spells related to enhancement and victory.",
      "Channel Divinity: Peerless Athlete and Inspiring Smite",
      "Aura of Alacrity: You and nearby allies gain increased movement speed."
    ],
    "oath-of-the-ancients": [
      "Oath Spells: You gain oath spells related to nature and light.",
      "Channel Divinity: Nature's Wrath and Turn the Faithless",
      "Aura of Warding: You and nearby allies have resistance to spell damage."
    ],
    "oath-of-vengeance": [
      "Oath Spells: You gain oath spells related to pursuit and punishment.",
      "Channel Divinity: Abjure Enemy and Vow of Enmity",
      "Relentless Avenger: You can move when making opportunity attacks."
    ]
  },
  ranger: {
    "beast-master": [
      "Ranger's Companion: You gain an animal companion that fights alongside you.",
      "Exceptional Training: Your companion can attack as a bonus action.",
      "Primal Companion: Your companion gains special benefits."
    ],
    "fey-wanderer": [
      "Fey Wanderer Magic: You learn additional spells.",
      "Dreadful Strikes: Your strikes can deal extra psychic damage.",
      "Otherworldly Glamour: You gain a bonus to Charisma checks."
    ],
    "gloom-stalker": [
      "Dread Ambusher: You gain extra benefits in the first round of combat.",
      "Umbral Sight: You gain darkvision and can hide from creatures that rely on darkvision.",
      "Extra Attack: You can attack twice when you take the Attack action."
    ],
    "hunter": [
      "Hunter's Prey: Choose one of three features that help you hunt your prey.",
      "Defensive Tactics: You gain additional defensive abilities.",
      "Extra Attack: You can attack twice when you take the Attack action."
    ],
    "swarmkeeper": [
      "Gathered Swarm: You manifest a swarm of nature spirits.",
      "Swarmkeeper Magic: You learn additional spells.",
      "Writhing Tide: Your swarm can help you move in various ways."
    ]
  },
  rogue: {
    "arcane-trickster": [
      "Spellcasting: You learn to cast wizard spells.",
      "Mage Hand Legerdemain: You gain a special mage hand.",
      "Magical Ambush: Your spells are harder to resist when you're hidden."
    ],
    "assassin": [
      "Bonus Proficiencies: You gain proficiency with disguise kit and poisoner's kit.",
      "Assassinate: You have advantage on attack rolls against surprised creatures.",
      "Infiltration Expertise: You can create false identities."
    ],
    "phantom": [
      "Whispers of the Dead: You gain knowledge from lingering spirits.",
      "Wails from the Grave: Your sneak attack can damage additional creatures.",
      "Ghost Walk: You gain the ability to move through creatures and objects."
    ],
    "swashbuckler": [
      "Fancy Footwork: You can prevent enemies from making opportunity attacks.",
      "Rakish Audacity: You gain initiative bonus and new ways to Sneak Attack.",
      "Panache: You can charm or challenge others with your charisma."
    ],
    "thief": [
      "Fast Hands: You can use bonus actions for certain tasks.",
      "Second-Story Work: You gain climbing speed and jumping ability.",
      "Supreme Sneak: You gain advantage on stealth checks."
    ]
  },
  sorcerer: {
    "aberrant-mind": [
      "Psionic Spells: You learn additional spells related to telepathy and psychic abilities.",
      "Telepathic Speech: You can communicate telepathically.",
      "Psionic Sorcery: You can cast your psionic spells without components."
    ],
    "clockwork-soul": [
      "Clockwork Magic: You learn additional spells related to order and mechanics.",
      "Restore Balance: You can use your reaction to cancel advantage or disadvantage.",
      "Bastion of Law: You can expend sorcery points to grant yourself or another creature temporary hit points."
    ],
    "divine-soul": [
      "Divine Magic: You can choose spells from the cleric spell list.",
      "Favored by the Gods: You gain a bonus to failed saves or attacks.",
      "Empowered Healing: You can reroll healing spell dice."
    ],
    "draconic-bloodline": [
      "Dragon Ancestor: You choose a dragon type that influences your powers.",
      "Draconic Resilience: Your hit points increase and you gain natural armor.",
      "Elemental Affinity: You gain bonus damage with spells matching your dragon type."
    ],
    "storm-sorcery": [
      "Wind Speaker: You can speak Primordial.",
      "Tempestuous Magic: You can fly short distances as a bonus action.",
      "Heart of the Storm: You gain resistance to lightning and thunder damage."
    ],
    "wild-magic": [
      "Wild Magic Surge: Your spells can trigger unpredictable magical effects.",
      "Tides of Chaos: You can gain advantage on one roll.",
      "Bend Luck: You can influence the rolls of others."
    ]
  },
  warlock: {
    "the-archfey": [
      "Expanded Spell List: You gain additional spells related to charm and trickery.",
      "Fey Presence: You can use your action to charm or frighten creatures.",
      "Misty Escape: You can teleport when you take damage."
    ],
    "the-celestial": [
      "Expanded Spell List: You gain additional healing and radiant spells.",
      "Healing Light: You gain a pool of healing dice.",
      "Radiant Soul: You gain resistance to radiant damage and bonus to radiant/fire spells."
    ],
    "the-fiend": [
      "Expanded Spell List: You gain additional spells related to fire and deception.",
      "Dark One's Blessing: You gain temporary hit points when you reduce a hostile creature to 0 hit points.",
      "Dark One's Own Luck: You can add a d10 to an ability check or saving throw."
    ],
    "the-great-old-one": [
      "Expanded Spell List: You gain additional spells that corrupt or control minds.",
      "Awakened Mind: You can communicate telepathically.",
      "Entropic Ward: You can impose disadvantage on an attack roll made against you."
    ],
    "the-undying": [
      "Expanded Spell List: You gain additional spells related to life and death.",
      "Among the Dead: You gain advantages when dealing with undead.",
      "Defy Death: You can regain hit points when you succeed on a death saving throw."
    ]
  },
  wizard: {
    "school-of-abjuration": [
      "Abjuration Savant: You halve the gold and time needed to copy abjuration spells.",
      "Arcane Ward: You create a magical ward that absorbs damage.",
      "Projected Ward: You can use your ward to protect others."
    ],
    "school-of-conjuration": [
      "Conjuration Savant: You halve the gold and time needed to copy conjuration spells.",
      "Minor Conjuration: You can conjure small, nonmagical objects.",
      "Benign Transposition: You can teleport and switch places with creatures."
    ],
    "school-of-divination": [
      "Divination Savant: You halve the gold and time needed to copy divination spells.",
      "Portent: You can replace attack rolls, saving throws, or ability checks.",
      "Expert Divination: You regain spell slots when casting divination spells."
    ],
    "school-of-enchantment": [
      "Enchantment Savant: You halve the gold and time needed to copy enchantment spells.",
      "Hypnotic Gaze: You can charm creatures with your gaze.",
      "Instinctive Charm: You can redirect attacks made against you."
    ],
    "school-of-evocation": [
      "Evocation Savant: You halve the gold and time needed to copy evocation spells.",
      "Sculpt Spells: You can protect allies from your evocation spells.",
      "Potent Cantrip: Your damaging cantrips always deal some damage."
    ],
    "school-of-illusion": [
      "Illusion Savant: You halve the gold and time needed to copy illusion spells.",
      "Improved Minor Illusion: You learn Minor Illusion and can make it more powerful.",
      "Malleable Illusions: You can change your illusions using an action."
    ],
    "school-of-necromancy": [
      "Necromancy Savant: You halve the gold and time needed to copy necromancy spells.",
      "Grim Harvest: You regain hit points when you kill creatures with spells.",
      "Undead Thralls: Your necromancy spells create more powerful undead."
    ],
    "school-of-transmutation": [
      "Transmutation Savant: You halve the gold and time needed to copy transmutation spells.",
      "Minor Alchemy: You can temporarily transform materials.",
      "Transmuter's Stone: You can create a stone that grants magical benefits."
    ]
  }
};

// Update Features & Traits when race, class, or subclass changes
function updateFeatures() {
  const race = document.getElementById('race').value;
  const characterClass = document.getElementById('class').value;
  const subclass = document.getElementById('subclass').value;
  const level = parseInt(document.getElementById('level').value);
  
  let features = [];
  
  // Add race features
  if (race && raceFeatures[race]) {
    features.push("=== Racial Features ===");
    features = features.concat(raceFeatures[race]);
    features.push("");
  }
  
  // Add class features
  if (characterClass && classFeatures[characterClass]) {
    features.push("=== Class Features ===");
    features = features.concat(classFeatures[characterClass]);
    features.push("");
  }
  
  // Add subclass features if level requirement is met
  if (subclass && characterClass && subclasses[characterClass]) {
    const subclassInfo = subclasses[characterClass];
    if (level >= subclassInfo.level) {
      features.push(`=== ${subclass.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Features ===`);
      if (subclassFeatures[characterClass] && subclassFeatures[characterClass][subclass]) {
        features = features.concat(subclassFeatures[characterClass][subclass]);
      }
      features.push("");
    }
  }
  
  // Update both Features & Traits fields
  const featuresText = features.join("\n");
  document.getElementById('features').value = featuresText;
  document.getElementById('combat-features').value = featuresText;
}

// Add event listeners for feature updates
document.getElementById('race').addEventListener('change', updateFeatures);
document.getElementById('class').addEventListener('change', updateFeatures);
document.getElementById('subclass').addEventListener('change', updateFeatures);
document.getElementById('level').addEventListener('change', updateFeatures);

// Class Resources definitions
const classResources = {
  artificer: [
    { name: "Infusions Known", max: "level >= 2 ? Math.floor((level + 2) / 2) : 0", current: true, description: "Number of infusions you can know at once" },
    { name: "Infused Items", max: "level >= 2 ? Math.min(Math.floor((level + 2) / 4) * 2, 6) : 0", current: true, description: "Number of items you can infuse at once" }
  ],
  barbarian: [
    { name: "Rage Uses", max: "level <= 3 ? 2 : level <= 5 ? 3 : level <= 11 ? 4 : level <= 16 ? 5 : 6", current: true, description: "Number of times you can rage between long rests" },
    { name: "Rage Damage", max: "level <= 8 ? 2 : level <= 15 ? 3 : 4", current: false, description: "Extra damage dealt while raging" }
  ],
  bard: [
    { name: "Bardic Inspiration", max: "Math.max(1, getAbilityModifier('charisma'))", current: true, description: "d6 dice that you can give to other creatures" },
    { name: "Inspiration Die", max: "level <= 4 ? 6 : level <= 9 ? 8 : level <= 14 ? 10 : 12", current: false, description: "The die used for Bardic Inspiration (d6, d8, etc)" }
  ],
  cleric: [
    { name: "Channel Divinity", max: "level <= 5 ? 1 : level <= 17 ? 2 : 3", current: true, description: "Uses between short/long rests" },
    { name: "Divine Intervention", max: "level >= 10 ? 1 : 0", current: true, description: "Available once per week at 10th level" }
  ],
  druid: [
    { name: "Wild Shape", max: "2", current: true, description: "Uses between short/long rests" },
    { name: "Wild Shape CR", max: "level <= 4 ? 0.25 : level <= 7 ? 0.5 : level <= 9 ? 1 : 1", current: false, description: "Max CR of beast forms" }
  ],
  fighter: [
    { name: "Action Surge", max: "level >= 2 ? (level >= 17 ? 2 : 1) : 0", current: true, description: "Uses between short/long rests" },
    { name: "Second Wind", max: "1", current: true, description: "Uses between short/long rests" },
    { name: "Indomitable", max: "level >= 9 ? (level >= 13 ? (level >= 17 ? 3 : 2) : 1) : 0", current: true, description: "Uses between long rests" }
  ],
  monk: [
    { name: "Ki Points", max: "level >= 2 ? level : 0", current: true, description: "Points used for various monk abilities" },
    { name: "Martial Arts Die", max: "level <= 4 ? 4 : level <= 10 ? 6 : level <= 16 ? 8 : 10", current: false, description: "Die used for unarmed strikes and monk weapons" }
  ],
  paladin: [
    { name: "Divine Sense", max: "1 + getAbilityModifier('charisma')", current: true, description: "Uses between long rests" },
    { name: "Lay on Hands", max: "level * 5", current: true, description: "Pool of healing points" },
    { name: "Channel Divinity", max: "level >= 3 ? 1 : 0", current: true, description: "Uses between short/long rests" }
  ],
  ranger: [
    { name: "Focus Points", max: "level >= 2 ? Math.ceil(level / 2) : 0", current: true, description: "Points used for ranger abilities" }
  ],
  rogue: [
    { name: "Sneak Attack", max: "Math.ceil(level / 2)", current: false, description: "Number of d6s for Sneak Attack damage" }
  ],
  sorcerer: [
    { name: "Sorcery Points", max: "level >= 2 ? level : 0", current: true, description: "Points used for various sorcerer abilities" },
    { name: "Metamagic Options", max: "level >= 3 ? (level >= 10 ? (level >= 17 ? 4 : 3) : 2) : 0", current: false, description: "Number of metamagic options known" }
  ],
  warlock: [
    { name: "Pact Magic Slots", max: "level >= 1 ? (level >= 11 ? 3 : 2) : 0", current: true, description: "Spell slots (all slots are of your highest level)" },
    { name: "Slot Level", max: "level <= 2 ? 1 : level <= 4 ? 2 : level <= 6 ? 3 : level <= 8 ? 4 : 5", current: false, description: "Level of your Pact Magic spell slots" },
    { name: "Invocations Known", max: "level >= 2 ? 2 + Math.floor((level - 2) / 3) : 0", current: false, description: "Number of eldritch invocations known" }
  ],
  wizard: [
    { name: "Arcane Recovery", max: "Math.ceil(level / 2)", current: false, description: "Levels of spell slots you can recover" }
  ]
};

// Function to get ability modifier
function getAbilityModifier(ability) {
  const score = parseInt(document.getElementById(ability).value);
  return Math.floor((score - 10) / 2);
}

// Function to evaluate resource max value
function evaluateResourceMax(formula, level) {
  // Replace getAbilityModifier calls with actual values
  const evaluatedFormula = formula.replace(/getAbilityModifier\('(\w+)'\)/g, (match, ability) => {
    return getAbilityModifier(ability);
  });
  
  // Create a function to safely evaluate the formula
  return new Function('level', `return ${evaluatedFormula}`)(level);
}

// Update class resources when class or level changes
function updateClassResources() {
  const characterClass = document.getElementById('class').value;
  const level = parseInt(document.getElementById('level').value);
  const container = document.getElementById('class-resources-container');
  
  // Clear existing resources
  container.innerHTML = '';
  
  if (characterClass && classResources[characterClass]) {
    classResources[characterClass].forEach(resource => {
      const resourceDiv = document.createElement('div');
      resourceDiv.className = 'resource-item';
      
      const maxValue = evaluateResourceMax(resource.max, level);
      
      resourceDiv.innerHTML = `
        <label for="${resource.name.toLowerCase().replace(/\s+/g, '-')}">${resource.name}</label>
        ${resource.current ? 
          `<input type="number" 
                  id="${resource.name.toLowerCase().replace(/\s+/g, '-')}" 
                  min="0" 
                  max="${maxValue}" 
                  value="${maxValue}">` :
          `<span>${maxValue}</span>`}
        <div class="resource-description">${resource.description}</div>
      `;
      
      container.appendChild(resourceDiv);
    });
  }
}

// Add event listeners for class resources
document.getElementById('class').addEventListener('change', updateClassResources);
document.getElementById('level').addEventListener('change', updateClassResources);
abilityInputs.forEach(input => {
  input.addEventListener('change', updateClassResources);
});

// Function to create a print-friendly version of the character sheet
function createPrintableSheet() {
  const printableDiv = document.createElement('div');
  printableDiv.className = 'printable-sheet';
  
  // Character Header
  const header = document.createElement('div');
  header.className = 'print-header';
  header.innerHTML = `
    <h1>${document.getElementById('character-name').value || 'Character'}</h1>
    <div class="character-info">
      <p>Level ${document.getElementById('level').value} ${document.getElementById('race').value} ${document.getElementById('class').value}</p>
      <p>Background: ${document.getElementById('background').value} | Alignment: ${document.getElementById('alignment').value}</p>
    </div>
  `;
  printableDiv.appendChild(header);

  // Abilities & Skills Section
  const abilitiesSection = document.createElement('div');
  abilitiesSection.className = 'print-section';
  abilitiesSection.innerHTML = `
    <h2>Abilities & Skills</h2>
    <div class="print-abilities">
      <div class="print-ability">
        <h3>Strength: ${document.getElementById('strength').value} (${document.getElementById('strength-mod').textContent})</h3>
        <p>Save: ${document.getElementById('strength-save').checked ? '✓' : '○'} ${document.getElementById('strength-save-mod').textContent}</p>
      </div>
      <div class="print-ability">
        <h3>Dexterity: ${document.getElementById('dexterity').value} (${document.getElementById('dexterity-mod').textContent})</h3>
        <p>Save: ${document.getElementById('dexterity-save').checked ? '✓' : '○'} ${document.getElementById('dexterity-save-mod').textContent}</p>
      </div>
      <div class="print-ability">
        <h3>Constitution: ${document.getElementById('constitution').value} (${document.getElementById('constitution-mod').textContent})</h3>
        <p>Save: ${document.getElementById('constitution-save').checked ? '✓' : '○'} ${document.getElementById('constitution-save-mod').textContent}</p>
      </div>
      <div class="print-ability">
        <h3>Intelligence: ${document.getElementById('intelligence').value} (${document.getElementById('intelligence-mod').textContent})</h3>
        <p>Save: ${document.getElementById('intelligence-save').checked ? '✓' : '○'} ${document.getElementById('intelligence-save-mod').textContent}</p>
      </div>
      <div class="print-ability">
        <h3>Wisdom: ${document.getElementById('wisdom').value} (${document.getElementById('wisdom-mod').textContent})</h3>
        <p>Save: ${document.getElementById('wisdom-save').checked ? '✓' : '○'} ${document.getElementById('wisdom-save-mod').textContent}</p>
      </div>
      <div class="print-ability">
        <h3>Charisma: ${document.getElementById('charisma').value} (${document.getElementById('charisma-mod').textContent})</h3>
        <p>Save: ${document.getElementById('charisma-save').checked ? '✓' : '○'} ${document.getElementById('charisma-save-mod').textContent}</p>
      </div>
    </div>

    <h3>Skills</h3>
    <div class="print-skills">
      ${Array.from(document.querySelectorAll('.skill-item')).map(skill => {
        const checkbox = skill.querySelector('input[type="checkbox"]');
        const label = skill.querySelector('label');
        const mod = skill.querySelector('.skill-mod');
        return `<div class="print-skill">
          <span>${checkbox.checked ? '✓' : '○'}</span>
          <span>${label.textContent}</span>
          <span>${mod.textContent}</span>
        </div>`;
      }).join('')}
    </div>
  `;
  printableDiv.appendChild(abilitiesSection);

  // Combat Section
  const combatSection = document.createElement('div');
  combatSection.className = 'print-section';
  combatSection.innerHTML = `
    <h2>Combat</h2>
    <div class="print-combat">
      <div class="print-combat-stats">
        <p>Armor Class: ${document.getElementById('armor-class').value}</p>
        <p>Initiative: ${document.getElementById('initiative').value}</p>
        <p>Speed: ${document.getElementById('speed').value}</p>
        <p>HP: ${document.getElementById('current-hp').value}/${document.getElementById('max-hp').value}</p>
        <p>Temporary HP: ${document.getElementById('temp-hp').value}</p>
        <p>Hit Dice: ${document.getElementById('hit-dice').value}</p>
      </div>
      <div class="print-death-saves">
        <p>Death Saves - Success: ${Array.from({ length: 3 }, (_, i) => document.getElementById(`death-success-${i + 1}`).checked ? '✓' : '○').join(' ')}</p>
        <p>Death Saves - Failure: ${Array.from({ length: 3 }, (_, i) => document.getElementById(`death-fail-${i + 1}`).checked ? '✓' : '○').join(' ')}</p>
      </div>
    </div>
  `;

  // Class Resources
  const classResourcesContainer = document.getElementById('class-resources-container');
  if (classResourcesContainer.children.length > 0) {
    const resourcesDiv = document.createElement('div');
    resourcesDiv.className = 'print-resources';
    resourcesDiv.innerHTML = `
      <h3>Class Resources</h3>
      <div class="print-resources-grid">
        ${Array.from(classResourcesContainer.children).map(resource => {
          const label = resource.querySelector('label').textContent;
          const input = resource.querySelector('input');
          const current = input.value;
          const max = input.getAttribute('max');
          const description = resource.querySelector('.resource-description').textContent;
          return `<div class="print-resource">
            <p><strong>${label}:</strong> ${current}/${max}</p>
            <p class="print-resource-desc">${description}</p>
          </div>`;
        }).join('')}
      </div>
    `;
    combatSection.appendChild(resourcesDiv);
  }

  // Attacks Table
  const attacksTable = document.createElement('div');
  attacksTable.innerHTML = `
    <h3>Attacks & Spellcasting</h3>
    <table class="print-attacks">
      <thead>
        <tr><th>Name</th><th>Attack Bonus</th><th>Damage/Type</th></tr>
      </thead>
      <tbody>
        ${Array.from(document.querySelectorAll('#attacks-table tbody tr')).map(row => {
          const inputs = row.querySelectorAll('input');
          if (!inputs[0]?.value) return '';
          return `<tr>
            <td>${inputs[0]?.value || ''}</td>
            <td>${inputs[1]?.value || ''}</td>
            <td>${inputs[2]?.value || ''}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  `;
  combatSection.appendChild(attacksTable);

  // Features & Traits
  const featuresDiv = document.createElement('div');
  featuresDiv.innerHTML = `
    <h3>Features & Traits</h3>
    <div class="print-features">
      ${document.getElementById('combat-features').value}
    </div>
  `;
  combatSection.appendChild(featuresDiv);
  printableDiv.appendChild(combatSection);

  // Equipment Section
  const equipmentSection = document.createElement('div');
  equipmentSection.className = 'print-section';
  equipmentSection.innerHTML = `
    <h2>Equipment</h2>
    <div class="print-currency">
      <p>CP: ${document.getElementById('cp').value}</p>
      <p>SP: ${document.getElementById('sp').value}</p>
      <p>EP: ${document.getElementById('ep').value}</p>
      <p>GP: ${document.getElementById('gp').value}</p>
      <p>PP: ${document.getElementById('pp').value}</p>
    </div>
    <table class="print-equipment">
      <thead>
        <tr><th>Item</th><th>Quantity</th><th>Weight</th></tr>
      </thead>
      <tbody>
        ${Array.from(document.querySelectorAll('.equipment-item')).map(item => {
          const inputs = item.querySelectorAll('input');
          if (!inputs[0]?.value) return '';
          return `<tr>
            <td>${inputs[0]?.value || ''}</td>
            <td>${inputs[1]?.value || ''}</td>
            <td>${inputs[2]?.value || ''}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  `;
  printableDiv.appendChild(equipmentSection);

  // Spells Section
  const spellcastingClass = document.getElementById('spellcasting-class').value;
  if (spellcastingClass) {
    const spellsSection = document.createElement('div');
    spellsSection.className = 'print-section';
    spellsSection.innerHTML = `
      <h2>Spells</h2>
      <div class="print-spellcasting">
        <p>Spellcasting Class: ${spellcastingClass}</p>
        <p>Spellcasting Ability: ${document.getElementById('spellcasting-ability').value}</p>
        <p>Spell Save DC: ${document.getElementById('spell-save-dc').value}</p>
        <p>Spell Attack Bonus: ${document.getElementById('spell-attack-bonus').value}</p>
      </div>
      <div class="print-spell-slots">
        ${Array.from({ length: 9 }, (_, i) => {
          const level = i + 1;
          const slots = document.getElementById(`level-${level}-slots`).value;
          return slots > 0 ? `<p>Level ${level}: ${slots}</p>` : '';
        }).join('')}
      </div>
    `;

    // Add spells by level
    const spellLevels = ['Cantrips', ...Array.from({ length: 9 }, (_, i) => `Level ${i + 1}`)];
    spellLevels.forEach((levelName, index) => {
      const spells = Array.from(document.querySelectorAll(`#${index === 0 ? 'cantrips' : `level-${index}`}-list .spell-item`))
        .map(spell => {
          const inputs = spell.querySelectorAll('input');
          return {
            name: inputs[0]?.value || '',
            castingTime: inputs[1]?.value || '',
            range: inputs[2]?.value || ''
          };
        })
        .filter(spell => spell.name);

      if (spells.length > 0) {
        spellsSection.innerHTML += `
          <h3>${levelName}</h3>
          <table class="print-spells">
            <thead>
              <tr><th>Name</th><th>Casting Time</th><th>Range</th></tr>
            </thead>
            <tbody>
              ${spells.map(spell => `
                <tr>
                  <td>${spell.name}</td>
                  <td>${spell.castingTime}</td>
                  <td>${spell.range}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }
    });
    printableDiv.appendChild(spellsSection);
  }

  // Biography Section
  const bioSection = document.createElement('div');
  bioSection.className = 'print-section';
  bioSection.innerHTML = `
    <h2>Biography</h2>
    <div class="print-bio">
      <div class="print-traits">
        <h3>Personality Traits</h3>
        <p>${document.getElementById('personality-traits').value}</p>
        <h3>Ideals</h3>
        <p>${document.getElementById('ideals').value}</p>
        <h3>Bonds</h3>
        <p>${document.getElementById('bonds').value}</p>
        <h3>Flaws</h3>
        <p>${document.getElementById('flaws').value}</p>
      </div>
      <div class="print-background">
        <h3>Features & Traits</h3>
        <p>${document.getElementById('features').value}</p>
        <h3>Backstory</h3>
        <p>${document.getElementById('backstory').value}</p>
        <h3>Allies & Organizations</h3>
        <p>${document.getElementById('allies').value}</p>
        <h3>Additional Notes</h3>
        <p>${document.getElementById('additional-notes').value}</p>
      </div>
    </div>
  `;
  printableDiv.appendChild(bioSection);

  return printableDiv;
}

// Add loading indicator
function showLoading(element) {
  element.classList.add('loading');
  element.disabled = true;
}

function hideLoading(element) {
  element.classList.remove('loading');
  element.disabled = false;
}

// Add form validation
function validateForm() {
  const requiredFields = {
    'character-name': 'Character Name',
    'class': 'Class',
    'level': 'Level',
    'race': 'Race'
  };

  let isValid = true;
  let firstInvalidField = null;

  for (const [fieldId, fieldName] of Object.entries(requiredFields)) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();

    if (!value) {
      isValid = false;
      field.classList.add('invalid');
      
      if (!firstInvalidField) {
        firstInvalidField = field;
      }

      // Show error message
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = `${fieldName} is required`;
      field.parentNode.appendChild(errorDiv);
    } else {
      field.classList.remove('invalid');
      const errorMessage = field.parentNode.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.remove();
      }
    }
  }

  if (firstInvalidField) {
    firstInvalidField.focus();
  }

  return isValid;
}

// Add smooth transitions between tabs
function switchTab(event) {
  const targetTab = event.target.dataset.tab;
  if (!targetTab) return;

  // Remove active class from all tabs and contents
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
    content.style.opacity = '0';
  });

  // Add active class to clicked tab and its content
  event.target.classList.add('active');
  const targetContent = document.getElementById(targetTab);
  targetContent.classList.add('active');

  // Trigger reflow
  void targetContent.offsetWidth;

  // Add fade in effect
  targetContent.style.opacity = '1';
}

// Add autosave functionality
let autosaveTimeout;
function setupAutosave() {
  const form = document.getElementById('character-form');
  const fields = form.querySelectorAll('input, select, textarea');

  fields.forEach(field => {
    field.addEventListener('change', () => {
      clearTimeout(autosaveTimeout);
      autosaveTimeout = setTimeout(() => {
        saveCharacter(true); // true indicates it's an autosave
      }, 1000);
    });
  });
}

// Enhance save functionality
async function saveCharacter(isAutosave = false) {
  if (!isAutosave && !validateForm()) {
    return;
  }

  const saveButton = document.getElementById('save-character');
  showLoading(saveButton);

  try {
    const characterData = getCharacterData();
    localStorage.setItem('characterData', JSON.stringify(characterData));

    if (!isAutosave) {
      // Show success message
      const toast = document.createElement('div');
      toast.className = 'toast success';
      toast.textContent = 'Character saved successfully!';
      document.body.appendChild(toast);

      // Remove toast after 3 seconds
      setTimeout(() => {
        toast.remove();
      }, 3000);
    }
  } catch (error) {
    console.error('Error saving character:', error);
    
    if (!isAutosave) {
      // Show error message
      const toast = document.createElement('div');
      toast.className = 'toast error';
      toast.textContent = 'Error saving character. Please try again.';
      document.body.appendChild(toast);

      // Remove toast after 3 seconds
      setTimeout(() => {
        toast.remove();
      }, 3000);
    }
  } finally {
    hideLoading(saveButton);
  }
}

// Add confirmation for clear form
function clearForm() {
  if (confirm('Are you sure you want to clear all form data? This action cannot be undone.')) {
    document.getElementById('character-form').reset();
    localStorage.removeItem('characterData');
    updateAllCalculations();
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Add tab switching functionality
  document.querySelector('.tabs').addEventListener('click', switchTab);

  // Setup autosave
  setupAutosave();

  // Load saved character data if exists
  const savedData = localStorage.getItem('characterData');
  if (savedData) {
    loadCharacter(JSON.parse(savedData));
  }

  // Add input validation styles
  const style = document.createElement('style');
  style.textContent = `
    .invalid {
      border-color: var(--danger) !important;
    }

    .error-message {
      color: var(--danger);
      font-size: 0.875rem;
      margin-top: 4px;
    }

    .loading {
      position: relative;
      pointer-events: none;
    }

    .loading::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1em;
      height: 1em;
      margin: -0.5em;
      border: 2px solid #fff;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s infinite linear;
    }

    @keyframes spin {
      100% { transform: rotate(360deg); }
    }

    .toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 12px 24px;
      border-radius: var(--border-radius);
      color: white;
      font-weight: 600;
      z-index: 1000;
      animation: slideIn 0.3s ease-out;
    }

    .toast.success {
      background-color: var(--success);
    }

    .toast.error {
      background-color: var(--danger);
    }

    @keyframes slideIn {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }

    .tab-content {
      transition: opacity 0.3s ease;
    }

    .tab-content:not(.active) {
      display: none;
    }
  `;
  document.head.appendChild(style);
});
