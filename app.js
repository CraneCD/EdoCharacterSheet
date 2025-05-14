// Main application state
let currentCharacter = {
    basics: {
        name: "",
        race: "",
        background: "",
        class: "",
        level: 1,
        alignment: "",
        experience: 0
    },
    abilities: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
    },
    skills: [],
    proficiencies: {
        weapons: [],
        armor: [],
        tools: [],
        savingThrows: []
    },
    features: [],
    equipment: [],
    spells: [],
    weaponMasteries: [],
    hitPoints: {
        maximum: 0,
        current: 0,
        temporary: 0
    }
};

let currentStep = 0;
const steps = [
    { title: "Character Basics", fields: [
        { type: "text", id: "charName", label: "Character Name" },
        { type: "number", id: "charLevel", label: "Level", min: 1, max: 20, value: 1 },
        { type: "select", id: "charAlignment", label: "Alignment", options: [
            "Lawful Good", "Neutral Good", "Chaotic Good",
            "Lawful Neutral", "True Neutral", "Chaotic Neutral",
            "Lawful Evil", "Neutral Evil", "Chaotic Evil"
        ]}
    ]},
    { title: "Race", fields: [
        { type: "race-select", id: "charRace", label: "Select Race", options: races }
    ]},
    { title: "Background", fields: [
        { type: "background-select", id: "charBackground", label: "Select Background", options: backgrounds }
    ]},
    { title: "Class", fields: [
        { type: "class-select", id: "charClass", label: "Select Class", options: classes }
    ]},
    { title: "Abilities", fields: [
        { type: "ability-method", id: "abilityMethod", label: "Ability Generation Method", options: [
            "Standard Array", "Point Buy", "Manual Entry"
        ]},
        { type: "ability-scores", id: "abilityScores", label: "Assign Ability Scores" }
    ]},
    { title: "Skills & Proficiencies", fields: [
        { type: "skill-selection", id: "skillSelection", label: "Select Skills" }
    ]},
    { title: "Equipment", fields: [
        { type: "equipment-selection", id: "equipmentSelection", label: "Select Equipment" }
    ]},
    { title: "Spells", fields: [
        { type: "spell-selection", id: "spellSelection", label: "Select Spells" }
    ]},
    { title: "Review", fields: [
        { type: "review", id: "characterReview", label: "Review Your Character" }
    ]}
];

document.addEventListener('DOMContentLoaded', function() {
    initCreationSteps();
    initAbilitiesDisplay();
    initEventListeners();
    showStep(0);
});

function initEventListeners() {
    document.getElementById('newCharacter').addEventListener('click', resetCharacter);
    document.getElementById('saveCharacter').addEventListener('click', saveCharacter);
    document.getElementById('loadCharacter').addEventListener('click', loadCharacter);
    document.getElementById('printCharacter').addEventListener('click', printCharacter);
    
    // Modal events
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('confirmSpells').addEventListener('click', confirmSpells);
}

function initCreationSteps() {
    const stepsContainer = document.getElementById('creationSteps');
    
    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = `step ${index === 0 ? 'active' : ''}`;
        stepElement.id = `step-${index}`;
        
        let html = `<h3>${step.title}</h3>`;
        
        step.fields.forEach(field => {
            switch(field.type) {
                case "text":
                case "number":
                    html += createInputField(field);
                    break;
                case "select":
                    html += createSelectField(field);
                    break;
                case "race-select":
                    html += createRaceSelect(field);
                    break;
                case "class-select":
                    html += createClassSelect(field);
                    break;
                case "background-select":
                    html += createBackgroundSelect(field);
                    break;
                case "ability-method":
                    html += createAbilityMethodSelect(field);
                    break;
                case "ability-scores":
                    html += createAbilityScoresSection(field);
                    break;
                case "skill-selection":
                    html += createSkillSelection(field);
                    break;
                case "equipment-selection":
                    html += createEquipmentSelection(field);
                    break;
                case "spell-selection":
                    html += createSpellSelectionButton(field);
                    break;
                case "review":
                    html += createReviewSection(field);
                    break;
            }
        });
        
        // Navigation buttons
        html += `<div class="step-navigation">`;
        if (index > 0) {
            html += `<button onclick="showStep(${index - 1})"><i class="fas fa-arrow-left"></i> Previous</button>`;
        }
        if (index < steps.length - 1) {
            html += `<button onclick="showStep(${index + 1})">Next <i class="fas fa-arrow-right"></i></button>`;
        } else {
            html += `<button onclick="finishCreation()"><i class="fas fa-check"></i> Complete Character</button>`;
        }
        html += `</div>`;
        
        stepElement.innerHTML = html;
        stepsContainer.appendChild(stepElement);
    });
}

// Helper functions for creating step sections
function createRaceSelect(field) {
    let html = `
        <div class="form-group">
            <label for="${field.id}">${field.label}</label>
            <select id="${field.id}" class="race-select">
                <option value="">-- Select a Race --</option>
    `;
    
    field.options.forEach(race => {
        html += `<option value="${race.id}">${race.name}</option>`;
    });
    
    html += `</select></div>`;
    
    // Race description display
    html += `
        <div class="race-description" id="raceDescription">
            <p>Select a race to see its description and traits.</p>
        </div>
        <div class="race-traits" id="raceTraits"></div>
    `;
    
    return html;
}

