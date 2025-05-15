// Extended spell database with full details from all official 5e source books

/** 
 * @typedef {Object} SpellData
 * @property {number} level - The spell's level (0 for cantrips)
 * @property {string} school - The school of magic
 * @property {string} castingTime - The casting time
 * @property {string} range - The spell's range
 * @property {string} components - The spell components (V, S, M)
 * @property {string} duration - How long the spell lasts
 * @property {string[]} classes - Classes that can cast this spell
 * @property {string} description - Full spell description
 * @property {string|null} higherLevels - Effects at higher levels, if any
 */

/** @type {Record<string, SpellData>} */
const spellDatabase = {
    // Cantrips (Level 0)
    'Sorcerous Burst': {
        level: 0,
        school: 'evocation',
        castingTime: '1 action',
        range: '120 feet',
        components: 'V, S',
        duration: 'Instantaneous',
        classes: ['sorcerer'],
        description: "You cast sorcerous energy at one creature or object within range. Make a ranged attack roll against the target. On a hit, the target takes 1d8 damage of a type you choose: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder.\nIf you roll an 8 on a d8 for this spell, you can roll another d8, and add it to the damage. When you cast this spell, the maximum number of these d8s you can add to the spell's damage equals your spellcasting ability modifier.\nThis spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
        higherLevels: null
    },
    "Acid Splash": {
        level: 0,
        school: "conjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["artificer", "sorcerer", "wizard"],
        description: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
        higherLevels: null
    },
    "Blade Ward": {
        level: 0,
        school: "abjuration",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "1 round",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
        higherLevels: null
    },
    "Booming Blade": {
        level: 0,
        school: "evocation",
        castingTime: "1 action",
        range: "Self (5-foot radius)",
        components: "V, M (a melee weapon worth at least 1 sp)",
        duration: "1 round",
        classes: ["artificer", "sorcerer", "warlock", "wizard"],
        description: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and becomes sheathed in booming energy until the start of your next turn. If the target willingly moves before then, it takes 1d8 thunder damage, and the spell ends.\nThis spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8).",
        higherLevels: null
    },
    "Chill Touch": {
        level: 0,
        school: "necromancy",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "1 round",
        classes: ["sorcerer", "warlock", "wizard"],
        description: "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.\nIf you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.\nThis spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
        higherLevels: null
    },
    "Dancing Lights": {
        level: 0,
        school: "evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a bit of phosphorus or wychwood, or a glowworm)",
        duration: "Concentration, up to 1 minute",
        classes: ["artificer", "bard", "sorcerer", "wizard"],
        description: "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.\nAs a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.",
        higherLevels: null
    },
    "Druidcraft": {
        level: 0,
        school: "transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["druid"],
        description: "Whispering to the spirits of nature, you create one of the following effects within range:\n• You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on.\n• You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.\n• You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk.\n• You instantly light or snuff out a candle, a torch, or a small campfire.",
        higherLevels: null
    },
    "Eldritch Blast": {
        level: 0,
        school: "evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["warlock"],
        description: "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.\nThe spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
        higherLevels: null
    },
    "Fire Bolt": {
        level: 0,
        school: "evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["artificer", "sorcerer", "wizard"],
        description: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.\nThis spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
        higherLevels: null
    },
    "Friends": {
        level: 0,
        school: "enchantment",
        castingTime: "1 action",
        range: "Self",
        components: "S, M (a small amount of makeup applied to the face as this spell is cast)",
        duration: "Concentration, up to 1 minute",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it.",
        higherLevels: null
    },
    "Green-Flame Blade": {
        level: 0,
        school: "evocation",
        castingTime: "1 action",
        range: "Self (5-foot radius)",
        components: "V, M (a melee weapon worth at least 1 sp)",
        duration: "Instantaneous",
        classes: ["artificer", "sorcerer", "warlock", "wizard"],
        description: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.\nThis spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8).",
        higherLevels: null
    },
    "Guidance": {
        level: 0,
        school: "divination",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        classes: ["artificer", "cleric", "druid"],
        description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
        higherLevels: null
    },
    "Light": {
        level: 0,
        school: "evocation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, M (a firefly or phosphorescent moss)",
        duration: "1 hour",
        classes: ["artificer", "bard", "cleric", "sorcerer", "wizard"],
        description: "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.\nIf you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.",
        higherLevels: null
    },
    "Mage Hand": {
        level: 0,
        school: "conjuration",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S",
        duration: "1 minute",
        classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],
        description: "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.\nYou can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.\nThe hand can't attack, activate magical items, or carry more than 10 pounds.",
        higherLevels: null
    },
    "Message": {
        level: 0,
        school: "transmutation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a short piece of copper wire)",
        duration: "1 round",
        classes: ["artificer", "bard", "sorcerer", "wizard"],
        description: "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.\nYou can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.",
        higherLevels: null
    },
    "Minor Illusion": {
        level: 0,
        school: "illusion",
        castingTime: "1 action",
        range: "30 feet",
        components: "S, M (a bit of fleece)",
        duration: "1 minute",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.\nIf you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.\nIf you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.\nIf a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
        higherLevels: null
    },
    "Poison Spray": {
        level: 0,
        school: "conjuration",
        castingTime: "1 action",
        range: "10 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["artificer", "druid", "sorcerer", "warlock", "wizard"],
        description: "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.\nThis spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).",
        higherLevels: null
    },
    "Prestidigitation": {
        level: 0,
        school: "transmutation",
        castingTime: "1 action",
        range: "10 feet",
        components: "V, S",
        duration: "Up to 1 hour",
        classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],
        description: "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:\n• You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.\n• You instantaneously light or snuff out a candle, a torch, or a small campfire.\n• You instantaneously clean or soil an object no larger than 1 cubic foot.\n• You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.\n• You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.\n• You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.\nIf you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
        higherLevels: null
    },
    "Ray of Frost": {
        level: 0,
        school: "evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["artificer", "sorcerer", "wizard"],
        description: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.\nThe spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
        higherLevels: null
    },
    "Sacred Flame": {
        level: 0,
        school: "evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["cleric"],
        description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.\nThe spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
        higherLevels: null
    },
    "Spare the Dying": {
        level: 0,
        school: "necromancy",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["artificer", "cleric"],
        description: "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.",
        higherLevels: null
    },
    "Thaumaturgy": {
        level: 0,
        school: "transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V",
        duration: "Up to 1 minute",
        classes: ["cleric"],
        description: "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:\n• Your voice booms up to three times as loud as normal for 1 minute.\n• You cause flames to flicker, brighten, dim, or change color for 1 minute.\n• You cause harmless tremors in the ground for 1 minute.\n• You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.\n• You instantaneously cause an unlocked door or window to fly open or slam shut.\n• You alter the appearance of your eyes for 1 minute.\nIf you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.",
        higherLevels: null
    },
    "True Strike": {
        level: 0,
        school: "divination",
        castingTime: "1 action",
        range: "30 feet",
        components: "S",
        duration: "Concentration, up to 1 round",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.",
        higherLevels: null
    },
        "Vicious Mockery": {        level: 0,        school: "enchantment",        castingTime: "1 action",        range: "60 feet",        components: "V",        duration: "Instantaneous",        classes: ["bard"],        description: "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.\nThis spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",        higherLevels: null    },    "Control Flames": {        level: 0,        school: "transmutation",        castingTime: "1 action",        range: "60 feet",        components: "S",        duration: "Instantaneous or 1 hour",        classes: ["druid", "sorcerer", "wizard"],        description: "You choose a nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:\n• You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.\n• You instantaneously extinguish the flames within the cube.\n• You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.\n• You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour.",        higherLevels: null    },    "Create Bonfire": {        level: 0,        school: "conjuration",        castingTime: "1 action",        range: "60 feet",        components: "V, S",        duration: "Concentration, up to 1 minute",        classes: ["druid", "sorcerer", "warlock", "wizard"],        description: "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there.\nThe bonfire ignites flammable objects in its area that aren't being worn or carried.\nThe spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",        higherLevels: null    },    "Frostbite": {        level: 0,        school: "evocation",        castingTime: "1 action",        range: "60 feet",        components: "V, S",        duration: "Instantaneous",        classes: ["druid", "sorcerer", "warlock", "wizard"],        description: "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.\nThe spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",        higherLevels: null    },    "Gust": {        level: 0,        school: "transmutation",        castingTime: "1 action",        range: "30 feet",        components: "V, S",        duration: "Instantaneous",        classes: ["druid", "sorcerer", "wizard"],        description: "You seize the air and compel it to create one of the following effects at a point you can see within range:\n• One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.\n• You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.\n• You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters closed, or your clothing to ripple in a breeze.",        higherLevels: null    },    "Infestation": {        level: 0,        school: "conjuration",        castingTime: "1 action",        range: "30 feet",        components: "V, S, M (a living flea)",        duration: "Instantaneous",        classes: ["druid", "sorcerer", "warlock", "wizard"],        description: "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.\nThe spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",        higherLevels: null    },    "Lightning Lure": {        level: 0,        school: "evocation",        castingTime: "1 action",        range: "Self (15-foot radius)",        components: "V",        duration: "Instantaneous",        classes: ["artificer", "sorcerer", "warlock", "wizard"],        description: "You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and take 1d8 lightning damage if it ends within 5 feet of you.\nThis spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",        higherLevels: null    },    "Magic Stone": {        level: 0,        school: "transmutation",        castingTime: "1 bonus action",        range: "Touch",        components: "V, S",        duration: "1 minute",        classes: ["artificer", "druid", "warlock"],        description: "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, a pebble has a range of 60 feet. If someone else attacks with a pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes 1d6 + your spellcasting ability modifier bludgeoning damage. Whether the attack hits or misses, the spell then ends on the stone.\nIf you cast this spell again, the spell ends on any pebbles still affected by your previous casting.",        higherLevels: null    },    "Mind Sliver": {        level: 0,        school: "enchantment",        castingTime: "1 action",        range: "60 feet",        components: "V",        duration: "1 round",        classes: ["sorcerer", "warlock", "wizard"],        description: "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn.\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",        higherLevels: null    },    "Mold Earth": {        level: 0,        school: "transmutation",        castingTime: "1 action",        range: "30 feet",        components: "S",        duration: "Instantaneous or 1 hour",        classes: ["druid", "sorcerer", "wizard"],        description: "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:\n• If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't involve enough force to cause damage.\n• You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.\n• If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.",        higherLevels: null    },    "Primal Savagery": {        level: 0,        school: "transmutation",        castingTime: "1 action",        range: "Self",        components: "S",        duration: "Instantaneous",        classes: ["druid"],        description: "You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal.\nThe spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",        higherLevels: null    },    "Shape Water": {        level: 0,        school: "transmutation",        castingTime: "1 action",        range: "30 feet",        components: "S",        duration: "Instantaneous or 1 hour",        classes: ["druid", "sorcerer", "wizard"],        description: "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:\n• You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.\n• You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.\n• You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.\n• You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.",        higherLevels: null    },    "Sword Burst": {        level: 0,        school: "conjuration",        castingTime: "1 action",        range: "Self (5-foot radius)",        components: "V",        duration: "Instantaneous",        classes: ["artificer", "sorcerer", "warlock", "wizard"],        description: "You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage.\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",        higherLevels: null    },    "Thunderclap": {        level: 0,        school: "evocation",        castingTime: "1 action",        range: "Self (5-foot radius)",        components: "S",        duration: "Instantaneous",        classes: ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],        description: "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must make a Constitution saving throw or take 1d6 thunder damage.\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",        higherLevels: null    },    "Toll the Dead": {        level: 0,        school: "necromancy",        castingTime: "1 action",        range: "60 feet",        components: "V, S",        duration: "Instantaneous",        classes: ["cleric", "warlock", "wizard"],        description: "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage.\nThe spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12).",        higherLevels: null    },    "Word of Radiance": {        level: 0,        school: "evocation",        castingTime: "1 action",        range: "5 feet",        components: "V, M (a holy symbol)",        duration: "Instantaneous",        classes: ["cleric"],        description: "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.\nThe spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",        higherLevels: null    },    // Level 1 Spells
    "Burning Hands": {
        level: 1,
        school: "evocation",
        castingTime: "1 action",
        range: "Self (15-foot cone)",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["sorcerer", "wizard"],
        description: "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.\nThe fire ignites any flammable objects in the area that aren't being worn or carried.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
    },
    "Charm Person": {
        level: 1,
        school: "enchantment",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S",
        duration: "1 hour",
        classes: ["bard", "druid", "sorcerer", "warlock", "wizard"],
        description: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
    },
    "Cure Wounds": {
        level: 1,
        school: "evocation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger"],
        description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
    },
    "Detect Magic": {
        level: 1,
        school: "divination",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "Concentration, up to 10 minutes",
        classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "wizard"],
        description: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.\nThe spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
        higherLevels: null
    },
    "Disguise Self": {
        level: 1,
        school: "illusion",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "1 hour",
        classes: ["artificer", "bard", "sorcerer", "wizard"],
        description: "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.\nThe changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.\nTo discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.",
        higherLevels: null
    },
    "Faerie Fire": {
        level: 1,
        school: "evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V",
        duration: "Concentration, up to 1 minute",
        classes: ["artificer", "bard", "druid"],
        description: "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.\nAny attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.",
        higherLevels: null
    },
    "Feather Fall": {
        level: 1,
        school: "transmutation",
        castingTime: "1 reaction, which you take when you or a creature within 60 feet of you falls",
        range: "60 feet",
        components: "V, M (a small feather or piece of down)",
        duration: "1 minute",
        classes: ["artificer", "bard", "sorcerer", "wizard"],
        description: "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
        higherLevels: null
    },
    "Find Familiar": {
        level: 1,
        school: "conjuration",
        castingTime: "1 hour",
        range: "10 feet",
        components: "V, S, M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)",
        duration: "Instantaneous",
        classes: ["wizard"],
        description: "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.\nYour familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.\nWhen the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. As an action, you can temporarily dismiss your familiar to a pocket dimension. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you.\nYou can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.\nFinally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.",
        higherLevels: null
    },
    "Fog Cloud": {
        level: 1,
        school: "conjuration",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        classes: ["druid", "ranger", "sorcerer", "wizard"],
        description: "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st."
    },
    "Goodberry": {
        level: 1,
        school: "transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a sprig of mistletoe)",
        duration: "Instantaneous",
        classes: ["druid", "ranger"],
        description: "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day.\nThe berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.",
        higherLevels: null
    },
    "Healing Word": {
        level: 1,
        school: "evocation",
        castingTime: "1 bonus action",
        range: "60 feet",
        components: "V",
        duration: "Instantaneous",
        classes: ["bard", "cleric", "druid"],
        description: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st."
    },
    "Identify": {
        level: 1,
        school: "divination",
        castingTime: "1 minute",
        range: "Touch",
        components: "V, S, M (a pearl worth at least 100 gp and an owl feather)",
        duration: "Instantaneous",
        classes: ["artificer", "bard", "wizard"],
        description: "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.\nIf you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
        higherLevels: null
    },
    "Jump": {
        level: 1,
        school: "transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a grasshopper's hind leg)",
        duration: "1 minute",
        classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
        description: "You touch a creature. The creature's jump distance is tripled until the spell ends.",
        higherLevels: null
    },
    "Longstrider": {
        level: 1,
        school: "transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a pinch of dirt)",
        duration: "1 hour",
        classes: ["artificer", "bard", "druid", "ranger", "wizard"],
        description: "You touch a creature. The target's speed increases by 10 feet until the spell ends.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
    },
    "Mage Armor": {
        level: 1,
        school: "abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a piece of cured leather)",
        duration: "8 hours",
        classes: ["sorcerer", "wizard"],
        description: "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
        higherLevels: null
    },
    "Magic Missile": {
        level: 1,
        school: "evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["sorcerer", "wizard"],
        description: "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
    },
    "Protection from Evil and Good": {
        level: 1,
        school: "abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (holy water or powdered silver and iron, which the spell consumes)",
        duration: "Concentration, up to 10 minutes",
        classes: ["cleric", "paladin", "warlock", "wizard"],
        description: "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.\nThe protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.",
        higherLevels: null
    },
    "Shield": {
        level: 1,
        school: "abjuration",
        castingTime: "1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell",
        range: "Self",
        components: "V, S",
        duration: "1 round",
        classes: ["sorcerer", "wizard"],
        description: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
        higherLevels: null
    },
    "Sleep": {
        level: 1,
        school: "enchantment",
        castingTime: "1 action",
        range: "90 feet",
        components: "V, S, M (a pinch of fine sand, rose petals, or a cricket)",
        duration: "1 minute",
        classes: ["bard", "sorcerer", "wizard"],
        description: "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).\nStarting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.\nUndead and creatures immune to being charmed aren't affected by this spell.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
    },
    "Thunderwave": {
        level: 1,
        school: "evocation",
        castingTime: "1 action",
        range: "Self (15-foot cube)",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["bard", "druid", "sorcerer", "wizard"],
        description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.\nIn addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
    },

    // Level 2 Spells
    "Aid": {
        level: 2,
        school: "abjuration",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a tiny strip of white cloth)",
        duration: "8 hours",
        classes: ["artificer", "cleric", "paladin"],
        description: "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd."
    },
    "Alter Self": {
        level: 2,
        school: "transmutation",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        classes: ["artificer", "sorcerer", "wizard"],
        description: "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.\n\nAquatic Adaptation: You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.\n\nChange Appearance: You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.\n\nNatural Weapons: You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.",
        higherLevels: null
    },
    "Arcane Lock": {
        level: 2,
        school: "abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (gold dust worth at least 25 gp, which the spell consumes)",
        duration: "Until dispelled",
        classes: ["artificer", "wizard"],
        description: "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes.\n\nWhile affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.",
        higherLevels: null
    },
    "Blindness/Deafness": {
        level: 2,
        school: "necromancy",
        castingTime: "1 action",
        range: "30 feet",
        components: "V",
        duration: "1 minute",
        classes: ["bard", "cleric", "sorcerer", "wizard"],
        description: "You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
    },
    "Blur": {
        level: 2,
        school: "illusion",
        castingTime: "1 action",
        range: "Self",
        components: "V",
        duration: "Concentration, up to 1 minute",
        classes: ["artificer", "sorcerer", "wizard"],
        description: "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight.",
        higherLevels: null
    },
    "Darkness": {
        level: 2,
        school: "evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, M (bat fur and a drop of pitch or piece of coal)",
        duration: "Concentration, up to 10 minutes",
        classes: ["sorcerer", "warlock", "wizard"],
        description: "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.\nIf the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.\nIf any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled.",
        higherLevels: null
    },
    "Darkvision": {
        level: 2,
        school: "transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (either a pinch of dried carrot or an agate)",
        duration: "8 hours",
        classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
        description: "You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet.",
        higherLevels: null
    },
    "Enhance Ability": {
        level: 2,
        school: "transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (fur or a feather from a beast)",
        duration: "Concentration, up to 1 hour",
        classes: ["artificer", "bard", "cleric", "druid", "ranger", "sorcerer", "wizard"],
        description: "You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.\n\nBear's Endurance: The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends.\n\nBull's Strength: The target has advantage on Strength checks, and their carrying capacity doubles.\n\nCat's Grace: The target has advantage on Dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated.\n\nEagle's Splendor: The target has advantage on Charisma checks.\n\nFox's Cunning: The target has advantage on Intelligence checks.\n\nOwl's Wisdom: The target has advantage on Wisdom checks.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
    },
    "Enlarge/Reduce": {
        level: 2,
        school: "transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a pinch of powdered iron)",
        duration: "Concentration, up to 1 minute",
        classes: ["artificer", "sorcerer", "wizard"],
        description: "You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.\n\nIf the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once.\n\nEnlarge: The target's size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category – from Medium to Large, for example. If there isn't enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target's weapons also grow to match its new size. While these weapons are enlarged, the target's attacks with them deal 1d4 extra damage.\n\nReduce: The target's size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category – from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target's weapons also shrink to match its new size. While these weapons are reduced, the target's attacks with them deal 1d4 less damage (this can't reduce the damage below 1).",
        higherLevels: null
    },
    "Heat Metal": {
        level: 2,
        school: "transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a piece of iron and a flame)",
        duration: "Concentration, up to 1 minute",
        classes: ["artificer", "bard", "druid"],
        description: "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.\n\nIf a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
    },
    "Hold Person": {
        level: 2,
        school: "enchantment",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a small, straight piece of iron)",
        duration: "Concentration, up to 1 minute",
        classes: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
        description: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
    },
    "Invisibility": {
        level: 2,
        school: "illusion",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (an eyelash encased in gum arabic)",
        duration: "Concentration, up to 1 hour",
        classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],
        description: "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
    },
    "Knock": {
        level: 2,
        school: "transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V",
        duration: "Instantaneous",
        classes: ["bard", "sorcerer", "wizard"],
        description: "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.\n\nA target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.\n\nIf you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.\n\nWhen you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object.",
        higherLevels: null
    },
    "Lesser Restoration": {
        level: 2,
        school: "abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger"],
        description: "You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.",
        higherLevels: null
    },
    "Levitate": {
        level: 2,
        school: "transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)",
        duration: "Concentration, up to 10 minutes",
        classes: ["artificer", "sorcerer", "wizard"],
        description: "One creature or loose object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.\n\nThe target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range.\n\nWhen the spell ends, the target floats gently to the ground if it is still aloft.",
        higherLevels: null
    },
    "Mirror Image": {
        level: 2,
        school: "illusion",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "1 minute",
        classes: ["sorcerer", "warlock", "wizard"],
        description: "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates.\n\nEach time a creature targets you with an attack during the spell's duration, roll a d20 to determine whether the attack instead targets one of your duplicates.\n\nIf you have three duplicates, you must roll a 6 or higher to change the attack's target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher.\n\nA duplicate's AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed.\n\nA creature is unaffected by this spell if it can't see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight.",
        higherLevels: null
    },
    "Misty Step": {
        level: 2,
        school: "conjuration",
        castingTime: "1 bonus action",
        range: "Self",
        components: "V",
        duration: "Instantaneous",
        classes: ["sorcerer", "warlock", "wizard"],
        description: "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.",
        higherLevels: null
    },
    "Moonbeam": {
        level: 2,
        school: "evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (several seeds of any moonseed plant and a piece of opalescent feldspar)",
        duration: "Concentration, up to 1 minute",
        classes: ["druid"],
        description: "A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.\n\nWhen a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one.\n\nA shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.\n\nOn each of your turns after you cast this spell, you can use an action to move the beam up to 60 feet in any direction.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
    },
    "Pass without Trace": {
        level: 2,
        school: "abjuration",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (ashes from a burned leaf of mistletoe and a sprig of spruce)",
        duration: "Concentration, up to 1 hour",
        classes: ["druid", "ranger"],
        description: "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.",
        higherLevels: null
    },
    "See Invisibility": {
        level: 2,
        school: "divination",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (a pinch of talc and a small sprinkling of powdered silver)",
        duration: "1 hour",
        classes: ["artificer", "bard", "sorcerer", "wizard"],
        description: "For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.",
        higherLevels: null
    },
    "Shatter": {
        level: 2,
        school: "evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a chip of mica)",
        duration: "Instantaneous",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.\n\nA nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
    },
    "Spider Climb": {
        level: 2,
        school: "transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a drop of bitumen and a spider)",
        duration: "Concentration, up to 1 hour",
        classes: ["artificer", "sorcerer", "warlock", "wizard"],
        description: "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.",
        higherLevels: null
    },
    "Suggestion": {
        level: 2,
        school: "enchantment",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, M (a snake's tongue and either a bit of honeycomb or a drop of sweet oil)",
        duration: "Concentration, up to 8 hours",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.\n\nThe target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.\n\nYou can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't performed.\n\nIf you or any of your companions damage the target, the spell ends.",
        higherLevels: null
    },
    "Web": {
        level: 2,
        school: "conjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a bit of spiderweb)",
        duration: "Concentration, up to 1 hour",
        classes: ["artificer", "sorcerer", "wizard"],
        description: "You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.\n\nIf the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.\n\nEach creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.\n\nA creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.\n\nThe webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.",
        higherLevels: null
    },

    // Level 3 spells
    "Animate Dead": {
        level: 3,
        school: "necromancy",
        castingTime: "1 minute",
        range: "10 feet",
        components: "V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)",
        duration: "Instantaneous",
        classes: ["cleric", "wizard"],
        description: "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse. On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you. You decide what action the creature will take and where it will move during its next turn.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd."
    },
    "Counterspell": {
        level: 3,
        school: "abjuration",
        castingTime: "1 reaction",
        range: "60 feet",
        components: "S",
        duration: "Instantaneous",
        classes: ["sorcerer", "warlock", "wizard"],
        description: "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used."
    },
    "Dispel Magic": {
        level: 3,
        school: "abjuration",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["bard", "cleric", "druid", "paladin", "sorcerer", "warlock", "wizard"],
        description: "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used."
    },
    "Fireball": {
        level: 3,
        school: "evocation",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S, M (a tiny ball of bat guano and sulfur)",
        duration: "Instantaneous",
        classes: ["sorcerer", "wizard"],
        description: "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
    },
    "Fly": {
        level: 3,
        school: "transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a wing feather from any bird)",
        duration: "Concentration, up to 10 minutes",
        classes: ["artificer", "sorcerer", "warlock", "wizard"],
        description: "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
    },
    "Haste": {
        level: 3,
        school: "transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a shaving of licorice root)",
        duration: "Concentration, up to 1 minute",
        classes: ["artificer", "sorcerer", "wizard"],
        description: "Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.",
        higherLevels: null
    },
    "Lightning Bolt": {
        level: 3,
        school: "evocation",
        castingTime: "1 action",
        range: "Self (100-foot line)",
        components: "V, S, M (a bit of fur and a rod of amber, crystal, or glass)",
        duration: "Instantaneous",
        classes: ["sorcerer", "wizard"],
        description: "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren't being worn or carried.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
    },
    "Revivify": {
        level: 3,
        school: "necromancy",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (diamonds worth 300 gp, which the spell consumes)",
        duration: "Instantaneous",
        classes: ["cleric", "paladin", "artificer"],
        description: "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.",
        higherLevels: null
    },
    "Slow": {
        level: 3,
        school: "transmutation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a drop of molasses)",
        duration: "Concentration, up to 1 minute",
        classes: ["sorcerer", "wizard"],
        description: "You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration. An affected target's speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.",
        higherLevels: null
    },
    "Fear": {
        level: 3,
        school: "illusion",
        castingTime: "1 action",
        range: "Self (30-foot cone)",
        components: "V, S, M (a white feather or the heart of a hen)",
        duration: "Concentration, up to 1 minute",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You project a phantasmal image of a creature's worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration. While frightened by this spell, a creature must take the Dash action and move away from you by the safest and shortest available route on each of its turns, unless there is nowhere to move.",
        higherLevels: null
    },
    "Hypnotic Pattern": {
        level: 3,
        school: "illusion",
        castingTime: "1 action",
        range: "120 feet",
        components: "S, M (a glowing stick of incense or a crystal vial filled with phosphorescent material)",
        duration: "Concentration, up to 1 minute",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.",
        higherLevels: null
    },
    "Major Image": {
        level: 3,
        school: "illusion",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a bit of fleece)",
        duration: "Concentration, up to 10 minutes",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration."
    },
    "Protection from Energy": {
        level: 3,
        school: "abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        classes: ["cleric", "druid", "ranger", "sorcerer", "wizard"],
        description: "For the duration, the willing creature you touch has resistance to one type of damage of your choice: acid, cold, fire, lightning, or thunder.",
        higherLevels: null
    },
    "Sending": {
        level: 3,
        school: "evocation",
        castingTime: "1 action",
        range: "Unlimited",
        components: "V, S, M (a short piece of fine copper wire)",
        duration: "1 round",
        classes: ["bard", "cleric", "wizard"],
        description: "You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately.",
        higherLevels: null
    },
    "Vampiric Touch": {
        level: 3,
        school: "necromancy",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        classes: ["warlock", "wizard"],
        description: "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
    },
    "Water Breathing": {
        level: 3,
        school: "transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a short reed or piece of straw)",
        duration: "24 hours",
        classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
        description: "This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.",
        higherLevels: null
    },

    // Level 4 Spells
    "Banishment": {
        level: 4,
        school: "abjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (an item distasteful to the target)",
        duration: "Concentration, up to 1 minute",
        classes: ["cleric", "paladin", "sorcerer", "warlock", "wizard"],
        description: "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished. If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.",
        higherLevels: "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th."
    },
    "Blight": {
        level: 4,
        school: "necromancy",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["druid", "sorcerer", "warlock", "wizard"],
        description: "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs. If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it.",
        higherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
    },
    "Confusion": {
        level: 4,
        school: "enchantment",
        castingTime: "1 action",
        range: "90 feet",
        components: "V, S, M (three nut shells)",
        duration: "Concentration, up to 1 minute",
        classes: ["bard", "druid", "sorcerer", "wizard"],
        description: "This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled actions. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it. An affected target can't take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn.",
        higherLevels: "When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot level above 4th."
    },
    "Dimension Door": {
        level: 4,
        school: "conjuration",
        castingTime: "1 action",
        range: "500 feet",
        components: "V",
        duration: "Instantaneous",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction. You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity.",
        higherLevels: null
    },
    "Greater Invisibility": {
        level: 4,
        school: "illusion",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        classes: ["bard", "sorcerer", "wizard"],
        description: "You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. Unlike regular invisibility, this spell's effects don't end if the target attacks or casts a spell.",
        higherLevels: null
    },
    "Ice Storm": {
        level: 4,
        school: "evocation",
        castingTime: "1 action",
        range: "300 feet",
        components: "V, S, M (a pinch of dust and a few drops of water)",
        duration: "Instantaneous",
        classes: ["druid", "sorcerer", "wizard"],
        description: "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one. Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.",
        higherLevels: "When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th."
    },
    "Polymorph": {
        level: 4,
        school: "transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a caterpillar cocoon)",
        duration: "Concentration, up to 1 hour",
        classes: ["bard", "druid", "sorcerer", "wizard"],
        description: "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The spell has no effect on a shapechanger or a creature with 0 hit points. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating).",
        higherLevels: null
    },
    "Stone Shape": {
        level: 4,
        school: "transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (soft clay, which must be worked into roughly the desired shape of the stone object)",
        duration: "Instantaneous",
        classes: ["artificer", "cleric", "druid", "wizard"],
        description: "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. For example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible.",
        higherLevels: null
    },
    "Stoneskin": {
        level: 4,
        school: "abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (diamond dust worth 100 gp, which the spell consumes)",
        duration: "Concentration, up to 1 hour",
        classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
        description: "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage.",
        higherLevels: null
    },
    "Wall of Fire": {
        level: 4,
        school: "evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a small piece of phosphorus)",
        duration: "Concentration, up to 1 minute",
        classes: ["druid", "sorcerer", "wizard"],
        description: "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save.",
        higherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
    },
    "Fabricate": {
        level: 4,
        school: "transmutation",
        castingTime: "10 minutes",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["artificer", "wizard"],
        description: "You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a pile of trees, a rope from a patch of hemp, and clothes from flax or wool. Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material.",
        higherLevels: null
    },
    "Hallucinatory Terrain": {
        level: 4,
        school: "illusion",
        castingTime: "10 minutes",
        range: "300 feet",
        components: "V, S, M (a stone, a twig, and a bit of green plant)",
        duration: "24 hours",
        classes: ["bard", "druid", "warlock", "wizard"],
        description: "You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed in appearance.",
        higherLevels: null
    },
    "Death Ward": {
        level: 4,
        school: "abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "8 hours",
        classes: ["cleric", "paladin"],
        description: "You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends.",
        higherLevels: null
    },
    "Freedom of Movement": {
        level: 4,
        school: "abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a leather strap, bound around the arm or a similar appendage)",
        duration: "1 hour",
        classes: ["artificer", "bard", "cleric", "druid", "ranger"],
        description: "You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained. The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled.",
        higherLevels: null
    },
    "Guardian of Faith": {
        level: 4,
        school: "conjuration",
        castingTime: "1 action",
        range: "30 feet",
        components: "V",
        duration: "8 hours",
        classes: ["cleric"],
        description: "A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity. Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one.",
        higherLevels: null
    },

    // Level 5 Spells
    "Animate Objects": {
        level: 5,
        school: "transmutation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        classes: ["artificer", "bard", "sorcerer", "wizard"],
        description: "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.",
        higherLevels: "If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th."
    },
    "Bigby's Hand": {
        level: 5,
        school: "evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (an eggshell and a snakeskin glove)",
        duration: "Concentration, up to 1 minute",
        classes: ["wizard"],
        description: "You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand. The hand is an object with AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0).",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the damage from the hand's Clenched Fist option increases by 2d8 for each slot level above 5th."
    },
    "Cone of Cold": {
        level: 5,
        school: "evocation",
        castingTime: "1 action",
        range: "Self (60-foot cone)",
        components: "V, S, M (a small crystal or glass cone)",
        duration: "Instantaneous",
        classes: ["sorcerer", "wizard"],
        description: "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
    },
    "Hold Monster": {
        level: 5,
        school: "enchantment",
        castingTime: "1 action",
        range: "90 feet",
        components: "V, S, M (a small, straight piece of iron)",
        duration: "Concentration, up to 1 minute",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them."
    },
    "Legend Lore": {
        level: 5,
        school: "divination",
        castingTime: "10 minutes",
        range: "Self",
        components: "V, S, M (incense worth at least 250 gp, which the spell consumes, and four ivory strips worth at least 50 gp each)",
        duration: "Instantaneous",
        classes: ["bard", "cleric", "wizard"],
        description: "Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information.",
        higherLevels: null
    },
    "Scrying": {
        level: 5,
        school: "divination",
        castingTime: "10 minutes",
        range: "Self",
        components: "V, S, M (a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water)",
        duration: "Concentration, up to 10 minutes",
        classes: ["bard", "cleric", "druid", "warlock", "wizard"],
        description: "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.",
        higherLevels: null
    },
    "Telekinesis": {
        level: 5,
        school: "transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Concentration, up to 10 minutes",
        classes: ["sorcerer", "wizard"],
        description: "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.",
        higherLevels: null
    },
    "Wall of Force": {
        level: 5,
        school: "evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a pinch of powder made by crushing a clear gemstone)",
        duration: "Concentration, up to 10 minutes",
        classes: ["wizard"],
        description: "An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel.",
        higherLevels: null
    },
    "Wall of Stone": {
        level: 5,
        school: "evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a small block of granite)",
        duration: "Concentration, up to 10 minutes",
        classes: ["artificer", "druid", "sorcerer", "wizard"],
        description: "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice).",
        higherLevels: null
    },

    // Level 6 Spells
    "Chain Lightning": {
        level: 6,
        school: "evocation",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S, M (a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins)",
        duration: "Instantaneous",
        classes: ["sorcerer", "wizard"],
        description: "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.\nA target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one.",
        higherLevels: "When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th."
    },
    "Circle of Death": {
        level: 6,
        school: "necromancy",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S, M (the powder of a crushed black pearl worth at least 500 gp)",
        duration: "Instantaneous",
        classes: ["sorcerer", "warlock", "wizard"],
        description: "A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one.",
        higherLevels: "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th."
    },
    "Contingency": {
        level: 6,
        school: "evocation",
        castingTime: "10 minutes",
        range: "Self",
        components: "V, S, M (a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp)",
        duration: "10 days",
        classes: ["wizard"],
        description: "Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell—called the contingent spell—as part of casting contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid.\nThe contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then contingency ends.",
        higherLevels: null
    },
    "Create Undead": {
        level: 6,
        school: "necromancy",
        castingTime: "1 minute",
        range: "10 feet",
        components: "V, S, M (one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse)",
        duration: "Instantaneous",
        classes: ["cleric", "warlock", "wizard"],
        description: "You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The DM has game statistics for these creatures.)\nAs a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.\nThe creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on it again before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones.",
        higherLevels: "When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four ghouls. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies."
    },
    "Disintegrate": {
        level: 6,
        school: "transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a lodestone and a pinch of dust)",
        duration: "Instantaneous",
        classes: ["sorcerer", "wizard"],
        description: "A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by wall of force.\nA creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. The target is disintegrated if this damage leaves it with 0 hit points.\nA disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell.\nThis spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell.",
        higherLevels: "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th."
    },
    "Eyebite": {
        level: 6,
        school: "necromancy",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "For the spell's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of eyebite.\n\nAsleep: The target falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake.\n\nPanicked: The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends.\n\nSickened: The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another Wisdom saving throw. If it succeeds, the effect ends.",
        higherLevels: null
    },
    "Globe of Invulnerability": {
        level: 6,
        school: "abjuration",
        castingTime: "1 action",
        range: "Self (10-foot radius)",
        components: "V, S, M (a glass or crystal bead that shatters when the spell ends)",
        duration: "Concentration, up to 1 minute",
        classes: ["sorcerer", "wizard"],
        description: "An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration.\nAny spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells.",
        higherLevels: "When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th."
    },
    "Guards and Wards": {
        level: 6,
        school: "abjuration",
        castingTime: "10 minutes",
        range: "Touch",
        components: "V, S, M (burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp)",
        duration: "24 hours",
        classes: ["bard", "wizard"],
        description: "You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell.\nWhen you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.\nGuards and wards creates the following effects within the warded area.",
        higherLevels: null
    },
    "Mass Suggestion": {
        level: 6,
        school: "enchantment",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, M (a snake's tongue and either a bit of honeycomb or a drop of sweet oil)",
        duration: "24 hours",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.\nEach target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.\nYou can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn't met before the spell ends, the activity isn't performed.\nIf you or any of your companions damage a creature affected by this spell, the spell ends for that creature.",
        higherLevels: "When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day."
    },
    "Move Earth": {
        level: 6,
        school: "transmutation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (an iron blade and a small bag containing a mixture of soils—clay, loam, and sand)",
        duration: "Concentration, up to 2 hours",
        classes: ["druid", "sorcerer", "wizard"],
        description: "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete.\nAt the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect.\nBecause the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement.\nThis spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.\nSimilarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it.",
        higherLevels: null
    },
    "Sunbeam": {
        level: 6,
        school: "evocation",
        castingTime: "1 action",
        range: "Self (60-foot line)",
        components: "V, S, M (a magnifying glass)",
        duration: "Concentration, up to 1 minute",
        classes: ["druid", "sorcerer", "wizard"],
        description: "A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.\nYou can create a new line of radiance as your action on any turn until the spell ends.\nFor the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight.",
        higherLevels: null
    },
    "True Seeing": {
        level: 6,
        school: "divination",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (an ointment for the eyes that costs 25 gp; is made from mushroom powder, saffron, and fat; and is consumed by the spell)",
        duration: "1 hour",
        classes: ["bard", "cleric", "sorcerer", "warlock", "wizard"],
        description: "This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet.",
        higherLevels: null
    },
    "Wall of Ice": {
        level: 6,
        school: "evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a small piece of quartz)",
        duration: "Concentration, up to 10 minutes",
        classes: ["wizard"],
        description: "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.\nIf the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save.\nThe wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. That creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one.",
        higherLevels: "When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6, for each slot level above 6th."
    },
    "Word of Recall": {
        level: 6,
        school: "conjuration",
        castingTime: "1 action",
        range: "5 feet",
        components: "V",
        duration: "Instantaneous",
        classes: ["cleric"],
        description: "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.\nYou must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect.",
        higherLevels: null
    },

    // Level 7 Spells
    "Delayed Blast Fireball": {
        level: 7,
        school: "evocation",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S, M (a tiny ball of bat guano and sulfur)",
        duration: "Concentration, up to 1 minute",
        classes: ["sorcerer", "wizard"],
        description: "A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 12d6 fire damage on a failed save, or half as much damage on a successful one.\nThe spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6.\nIf the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes.\nThe fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
        higherLevels: "When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th."
    },
    "Divine Word": {
        level: 7,
        school: "evocation",
        castingTime: "1 bonus action",
        range: "30 feet",
        components: "V",
        duration: "Instantaneous",
        classes: ["cleric"],
        description: "You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points:\n• 50 hit points or fewer: deafened for 1 minute\n• 40 hit points or fewer: deafened and blinded for 10 minutes\n• 30 hit points or fewer: blinded, deafened, and stunned for 1 hour\n• 20 hit points or fewer: killed instantly\nRegardless of its current hit points, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isn't there already) and can't return to your current plane for 24 hours by any means short of a wish spell.",
        higherLevels: null
    },
    "Etherealness": {
        level: 7,
        school: "transmutation",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "Up to 8 hours",
        classes: ["bard", "cleric", "sorcerer", "warlock", "wizard"],
        description: "You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can't see anything more than 60 feet away.\nWhile on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Ethereal Plane can't perceive you and can't interact with you, unless a special ability or magic has given them the ability to do so.\nYou ignore all objects and effects that aren't on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from.\nWhen the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved.\nThis spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes.",
        higherLevels: "When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell."
    },
    "Finger of Death": {
        level: 7,
        school: "necromancy",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["sorcerer", "warlock", "wizard"],
        description: "You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one.\nA humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability.",
        higherLevels: null
    },
    "Fire Storm": {
        level: 7,
        school: "evocation",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["cleric", "druid", "sorcerer"],
        description: "A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one.\nThe fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell.",
        higherLevels: null
    },
    "Forcecage": {
        level: 7,
        school: "evocation",
        castingTime: "1 action",
        range: "100 feet",
        components: "V, S, M (ruby dust worth 1,500 gp)",
        duration: "1 hour",
        classes: ["bard", "warlock", "wizard"],
        description: "An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box as you choose.\nA prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart.\nA prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area.\nWhen you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area.\nA creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. On a success, the creature can use that magic to exit the cage. On a failure, the creature can't exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel.\nThis spell can't be dispelled by dispel magic.",
        higherLevels: null
    },
    "Crown of Stars": {
        level: 7,
        school: "evocation",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "1 hour",
        classes: ["sorcerer", "warlock", "wizard"],
        description: "Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes 4d12 radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote.\nIf you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30-foot radius.",
        higherLevels: "When you cast this spell using a spell slot of 8th level or higher, the number of motes created increases by two for each slot level above 7th."
    },
    "Mirage Arcane": {
        level: 7,
        school: "illusion",
        castingTime: "10 minutes",
        range: "Sight",
        components: "V, S",
        duration: "10 days",
        classes: ["bard", "druid", "wizard"],
        description: "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.\nSimilarly, you can alter the appearance of structures, or add them where none are present. The spell doesn't disguise, conceal, or add creatures.\nThe illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately.\nCreatures with truesight can see through the illusion to the terrain's true form; however, all other elements of the illusion remain, so while the creature can see the terrain's true form, the illusion still affects the other senses.",
        higherLevels: null
    },
    "Plane Shift": {
        level: 7,
        school: "conjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence)",
        duration: "Instantaneous",
        classes: ["cleric", "druid", "sorcerer", "warlock", "wizard"],
        description: "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM's discretion.\nAlternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.\nYou can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence.",
        higherLevels: null
    },
    "Power Word Pain": {
        level: 7,
        school: "enchantment",
        castingTime: "1 action",
        range: "60 feet",
        components: "V",
        duration: "Instantaneous",
        classes: ["sorcerer", "warlock", "wizard"],
        description: "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being charmed.\nWhile the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the casting fails and the spell is wasted.\nA target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends.",
        higherLevels: null
    },
    "Prismatic Spray": {
        level: 7,
        school: "evocation",
        castingTime: "1 action",
        range: "Self (60-foot cone)",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["sorcerer", "wizard"],
        description: "Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a d8 to determine which color ray affects it.\n1. Red. The target takes 10d6 fire damage on a failed save, or half as much damage on a successful one.\n2. Orange. The target takes 10d6 acid damage on a failed save, or half as much damage on a successful one.\n3. Yellow. The target takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.\n4. Green. The target takes 10d6 poison damage on a failed save, or half as much damage on a successful one.\n5. Blue. The target takes 10d6 cold damage on a failed save, or half as much damage on a successful one.\n6. Indigo. On a failed save, the target is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.\n7. Violet. On a failed save, the target is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.)\n8. Special. The target is struck by two rays. Roll twice more, rerolling any 8.",
        higherLevels: null
    },
    "Project Image": {
        level: 7,
        school: "illusion",
        castingTime: "1 action",
        range: "500 miles",
        components: "V, S, M (a small replica of you made from materials worth at least 5 gp)",
        duration: "Concentration, up to 1 day",
        classes: ["bard", "wizard"],
        description: "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends.\nYou can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly.\nYou can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.\nPhysical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it, and any noise it makes sounds hollow to the creature.",
        higherLevels: null
    },
    "Regenerate": {
        level: 7,
        school: "transmutation",
        castingTime: "1 minute",
        range: "Touch",
        components: "V, S, M (a prayer wheel and holy water)",
        duration: "1 hour",
        classes: ["bard", "cleric", "druid"],
        description: "You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).\nThe target's severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump.",
        higherLevels: null
    },
    "Resurrection": {
        level: 7,
        school: "necromancy",
        castingTime: "1 hour",
        range: "Touch",
        components: "V, S, M (a diamond worth at least 1,000 gp, which the spell consumes)",
        duration: "Instantaneous",
        classes: ["bard", "cleric"],
        description: "You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points.\nThis spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't, however, remove magical diseases, curses, and the like; if such effects aren't removed prior to casting the spell, they afflict the target on its return to life.\nThis spell closes all mortal wounds and restores any missing body parts.\nComing back from the dead is an ordeal. The target takes a −4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.\nCasting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can't cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws.",
        higherLevels: null
    },
    "Reverse Gravity": {
        level: 7,
        school: "transmutation",
        castingTime: "1 action",
        range: "100 feet",
        components: "V, S, M (a lodestone and iron filings)",
        duration: "Concentration, up to 1 minute",
        classes: ["druid", "sorcerer", "wizard"],
        description: "This spell reverses gravity in a 50-foot-radius, 100-foot high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.\nIf some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.\nAt the end of the duration, affected objects and creatures fall back down.",
        higherLevels: null
    },
    "Sequester": {
        level: 7,
        school: "transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes)",
        duration: "Until dispelled",
        classes: ["wizard"],
        description: "By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by divination spells.\nIf the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older.\nYou can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include 'after 1,000 years' or 'when the tarrasque awakens.' This spell also ends if the target takes any damage.",
        higherLevels: null
    },
    "Simulacrum": {
        level: 7,
        school: "illusion",
        castingTime: "12 hours",
        range: "Touch",
        components: "V, S, M (snow or ice in quantities sufficient to make a life-size copy of the duplicated creature; some hair, fingernail clippings, or other piece of that creature's body placed inside the snow or ice; and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell)",
        duration: "Until dispelled",
        classes: ["wizard"],
        description: "You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates, except that it is a construct.\nThe simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots.\nIf the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly.\nIf you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed.",
        higherLevels: null
    },
    "Symbol": {
        level: 7,
        school: "abjuration",
        castingTime: "1 minute",
        range: "Touch",
        components: "V, S, M (mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes)",
        duration: "Until dispelled or triggered",
        classes: ["bard", "cleric", "wizard"],
        description: "When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.\nThe glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it.\nYou decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph.\nYou can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password.\nWhen you inscribe the glyph, choose one of the following effects. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there.\nDeath. Each target must make a Constitution saving throw, taking 10d10 necrotic damage on a failed save, or half as much damage on a successful one.\nDiscord. Each target must make a Constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it has disadvantage on attack rolls and ability checks.\nFear. Each target must make a Wisdom saving throw and becomes frightened for 1 minute on a failed save. While frightened, the target drops whatever it's holding and must move at least 30 feet away from the glyph on each of its turns, if able.\nHopelessness. Each target must make a Charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can't attack or target any creature with harmful abilities, spells, or other magical effects.\nInsanity. Each target must make an Intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can't take actions, can't understand what other creatures say, can't read, and speaks only in gibberish. The DM controls its movement, which is erratic.\nPain. Each target must make a Constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save.\nSleep. Each target must make a Wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake.\nStunning. Each target must make a Wisdom saving throw and becomes stunned for 1 minute on a failed save.",
        higherLevels: null
    },
    "Teleport": {
        level: 7,
        school: "conjuration",
        castingTime: "1 action",
        range: "10 feet",
        components: "V",
        duration: "Instantaneous",
        classes: ["bard", "sorcerer", "wizard"],
        description: "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature.\nThe destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table.\nFamiliarity - Mishap - Similar Area - Off Target - On Target\nPermanent circle - — - — - — - 01–100\nAssociated object - — - — - — - 01–100\nVery familiar - 01–05 - 06–13 - 14–24 - 25–100\nSeen casually - 01–33 - 34–43 - 44–53 - 54–100\nViewed once - 01–43 - 44–53 - 54–73 - 74–100\nDescription - 01–43 - 44–53 - 54–73 - 74–100\nFalse destination - 01–50 - 51–100 - — - —\n\n'Very familiar' is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell. 'Seen casually' is someplace you have seen more than once but with which you aren't very familiar. 'Viewed once' is a place you have seen once, possibly using magic. 'Description' is a place whose location and appearance you know through someone else's description, perhaps from a map.\n'False destination' is a place that doesn't exist. Perhaps you tried to scry an enemy's sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists.\n\nOn Target. You and your group (or the target object) appear where you want to.\nOff Target. You and your group (or the target object) appear a random distance away from the destination in a random direction. Distance off target is 1d10 × 1d10 percent of the distance that was to be traveled. For example, if you tried to travel 120 miles, landed off target, and rolled a 5 and 3 on the two d10s, then you would be off target by 15 percent, or 18 miles. The DM determines the direction off target randomly by rolling a d8 and designating 1 as north, 2 as northeast, 3 as east, and so on around the points of the compass. If you were teleporting to a coastal city and wound up 18 miles out at sea, you could be in trouble.\nSimilar Area. You and your group (or the target object) wind up in a different area that's visually or thematically similar to the target area. If you are heading for your home laboratory, for example, you might wind up in another wizard's laboratory or in an alchemical supply shop that has many of the same tools and implements as your laboratory. Generally, you appear in the closest similar place, but since the spell has no range limit, you could conceivably wind up anywhere on the plane.\nMishap. The spell's unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 force damage, and the DM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time).",
        higherLevels: null
    },

    // Level 8 Spells
    "Antimagic Field": {
        level: 8,
        school: "abjuration",
        castingTime: "1 action",
        range: "Self (10-foot-radius sphere)",
        components: "V, S, M (a pinch of powdered iron or iron filings)",
        duration: "Concentration, up to 1 hour",
        classes: ["cleric", "wizard"],
        description: "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it.",
        higherLevels: null
    },
    "Antipathy/Sympathy": {
        level: 8,
        school: "enchantment",
        castingTime: "1 hour",
        range: "60 feet",
        components: "V, S, M (either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect)",
        duration: "10 days",
        classes: ["druid", "wizard"],
        description: "This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration.",
        higherLevels: null
    },
    "Clone": {
        level: 8,
        school: "necromancy",
        castingTime: "1 hour",
        range: "Touch",
        components: "V, S, M (a diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes, and a vessel worth at least 2,000 gp that has a sealable lid and is large enough to hold a Medium creature)",
        duration: "Instantaneous",
        classes: ["wizard"],
        description: "This spell grows an inert duplicate of a living, Medium creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed.",
        higherLevels: null
    },
    "Control Weather": {
        level: 8,
        school: "transmutation",
        castingTime: "10 minutes",
        range: "Self (5-mile radius)",
        components: "V, S, M (burning incense and bits of earth and wood mixed in water)",
        duration: "Concentration, up to 8 hours",
        classes: ["cleric", "druid", "wizard"],
        description: "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early. When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season.",
        higherLevels: null
    },
    "Demiplane": {
        level: 8,
        school: "conjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "S",
        duration: "1 hour",
        classes: ["warlock", "wizard"],
        description: "You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side.",
        higherLevels: null
    },
    "Dominate Monster": {
        level: 8,
        school: "enchantment",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence.",
        higherLevels: "When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours."
    },
    "Feeblemind": {
        level: 8,
        school: "enchantment",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S, M (a handful of clay, crystal, glass, or mineral spheres)",
        duration: "Instantaneous",
        classes: ["bard", "druid", "warlock", "wizard"],
        description: "You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an Intelligence saving throw. On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way.",
        higherLevels: null
    },
    "Glibness": {
        level: 8,
        school: "transmutation",
        castingTime: "1 action",
        range: "Self",
        components: "V",
        duration: "1 hour",
        classes: ["bard", "warlock"],
        description: "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.",
        higherLevels: null
    },
    "Holy Aura": {
        level: 8,
        school: "abjuration",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint's robe or a piece of parchment from a religious text)",
        duration: "Concentration, up to 1 minute",
        classes: ["cleric"],
        description: "Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends.",
        higherLevels: null
    },
    "Incendiary Cloud": {
        level: 8,
        school: "conjuration",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        classes: ["sorcerer", "wizard"],
        description: "A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one.",
        higherLevels: null
    },
    "Maze": {
        level: 8,
        school: "conjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Concentration, up to 10 minutes",
        classes: ["wizard"],
        description: "You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze. The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends. When the spell ends, the target reappears in the space it left or in the nearest unoccupied space.",
        higherLevels: null
    },
    "Mind Blank": {
        level: 8,
        school: "abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "24 hours",
        classes: ["bard", "wizard"],
        description: "Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils wish spells and spells or effects of similar power used to affect the target's mind or to gain information about the target.",
        higherLevels: null
    },
    "Power Word Stun": {
        level: 8,
        school: "enchantment",
        castingTime: "1 action",
        range: "60 feet",
        components: "V",
        duration: "Instantaneous",
        classes: ["bard", "sorcerer", "warlock", "wizard"],
        description: "You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect. The stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends.",
        higherLevels: null
    },
    "Sunburst": {
        level: 8,
        school: "evocation",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S, M (fire and a piece of sunstone)",
        duration: "Instantaneous",
        classes: ["druid", "sorcerer", "wizard"],
        description: "Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.",
        higherLevels: null
    },
    "Silvery Barbs": {
        level: 1,
        school: "enchantment",
        castingTime: "1 reaction, which you take when a creature you can see within 60 feet of you succeeds on an attack roll, ability check, or saving throw",
        range: "60 feet",
        components: "V",
        duration: "Instantaneous",
        classes: ["bard", "sorcerer", "wizard"],
        description: "You magically distract the triggering creature and turn its momentary uncertainty into encouragement for another creature. The triggering creature must reroll the d20 and use the lower roll. You can then choose a different creature you can see within range (you can choose yourself). The chosen creature has advantage on the next attack roll, ability check, or saving throw it makes within 1 minute.",
        higherLevels: null
    },
    "Kinetic Jaunt": {
        level: 2,
        school: "transmutation",
        castingTime: "1 bonus action",
        range: "Self",
        components: "S",
        duration: "Concentration, up to 1 minute",
        classes: ["artificer", "bard", "sorcerer", "wizard"],
        description: "You magically empower your movement with dancelike steps, giving yourself the following benefits for the duration:\n• Your walking speed increases by 10 feet.\n• You don't provoke opportunity attacks.\n• You can move through the space of another creature, and it doesn't count as difficult terrain. If you end your turn in another creature's space, you are pushed to the nearest unoccupied space.",
        higherLevels: null
    },
    "Wither and Bloom": {
        level: 2,
        school: "necromancy",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a withered vine twisted into a loop)",
        duration: "Instantaneous",
        classes: ["druid", "wizard"],
        description: "You invoke both death and life upon a 10-foot-radius sphere centered on a point within range. Each creature of your choice in that area must make a Constitution saving throw, taking 2d6 necrotic damage on a failed save, or half as much damage on a successful one. Nonmagical vegetation in that area withers.\nIn addition, one creature of your choice in that area can spend and roll one of its unspent Hit Dice and regain a number of hit points equal to the roll plus your spellcasting ability modifier.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
    }
};

