// Expanded data for 2024 PHB
const races = [
    { 
        id: 'dragonborn', 
        name: 'Dragonborn', 
        description: "Descendants of dragons with breath weapons and damage resistance.",
        traits: [
            { name: "Draconic Ancestry", description: "Choose a dragon type for your breath weapon and damage resistance." },
            { name: "Breath Weapon", description: "You can exhale destructive energy as an action." }
        ],
        abilityIncrease: { strength: 2, charisma: 1 }
    },
    // Add all other races with similar detail
];

const classes = [
    {
        id: 'fighter',
        name: 'Fighter',
        hitDie: 'd10',
        weaponMasteries: ['Push', 'Topple', 'Graze', 'Flex'],
        features: [
            { level: 1, name: "Weapon Mastery", description: "Gain mastery with certain weapons." },
            { level: 1, name: "Tactical Mind", description: "Use Second Wind to grant advantage." }
        ],
        spellcasting: false,
        proficiencies: {
            weapons: ["All weapons"],
            armor: ["All armor", "Shields"],
            skills: ["Choose 2 from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival"]
        }
    },
    // Add all other classes with similar detail
];

const backgrounds = [
    {
        id: 'acolyte',
        name: 'Acolyte',
        description: "You spent your life in service to a temple.",
        feature: "Shelter of the Faithful",
        skills: ["Insight", "Religion"],
        equipment: ["Holy symbol", "Prayer book", "5 sticks of incense", "Vestments", "Common clothes", "15 gp"]
    },
    // Add all other backgrounds
];

const weapons = [
    { name: "Longsword", type: "Martial", damage: "1d8", properties: ["Versatile (1d10)"], mastery: "Flex" },
    { name: "Greatsword", type: "Martial", damage: "2d6", properties: ["Heavy", "Two-handed"], mastery: "Graze" },
    // Add all weapons
];

const spells = [
    {
        name: "Magic Missile",
        level: 1,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "You create three glowing darts of magical force...",
        classes: ["Wizard", "Sorcerer"]
    },
    // Add all spells
];

const skills = [
    { name: "Acrobatics", ability: "Dexterity" },
    { name: "Animal Handling", ability: "Wisdom" },
    // All skills
];

const equipmentPacks = [
    {
        name: "Burglar's Pack",
        contents: [
            "Backpack", "Ball bearings (1000)", "String (10 feet)", "Bell",
            "Candle (5)", "Crowbar", "Hammer", "Piton (10)", "Lantern, hooded",
            "Oil flasks (2)", "Rations (5 days)", "Tinderbox", "Waterskin",
            "Rope, hempen (50 feet)"
        ],
        cost: "16 gp"
    },
    // Other equipment packs
];

// Helper functions
function getAbilityModifier(score) {
    return Math.floor((score - 10) / 2);
}

function calculateProficiencyBonus(level) {
    return Math.floor(2 + (level - 1) / 4);
}