// Similar functions would be created for class-select, background-select, etc.

function createAbilityScoresSection(field) {
    let html = `
        <div class="form-group">
            <label>${field.label}</label>
            <div class="ability-method-container" id="abilityMethodContainer">
                <!-- Method-specific UI will be injected here -->
            </div>
        </div>
    `;
    
    return html;
}

function createSkillSelection(field) {
    // This would create a skill selection interface based on class/background options
    // Implementation would be similar to race/class selection but with checkboxes
}

// Update functions
function updatePreview() {
    // Update all character sheet preview sections
    updateBasicInfo();
    updateAbilities();
    updateSkills();
    updateFeatures();
    updateEquipment();
    updateSpells();
    updateWeaponMasteries();
}

function updateBasicInfo() {
    const { basics } = currentCharacter;
    document.getElementById('charName').textContent = basics.name || 'New Adventurer';
    document.getElementById('charRace').textContent = getRaceName(basics.race) || 'Race';
    document.getElementById('charBackground').textContent = getBackgroundName(basics.background) || 'Background';
    document.getElementById('charClass').textContent = getClassName(basics.class) || 'Class';
    document.getElementById('charLevel').textContent = basics.level || '1';
}

function updateAbilities() {
    abilities.forEach(ability => {
        const score = currentCharacter.abilities[ability.toLowerCase()] || 10;
        const mod = getAbilityModifier(score);
        
        const valueElement = document.getElementById(`${ability.toLowerCase()}-display`);
        if (valueElement) {
            valueElement.textContent = score;
            const modElement = valueElement.nextElementSibling;
            modElement.textContent = mod >= 0 ? `+${mod}` : mod;
        }
    });
}

// Similar update functions for skills, features, equipment, etc.

// Modal functions
function openSpellSelection() {
    const modal = document.getElementById('spellModal');
    modal.style.display = 'block';
    
    // Populate spell selection based on class and level
    populateSpellSelection();
}

function closeModal() {
    document.getElementById('spellModal').style.display = 'none';
}

function populateSpellSelection() {
    const container = document.getElementById('spellSelection');
    container.innerHTML = '';
    
    // Filter spells by class and level
    const classSpells = spells.filter(spell => 
        spell.classes.includes(currentCharacter.basics.class)
    );
    
    // Group by level
    const spellsByLevel = {};
    classSpells.forEach(spell => {
        if (!spellsByLevel[spell.level]) {
            spellsByLevel[spell.level] = [];
        }
        spellsByLevel[spell.level].push(spell);
    });
    
    // Create UI
    for (const level in spellsByLevel) {
        const levelDiv = document.createElement('div');
        levelDiv.className = 'spell-level-group';
        levelDiv.innerHTML = `<h4>Level ${level} Spells</h4>`;
        
        spellsByLevel[level].forEach(spell => {
            const spellDiv = document.createElement('div');
            spellDiv.className = 'spell-option';
            spellDiv.textContent = spell.name;
            spellDiv.dataset.spellId = spell.name.toLowerCase().replace(/\s+/g, '-');
            spellDiv.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
            levelDiv.appendChild(spellDiv);
        });
        
        container.appendChild(levelDiv);
    }
}

function confirmSpells() {
    const selectedSpells = [];
    document.querySelectorAll('.spell-option.selected').forEach(option => {
        const spellName = option.textContent;
        const spell = spells.find(s => s.name === spellName);
        if (spell) selectedSpells.push(spell);
    });
    
    currentCharacter.spells = selectedSpells;
    updateSpells();
    closeModal();
}

// Save/Load functionality
function saveCharacter() {
    const characterJson = JSON.stringify(currentCharacter);
    localStorage.setItem('dndCharacter', characterJson);
    alert('Character saved successfully!');
}

function loadCharacter() {
    const characterJson = localStorage.getItem('dndCharacter');
    if (characterJson) {
        currentCharacter = JSON.parse(characterJson);
        updatePreview();
        alert('Character loaded successfully!');
    } else {
        alert('No saved character found.');
    }
}

function resetCharacter() {
    if (confirm('Are you sure you want to start a new character? All unsaved progress will be lost.')) {
        currentCharacter = {
            // Reset to initial state
        };
        showStep(0);
        updatePreview();
    }
}

function printCharacter() {
    window.print();
}

// Final creation
function finishCreation() {
    // Calculate final hit points
    const conMod = getAbilityModifier(currentCharacter.abilities.constitution);
    const hitDie = classes.find(c => c.id === currentCharacter.basics.class).hitDie;
    const dieSize = parseInt(hitDie.substring(1));
    
    currentCharacter.hitPoints.maximum = dieSize + conMod + 
        (currentCharacter.basics.level - 1) * (Math.floor(dieSize / 2) + 1 + conMod);
    currentCharacter.hitPoints.current = currentCharacter.hitPoints.maximum;
    
    // Save character
    saveCharacter();
    
    // Show completion message
    alert(`Character creation complete! ${currentCharacter.basics.name} is ready for adventure.`);
}