// DOM Elements
const classSelect = document.getElementById('class-select');
const levelSelect = document.getElementById('level-select');
const spellList = document.getElementById('spell-list');
const spellDetails = document.getElementById('spell-details');

// Initialize filters
function initializeFilters() {
    // Get unique classes
    const classes = new Set();
    Object.values(spellDatabase).forEach(spell => {
        spell.classes.forEach(className => classes.add(className));
    });
    
    // Populate class select
    Array.from(classes).sort().forEach(className => {
        const option = document.createElement('option');
        option.value = className;
        option.textContent = className.charAt(0).toUpperCase() + className.slice(1);
        classSelect.appendChild(option);
    });
    
    // Populate level select (0-9)
    for (let i = 0; i <= 9; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i === 0 ? 'Cantrip' : `Level ${i}`;
        levelSelect.appendChild(option);
    }
}

// Filter spells based on selected class and level
function filterSpells() {
    const selectedClass = classSelect.value;
    const selectedLevel = parseInt(levelSelect.value);
    
    return Object.entries(spellDatabase).filter(([_, spell]) => {
        const classMatch = !selectedClass || spell.classes.includes(selectedClass);
        const levelMatch = selectedLevel === -1 || spell.level === selectedLevel;
        return classMatch && levelMatch;
    });
}

