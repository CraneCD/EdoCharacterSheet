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
  
  // Set hit die based on class
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
      hitDie = 'd8';
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
  // Level 3 spells
  3: [
    { name: "Counterspell", castingTime: "1 reaction", range: "60 feet" },
    { name: "Dispel Magic", castingTime: "1 action", range: "120 feet" },
    { name: "Fear", castingTime: "1 action", range: "Self (30-foot cone)" },
    { name: "Fireball", castingTime: "1 action", range: "150 feet" },
    { name: "Fly", castingTime: "1 action", range: "Touch" },
    { name: "Gaseous Form", castingTime: "1 action", range: "Touch" },
    { name: "Haste", castingTime: "1 action", range: "30 feet" },
    { name: "Hypnotic Pattern", castingTime: "1 action", range: "120 feet" },
    { name: "Lightning Bolt", castingTime: "1 action", range: "Self (100-foot line)" },
    { name: "Major Image", castingTime: "1 action", range: "120 feet" },
    { name: "Protection from Energy", castingTime: "1 action", range: "Touch" },
    { name: "Revivify", castingTime: "1 action", range: "Touch" },
    { name: "Sending", castingTime: "1 action", range: "Unlimited" },
    { name: "Slow", castingTime: "1 action", range: "120 feet" },
    { name: "Vampiric Touch", castingTime: "1 action", range: "Self" },
    { name: "Water Breathing", castingTime: "1 action", range: "30 feet" }
  ],
  // Level 4 spells
  4: [
    { name: "Banishment", castingTime: "1 action", range: "60 feet" },
    { name: "Blight", castingTime: "1 action", range: "30 feet" },
    { name: "Confusion", castingTime: "1 action", range: "90 feet" },
    { name: "Dimension Door", castingTime: "1 action", range: "500 feet" },
    { name: "Fabricate", castingTime: "10 minutes", range: "120 feet" },
    { name: "Greater Invisibility", castingTime: "1 action", range: "Touch" },
    { name: "Hallucinatory Terrain", castingTime: "10 minutes", range: "300 feet" },
    { name: "Ice Storm", castingTime: "1 action", range: "300 feet" },
    { name: "Polymorph", castingTime: "1 action", range: "60 feet" },
    { name: "Stone Shape", castingTime: "1 action", range: "Touch" },
    { name: "Stoneskin", castingTime: "1 action", range: "Touch" },
    { name: "Wall of Fire", castingTime: "1 action", range: "120 feet" }
  ],
  // Level 5 spells
  5: [
    { name: "Animate Objects", castingTime: "1 action", range: "120 feet" },
    { name: "Bigby's Hand", castingTime: "1 action", range: "120 feet" },
    { name: "Cloudkill", castingTime: "1 action", range: "120 feet" },
    { name: "Cone of Cold", castingTime: "1 action", range: "Self (60-foot cone)" },
    { name: "Conjure Elemental", castingTime: "1 minute", range: "90 feet" },
    { name: "Dominate Person", castingTime: "1 action", range: "60 feet" },
    { name: "Geas", castingTime: "1 minute", range: "60 feet" },
    { name: "Hold Monster", castingTime: "1 action", range: "90 feet" },
    { name: "Legend Lore", castingTime: "10 minutes", range: "Self" },
    { name: "Modify Memory", castingTime: "1 action", range: "30 feet" },
    { name: "Passwall", castingTime: "1 action", range: "30 feet" },
    { name: "Planar Binding", castingTime: "1 hour", range: "60 feet" },
    { name: "Scrying", castingTime: "10 minutes", range: "Self" },
    { name: "Seeming", castingTime: "1 action", range: "30 feet" },
    { name: "Telekinesis", castingTime: "1 action", range: "60 feet" },
    { name: "Teleportation Circle", castingTime: "1 minute", range: "10 feet" },
    { name: "Wall of Force", castingTime: "1 action", range: "120 feet" },
    { name: "Wall of Stone", castingTime: "1 action", range: "120 feet" }
  ],
  // Level 6 spells
  6: [
    { name: "Chain Lightning", castingTime: "1 action", range: "150 feet" },
    { name: "Circle of Death", castingTime: "1 action", range: "150 feet" },
    { name: "Contingency", castingTime: "10 minutes", range: "Self" },
    { name: "Create Undead", castingTime: "1 minute", range: "10 feet" },
    { name: "Disintegrate", castingTime: "1 action", range: "60 feet" },
    { name: "Eyebite", castingTime: "1 action", range: "Self" },
    { name: "Flesh to Stone", castingTime: "1 action", range: "60 feet" },
    { name: "Globe of Invulnerability", castingTime: "1 action", range: "Self" },
    { name: "Guards and Wards", castingTime: "10 minutes", range: "Touch" },
    { name: "Magic Jar", castingTime: "1 minute", range: "Self" },
    { name: "Mass Suggestion", castingTime: "1 action", range: "60 feet" },
    { name: "Move Earth", castingTime: "1 action", range: "120 feet" },
    { name: "Otiluke's Freezing Sphere", castingTime: "1 action", range: "300 feet" },
    { name: "Otto's Irresistible Dance", castingTime: "1 action", range: "30 feet" },
    { name: "Programmed Illusion", castingTime: "1 action", range: "120 feet" },
    { name: "Sunbeam", castingTime: "1 action", range: "Self (60-foot line)" },
    { name: "True Seeing", castingTime: "1 action", range: "Touch" },
    { name: "Wall of Ice", castingTime: "1 action", range: "120 feet" }
  ],
  // Level 7 spells
  7: [
    { name: "Delayed Blast Fireball", castingTime: "1 action", range: "150 feet" },
    { name: "Etherealness", castingTime: "1 action", range: "Self" },
    { name: "Finger of Death", castingTime: "1 action", range: "60 feet" },
    { name: "Forcecage", castingTime: "1 action", range: "100 feet" },
    { name: "Mirage Arcane", castingTime: "10 minutes", range: "Sight" },
    { name: "Plane Shift", castingTime: "1 action", range: "Touch" },
    { name: "Prismatic Spray", castingTime: "1 action", range: "Self (60-foot cone)" },
    { name: "Project Image", castingTime: "1 action", range: "500 miles" },
    { name: "Reverse Gravity", castingTime: "1 action", range: "100 feet" },
    { name: "Sequester", castingTime: "1 action", range: "Touch" },
    { name: "Simulacrum", castingTime: "12 hours", range: "Touch" },
    { name: "Symbol", castingTime: "1 minute", range: "Touch" },
    { name: "Teleport", castingTime: "1 action", range: "10 feet" }
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
    0: ["Druidcraft", "Guidance", "Mending", "Poison Spray", "Produce Flame", "Resistance", "Shillelagh", "Thorn Whip"],
    1: ["Animal Friendship", "Charm Person", "Create or Destroy Water", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Entangle", "Faerie Fire", "Fog Cloud", "Goodberry", "Healing Word", "Jump", "Longstrider", "Purify Food and Drink", "Speak with Animals", "Thunderwave"],
    2: ["Animal Messenger", "Barkskin", "Beast Sense", "Darkvision", "Enhance Ability", "Find Traps", "Flame Blade", "Gust of Wind", "Heat Metal", "Hold Person", "Lesser Restoration", "Locate Animals or Plants", "Locate Object", "Moonbeam", "Pass without Trace", "Protection from Poison", "Spike Growth"],
    3: ["Call Lightning", "Conjure Animals", "Daylight", "Dispel Magic", "Feign Death", "Meld into Stone", "Plant Growth", "Protection from Energy", "Sleet Storm", "Speak with Plants", "Water Breathing", "Water Walk", "Wind Wall"],
    4: ["Blight", "Confusion", "Conjure Minor Elementals", "Conjure Woodland Beings", "Control Water", "Dominate Beast", "Freedom of Movement", "Giant Insect", "Grasping Vine", "Hallucinatory Terrain", "Ice Storm", "Locate Creature", "Polymorph", "Stone Shape", "Stoneskin", "Wall of Fire"],
    5: ["Antilife Shell", "Awaken", "Commune with Nature", "Conjure Elemental", "Contagion", "Geas", "Greater Restoration", "Insect Plague", "Mass Cure Wounds", "Planar Binding", "Reincarnate", "Scrying", "Tree Stride", "Wall of Stone"],
    6: ["Conjure Fey", "Find the Path", "Heal", "Heroes' Feast", "Move Earth", "Sunbeam", "Transport via Plants", "Wall of Thorns", "Wind Walk"],
    7: ["Fire Storm", "Mirage Arcane", "Plane Shift", "Regenerate", "Reverse Gravity"],
    8: ["Animal Shapes", "Antipathy/Sympathy", "Control Weather", "Earthquake", "Feeblemind", "Sunburst", "Tsunami"],
    9: ["Foresight", "Shapechange", "Storm of Vengeance", "True Resurrection"]
  },
  paladin: {
    1: ["Bless", "Command", "Compelled Duel", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Divine Favor", "Heroism", "Protection from Evil and Good", "Purify Food and Drink", "Searing Smite", "Shield of Faith", "Thunderous Smite", "Wrathful Smite"],
    2: ["Aid", "Branding Smite", "Find Steed", "Lesser Restoration", "Locate Object", "Magic Weapon", "Protection from Poison", "Zone of Truth"],
    3: ["Aura of Vitality", "Blinding Smite", "Create Food and Water", "Crusader's Mantle", "Daylight", "Dispel Magic", "Elemental Weapon", "Magic Circle", "Remove Curse", "Revivify"],
    4: ["Aura of Life", "Aura of Purity", "Banishment", "Death Ward", "Locate Creature", "Staggering Smite"],
    5: ["Banishing Smite", "Circle of Power", "Destructive Wave", "Dispel Evil and Good", "Geas", "Raise Dead"]
  },
  ranger: {
    1: ["Alarm", "Animal Friendship", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Ensnaring Strike", "Fog Cloud", "Goodberry", "Hail of Thorns", "Hunter's Mark", "Jump", "Longstrider", "Speak with Animals"],
    2: ["Animal Messenger", "Barkskin", "Beast Sense", "Cordon of Arrows", "Darkvision", "Find Traps", "Lesser Restoration", "Locate Animals or Plants", "Locate Object", "Pass without Trace", "Protection from Poison", "Silence", "Spike Growth"],
    3: ["Conjure Animals", "Conjure Barrage", "Daylight", "Lightning Arrow", "Nondetection", "Plant Growth", "Protection from Energy", "Speak with Plants", "Water Breathing", "Water Walk", "Wind Wall"],
    4: ["Conjure Woodland Beings", "Freedom of Movement", "Grasping Vine", "Locate Creature", "Stoneskin"],
    5: ["Commune with Nature", "Conjure Volley", "Swift Quiver", "Tree Stride"]
  },
  sorcerer: {
    0: ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"],
    1: ["Burning Hands", "Charm Person", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Fog Cloud", "Jump", "Mage Armor", "Magic Missile", "Shield", "Silent Image", "Sleep", "Thunderwave"],
    2: ["Alter Self", "Blindness/Deafness", "Blur", "Darkness", "Darkvision", "Enhance Ability", "Enlarge/Reduce", "Gust of Wind", "Hold Person", "Invisibility", "Knock", "Levitate", "Mirror Image", "Misty Step", "Scorching Ray", "See Invisibility", "Shatter", "Spider Climb", "Suggestion", "Web"],
    3: ["Blink", "Clairvoyance", "Counterspell", "Daylight", "Dispel Magic", "Fear", "Fireball", "Fly", "Gaseous Form", "Haste", "Hypnotic Pattern", "Lightning Bolt", "Major Image", "Protection from Energy", "Sleet Storm", "Slow", "Stinking Cloud", "Tongues", "Water Breathing", "Water Walk"],
    4: ["Banishment", "Blight", "Confusion", "Dimension Door", "Dominate Beast", "Greater Invisibility", "Ice Storm", "Polymorph", "Stoneskin", "Wall of Fire"],
    5: ["Animate Objects", "Cloudkill", "Cone of Cold", "Creation", "Dominate Person", "Hold Monster", "Insect Plague", "Seeming", "Telekinesis", "Teleportation Circle", "Wall of Stone"],
    6: ["Arcane Gate", "Chain Lightning", "Circle of Death", "Disintegrate", "Eyebite", "Globe of Invulnerability", "Mass Suggestion", "Move Earth", "Sunbeam", "True Seeing"],
    7: ["Delayed Blast Fireball", "Etherealness", "Finger of Death", "Fire Storm", "Plane Shift", "Prismatic Spray", "Reverse Gravity", "Teleport"],
    8: ["Dominate Monster", "Earthquake", "Incendiary Cloud", "Power Word Stun", "Sunburst"],
    9: ["Gate", "Meteor Swarm", "Power Word Kill", "Time Stop", "Wish"]
  },
  warlock: {
    0: ["Blade Ward", "Chill Touch", "Eldritch Blast", "Friends", "Mage Hand", "Minor Illusion", "Poison Spray", "Prestidigitation", "True Strike"],
    1: ["Armor of Agathys", "Arms of Hadar", "Charm Person", "Comprehend Languages", "Expeditious Retreat", "Hellish Rebuke", "Hex", "Illusory Script", "Protection from Evil and Good", "Unseen Servant", "Witch Bolt"],
    2: ["Cloud of Daggers", "Crown of Madness", "Darkness", "Enthrall", "Hold Person", "Invisibility", "Mirror Image", "Misty Step", "Ray of Enfeeblement", "Shatter", "Spider Climb", "Suggestion"],
    3: ["Counterspell", "Dispel Magic", "Fear", "Fly", "Gaseous Form", "Hunger of Hadar", "Hypnotic Pattern", "Magic Circle", "Major Image", "Remove Curse", "Tongues", "Vampiric Touch"],
    4: ["Banishment", "Blight", "Dimension Door", "Hallucinatory Terrain", "Evard's Black Tentacles", "Sickening Radiance"],
    5: ["Contact Other Plane", "Dream", "Hold Monster", "Scrying", "Teleportation Circle"],
    6: ["Arcane Gate", "Circle of Death", "Conjure Fey", "Create Undead", "Eyebite", "Flesh to Stone", "Mass Suggestion", "True Seeing"],
    7: ["Etherealness", "Finger of Death", "Forcecage", "Plane Shift"],
    8: ["Demiplane", "Dominate Monster", "Feeblemind", "Glibness", "Power Word Stun"],
    9: ["Astral Projection", "Foresight", "Imprisonment", "Power Word Kill", "True Polymorph"]
  },
  wizard: {
    0: ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"],
    1: ["Alarm", "Burning Hands", "Charm Person", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Grease", "Identify", "Illusory Script", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Protection from Evil and Good", "Shield", "Silent Image", "Sleep", "Tasha's Hideous Laughter", "Tenser's Floating Disk", "Thunderwave", "Unseen Servant", "Witch Bolt"],
    2: ["Alter Self", "Arcane Lock", "Blindness/Deafness", "Blur", "Cloud of Daggers", "Continual Flame", "Darkness", "Darkvision", "Detect Thoughts", "Enlarge/Reduce", "Flaming Sphere", "Gentle Repose", "Gust of Wind", "Hold Person", "Invisibility", "Knock", "Levitate", "Locate Object", "Magic Mouth", "Magic Weapon", "Melf's Acid Arrow", "Mirror Image", "Misty Step", "Nystul's Magic Aura", "Phantasmal Force", "Ray of Enfeeblement", "Rope Trick", "Scorching Ray", "See Invisibility", "Shatter", "Spider Climb", "Suggestion", "Web"],
    3: ["Animate Dead", "Bestow Curse", "Blink", "Clairvoyance", "Counterspell", "Dispel Magic", "Fear", "Feign Death", "Fireball", "Fly", "Gaseous Form", "Glyph of Warding", "Haste", "Hypnotic Pattern", "Leomund's Tiny Hut", "Lightning Bolt", "Magic Circle", "Major Image", "Nondetection", "Phantom Steed", "Protection from Energy", "Remove Curse", "Sending", "Sleet Storm", "Slow", "Stinking Cloud", "Tongues", "Vampiric Touch", "Water Breathing"],
    4: ["Arcane Eye", "Banishment", "Blight", "Confusion", "Conjure Minor Elementals", "Control Water", "Dimension Door", "Evard's Black Tentacles", "Fabricate", "Fire Shield", "Greater Invisibility", "Hallucinatory Terrain", "Ice Storm", "Leomund's Secret Chest", "Locate Creature", "Mordenkainen's Faithful Hound", "Mordenkainen's Private Sanctum", "Otiluke's Resilient Sphere", "Phantasmal Killer", "Polymorph", "Stone Shape", "Stoneskin", "Wall of Fire"],
    5: ["Animate Objects", "Bigby's Hand", "Cloudkill", "Cone of Cold", "Conjure Elemental", "Contact Other Plane", "Creation", "Dominate Person", "Dream", "Geas", "Hold Monster", "Legend Lore", "Mislead", "Modify Memory", "Passwall", "Planar Binding", "Rary's Telepathic Bond", "Scrying", "Seeming", "Telekinesis", "Teleportation Circle", "Wall of Force", "Wall of Stone"],
    6: ["Chain Lightning", "Circle of Death", "Contingency", "Create Undead", "Disintegrate", "Drawmij's Instant Summons", "Eyebite", "Flesh to Stone", "Globe of Invulnerability", "Guards and Wards", "Magic Jar", "Mass Suggestion", "Move Earth", "Otiluke's Freezing Sphere", "Otto's Irresistible Dance", "Programmed Illusion", "Sunbeam", "True Seeing", "Wall of Ice"],
    7: ["Delayed Blast Fireball", "Etherealness", "Finger of Death", "Forcecage", "Mirage Arcane", "Mordenkainen's Magnificent Mansion", "Mordenkainen's Sword", "Plane Shift", "Prismatic Spray", "Reverse Gravity", "Sequester", "Simulacrum", "Symbol", "Teleport"],
    8: ["Antimagic Field", "Antipathy/Sympathy", "Clone", "Control Weather", "Demiplane", "Dominate Monster", "Feeblemind", "Incendiary Cloud", "Maze", "Mind Blank", "Power Word Stun", "Sunburst", "Telepathy"],
    9: ["Astral Projection", "Foresight", "Gate", "Imprisonment", "Meteor Swarm", "Power Word Kill", "Prismatic Wall", "Shapechange", "Time Stop", "True Polymorph", "Weird", "Wish"]
  },
  artificer: {
    0: ["Acid Splash", "Dancing Lights", "Fire Bolt", "Guidance", "Light", "Mage Hand", "Mending", "Message", "Poison Spray", "Prestidigitation", "Ray of Frost", "Resistance", "Shocking Grasp", "Spare the Dying"],
    1: ["Alarm", "Cure Wounds", "Detect Magic", "Disguise Self", "Expeditious Retreat", "Faerie Fire", "False Life", "Feather Fall", "Grease", "Identify", "Jump", "Longstrider", "Purify Food and Drink", "Sanctuary", "Shield", "Snare", "Tasha's Hideous Laughter"],
    2: ["Aid", "Alter Self", "Arcane Lock", "Blur", "Continual Flame", "Darkvision", "Enhance Ability", "Enlarge/Reduce", "Heat Metal", "Invisibility", "Lesser Restoration", "Levitate", "Magic Mouth", "Protection from Poison", "Pyrotechnics", "Rope Trick", "See Invisibility", "Spider Climb", "Web"],
    3: ["Blink", "Create Food and Water", "Elemental Weapon", "Flame Arrows", "Fly", "Glyph of Warding", "Haste", "Intellect Fortress", "Protection from Energy", "Revivify", "Water Breathing", "Water Walk"],
    4: ["Arcane Eye", "Fabricate", "Freedom of Movement", "Leomund's Secret Chest", "Mordenkainen's Faithful Hound", "Otiluke's Resilient Sphere", "Stone Shape", "Stoneskin"],
    5: ["Animate Objects", "Bigby's Hand", "Creation", "Greater Restoration", "Skill Empowerment", "Wall of Stone"]
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
      <td><input type="text" name="attack-name"></td>
      <td><input type="text" name="attack-bonus"></td>
      <td><input type="text" name="attack-damage"></td>
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
  
  if (['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock', 'wizard', 'artificer'].includes(characterClass)) {
    spellcastingClass.value = characterClass;
    
    // Set default spellcasting ability based on class
    const abilityMapping = {
      'bard': 'charisma',
      'cleric': 'wisdom',
      'druid': 'wisdom',
      'paladin': 'charisma',
      'ranger': 'wisdom',
      'sorcerer': 'charisma',
      'warlock': 'charisma',
      'wizard': 'intelligence',
      'artificer': 'intelligence'
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
      <td><input type="text" name="attack-name" value="${atk.name || ''}"></td>
      <td><input type="text" name="attack-bonus" value="${atk.bonus || ''}"></td>
      <td><input type="text" name="attack-damage" value="${atk.damage || ''}"></td>
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
  const sheet = document.querySelector('.container'); // Or your top-level element
  const name = document.getElementById('character-name').value || 'character';

  const opt = {
    margin:       0.5,
    filename:     `${name}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(sheet).save();
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