// Display filtered spell list
function displaySpellList() {
    const filteredSpells = filterSpells();
    spellList.innerHTML = '';
    
    filteredSpells.sort(([nameA], [nameB]) => nameA.localeCompare(nameB))
        .forEach(([spellName]) => {
            const div = document.createElement('div');
            div.className = 'spell-item';
            div.textContent = spellName;
            div.onclick = () => displaySpellDetails(spellName);
            spellList.appendChild(div);
        });
}

// Display spell details
function displaySpellDetails(spellName) {
    const spell = spellDatabase[spellName];
    if (!spell) return;

    const details = `
        <h2>${spellName}</h2>
        <p><strong>Level:</strong> ${spell.level === 0 ? 'Cantrip' : spell.level}</p>
        <p><strong>School:</strong> ${spell.school.charAt(0).toUpperCase() + spell.school.slice(1)}</p>
        <p><strong>Casting Time:</strong> ${spell.castingTime}</p>
        <p><strong>Range:</strong> ${spell.range}</p>
        <p><strong>Components:</strong> ${spell.components}</p>
        <p><strong>Duration:</strong> ${spell.duration}</p>
        <p><strong>Classes:</strong> ${spell.classes.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}</p>
        <p><strong>Description:</strong></p>
        <p>${spell.description.replace(/\n/g, '<br>')}</p>
        ${spell.higherLevels ? `<p><strong>At Higher Levels:</strong></p><p>${spell.higherLevels}</p>` : ''}
    `;
    
    spellDetails.innerHTML = details;
}

// Event listeners
classSelect.addEventListener('change', displaySpellList);
levelSelect.addEventListener('change', displaySpellList);

// Initialize the page
initializeFilters();
displaySpellList();