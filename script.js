const finalTitles = {
    family: "წითელქუდა",
    სიკეთე: "ნაცარქექია",
    nature: "ასფურცელა",
    adventure: "კომბლე"
};

const themes = { 
    family: {
        title: "Family",
        image: 'family.jpg',
        steps: [
            [
                { text: "Family is the most important thing in life.", correct: true, position: 0 },
                { text: "Dogs can speak English.", correct: false },
                { text: "Every family has its traditions.", correct: true, position: 1 },
                { text: "Fish can ride bicycles.", correct: false },
                { text: "Family gatherings are special moments.", correct: true, position: 2 },
                { text: "The sun sets in the east.", correct: false },
                { text: "We learn from our family experiences.", correct: true, position: 3 },
                { text: "Cats are better than dogs.", correct: false },
                { text: "Family love is unconditional.", correct: true, position: 4 },
                { text: "Everyone in a family must be perfect.", correct: false },
            ],
            [
                { text: "Family vacations create lasting memories.", correct: true, position: 0 },
                { text: "Everyone in a family dislikes each other.", correct: false },
                { text: "Communication is vital in families.", correct: true, position: 1 },
                { text: "Family meals are overrated.", correct: false },
                { text: "Support is important in a family.", correct: true, position: 2 },
                { text: "Family pets are always a burden.", correct: false },
                { text: "Traditions can strengthen family ties.", correct: true, position: 3 },
                { text: "All families are the same.", correct: false },
                { text: "Family helps us grow.", correct: true, position: 4 },
                { text: "Parents always know best.", correct: false },
            ],
            [
                { text: "Family provides a sense of belonging.", correct: true, position: 0 },
                { text: "Siblings never get along.", correct: false },
                { text: "Family support can be crucial during tough times.", correct: true, position: 1 },
                { text: "Only children are spoiled.", correct: false },
                { text: "Respect is essential in family relationships.", correct: true, position: 2 },
                { text: "Every family has a perfect child.", correct: false },
                { text: "Sharing experiences can strengthen bonds.", correct: true, position: 3 },
                { text: "In a family, everyone is selfish.", correct: false },
                { text: "Family is where love begins.", correct: true, position: 4 },
                { text: "Family reunions are always boring.", correct: false },
            ]
        ]
    },
    peace: {
        title: "სიკეთე",
        image: "peace.png",
        steps: [
            [
                { text: "სოფელში ცხოვრობდა ბიჭი, სახელად ლუკა, რომელიც ძალიან ცნობისმოყვარე და კეთილი იყო.", correct: true, position: 0 },
                { text: "War is the solution to every problem.", correct: false },
                { text: "ერთ დღეს, სეირნობისას ის ტყეში უცნაურ ბურთს წააწყდა, რომელიც თიხისგან იყო გაკეთებული.", correct: true, position: 1 },
                { text: "Silence is always golden.", correct: false },
                { text: "ბურთი ხელში აიღო და იგრძნო, რომ რაღაც უცნაური ძალა ჰქონდა.", correct: true, position: 2 },
                { text: "Conflict is a sign of strength.", correct: false },
                { text: "სახლში მისვლისას ლუკამ აღმოაჩინა, რომ ბურთი ანათებდა, როცა კარგ საქმეს აკეთებდა.", correct: true, position: 3 },
                { text: "Peace can be achieved through power.", correct: false },
                { text: "მას გაუჩნდა სურვილი, გაეგო, რა იყო ბურთის საიდუმლო.", correct: true, position: 4 },
                { text: "Fear is a sign of weakness.", correct: false },
            ],
            [
                { text: "ლუკამ გადაწყვიტა, სიკეთე გაევრცელებინა სოფელში.", correct: true, position: 0 },
                { text: "Peace is not achievable.", correct: false },
                { text: "პირველად მან მოხუც მეზობელს შეშის დაჭრაში დაეხმარა, და ბურთმა მაშინვე ანათება დაიწყო.", correct: true, position: 1 },
                { text: "Forgiveness is overrated.", correct: false },
                { text: "შემდეგ ლუკამ სოფელში წასული ფული იპოვა და პატრონს მიუტანა — ბურთი კიდევ უფრო ძლიერად აინთო.", correct: true, position: 2 },
                { text: "Peace is for the naive.", correct: false },
                { text: "სოფლის მცხოვრებლებმა შენიშნეს, რომ ლუკა სიკეთეს ყველასთვის აკეთებდა, და მალევე ყველა ლუკას მადლიერებას გამოხატავდა.", correct: true, position: 3 },
                { text: "Arguments lead to growth.", correct: false },
                { text: "ბურთი თანდათან უფრო ძლიერი ხდებოდა.", correct: true, position: 4 },
                { text: "Compromise is a weakness.", correct: false },
            ],
            [
                { text: "ერთ დღეს, ბურთი უცებ გაიბრწყინა და დაიშალა მტვრად.", correct: true, position: 0 },
                { text: "Peace is only for the rich.", correct: false },
                { text: "ლუკა ცოტა დაღონდა, მაგრამ მერე მიხვდა: ბურთი იმიტომ გაქრა, რომ სიკეთის ძალა უკვე მასში იყო.", correct: true, position: 1 },
                { text: "Hatred has its benefits.", correct: false },
                { text: "ის აღარ იყო დამოკიდებული ჯადოსნურ ბურთზე — ახლა თავად შეეძლო სიკეთით სხვებისთვის ნათება.", correct: true, position: 2 },
                { text: "Courage is unnecessary in peace.", correct: false },
                { text: "ეს გამოცდილება ლუკას სამუდამოდ დაამახსოვრდა და ყოველთვის ეცდებოდა, სიკეთე გაევრცელებინა,", correct: true, position: 3 },
                { text: "All conflict is negative.", correct: false },
                { text: "რადგან სწორედ ეს ხდიდა მას და მის ირგვლივ ყველას ბედნიერად.", correct: true, position: 4 },
                { text: "Peace is too complicated.", correct: false },
            ]
        ]
    },
    nature: {
        title: "Nature",
        image: "nature.jpg",
        steps: [
            [
                { text: "Nature is the greatest artist.", correct: true, position: 0 },
                { text: "Pollution is a myth.", correct: false },
                { text: "The forest is a peaceful sanctuary.", correct: true, position: 1 },
                { text: "Nature doesn't need our help.", correct: false },
                { text: "Every tree tells a story.", correct: true, position: 2 },
                { text: "Animals cannot feel pain.", correct: false },
                { text: "Biodiversity is essential for a healthy planet.", correct: true, position: 3 },
                { text: "We should ignore environmental issues.", correct: false },
                { text: "Nature provides everything we need.", correct: true, position: 4 },
                { text: "Climate change is not a concern.", correct: false },
            ],
            [
                { text: "Fresh air rejuvenates the spirit.", correct: true, position: 0 },
                { text: "The ocean is just water.", correct: false },
                { text: "Nature heals us mentally and physically.", correct: true, position: 1 },
                { text: "Urban life is better than nature.", correct: false },
                { text: "Sunlight is essential for life.", correct: true, position: 2 },
                { text: "Nature should be controlled.", correct: false },
                { text: "Wildlife must be protected.", correct: true, position: 3 },
                { text: "Nature is overrated.", correct: false },
                { text: "Every species has a role in the ecosystem.", correct: true, position: 4 },
                { text: "Conservation is unnecessary.", correct: false },
            ],
            [
                { text: "Respecting nature is a responsibility.", correct: true, position: 0 },
                { text: "Nature's beauty is fleeting.", correct: false },
                { text: "Trees produce oxygen for us.", correct: true, position: 1 },
                { text: "Nature doesn't need protection.", correct: false },
                { text: "Recycling is essential.", correct: true, position: 2 },
                { text: "Every animal has a right to exist.", correct: true, position: 3 },
                { text: "The earth is our home and should be cared for.", correct: true, position: 4 },
                { text: "Natural disasters are not related to human activity.", correct: false },
                { text: "Harmony with nature leads to happiness.", correct: true, position: 5 },
                { text: "The environment can be sacrificed for progress.", correct: false },
            ]
        ]
    },
    adventure: {
        title: "Adventure",
        image: "adventure.jpg",
        steps: [
            [
                { text: "Adventure is out there waiting for you.", correct: true, position: 0 },
                { text: "Staying in one place is more exciting.", correct: false },
                { text: "Exploration leads to personal growth.", correct: true, position: 1 },
                { text: "Fear of the unknown is a weakness.", correct: false },
                { text: "Every journey tells a story.", correct: true, position: 2 },
                { text: "Adventure can be dangerous.", correct: true, position: 3 },
                { text: "The best memories come from comfort zones.", correct: false },
                { text: "Daring to dream is the first step.", correct: true, position: 4 },
                { text: "Every adventure is a risk.", correct: false },
                { text: "Life is meant to be an adventure.", correct: true, position: 5 },
            ],
            [
                { text: "Discovering new places expands horizons.", correct: true, position: 0 },
                { text: "Comfort zones are where we grow.", correct: false },
                { text: "Adventure teaches resilience.", correct: true, position: 1 },
                { text: "Avoiding challenges leads to success.", correct: false },
                { text: "The thrill of adventure is unmatched.", correct: true, position: 2 },
                { text: "Every journey is without challenges.", correct: false },
                { text: "Adventure is for the reckless.", correct: false },
                { text: "Creating memories is what matters.", correct: true, position: 3 },
                { text: "Adventure should be feared.", correct: false },
                { text: "Learning about different cultures is enriching.", correct: true, position: 4 },
            ],
            [
                { text: "The world is full of adventures waiting to be discovered.", correct: true, position: 0 },
                { text: "Staying at home is always better.", correct: false },
                { text: "Adventure can change perspectives.", correct: true, position: 1 },
                { text: "Challenges should be avoided.", correct: false },
                { text: "Each step can lead to new discoveries.", correct: true, position: 2 },
                { text: "Life without adventure is dull.", correct: true, position: 3 },
                { text: "Embracing the unexpected is part of adventure.", correct: true, position: 4 },
                { text: "Adventure should be left to the young.", correct: false },
                { text: "Every person can have an adventure.", correct: true, position: 5 },
                { text: "Adventure requires a lot of planning.", correct: false },
            ]
        ]
    },
};

let currentTheme = null;
let currentStep = 0;

const selectedSentences = [
    Array(5).fill(null),  // For step 1
    Array(5).fill(null),  // For step 2
    Array(5).fill(null)   // For step 3
];

function startTheme(themeKey) {
    currentTheme = themes[themeKey];
    currentStep = 0;
    // Reset selected sentences
    for (let i = 0; i < selectedSentences.length; i++) {
        selectedSentences[i].fill(null);
    }
    document.getElementById('theme-title').innerText = currentTheme.title;
    document.getElementById('theme-image').src = currentTheme.image;
    document.getElementById('theme-page').style.display = 'block';
    document.getElementById('theme-selection').style.display = 'none';
    displaySentences(); // Call the function to display sentences for the first step
    document.getElementById('step-image').style.display = 'block';
}

function displaySentences() {
    const sentenceSelection = document.getElementById('sentence-selection');
    sentenceSelection.innerHTML = ''; // Clear previous sentences

    const sentences = currentTheme.steps[currentStep];
    // Prepare an array for sentence display
    let displaySentences = [];

    // Add the first two sentences to the display array
    displaySentences.push(sentences[0], sentences[1]);

    // Add the next sentences (index 2 to 9) one by one to the display array
    for (let i = 2; i < sentences.length; i++) {
        displaySentences.push(sentences[i]);
    }

    // Create buttons for the sentences based on the desired layout
    displaySentences.forEach((sentence, index) => {
        const button = document.createElement('button');
        button.innerText = sentence.text;
        button.onclick = () => selectSentence(sentence);
        sentenceSelection.appendChild(button);
    });

    updateSelectedSentencesDisplay(); // Update selected sentences display

    // Hide the Next button initially
    document.getElementById('next').style.display = 'none';
}


function selectSentence(sentence) {
    if (sentence.correct && sentence.position !== undefined) {
        selectedSentences[currentStep][sentence.position] = sentence.text; // Place the sentence in the correct position
        updateSelectedSentencesDisplay();

        // Check if all positions in the current step are filled
        if (selectedSentences[currentStep].every(text => text !== null)) {
            document.getElementById('next').style.display = 'block'; // Show the Next button if all positions are filled
        }
    }
}

function updateSelectedSentencesDisplay() {
    const selectedSentenceDiv = document.getElementById('selected-sentences');
    selectedSentenceDiv.innerHTML = ''; // Clear previous selections

    // Display selected sentences based on the current step
    for (let stepIndex = 0; stepIndex <= currentStep; stepIndex++) {
        const stepSentences = selectedSentences[stepIndex];

        stepSentences.forEach(text => {
            if (text) {
                selectedSentenceDiv.innerHTML += `${text} `; // Display selected text
            } else {
                selectedSentenceDiv.innerHTML += `_____________ `; // Add a blank space for unselected positions
            }
        });
        selectedSentenceDiv.innerHTML += '<br>'; // Line break between steps
    }
}



function nextStep() {
    if (currentStep < 2) {
        currentStep++;
        displaySentences(); // Load new sentences for the next step
    } else {
        displayFinalResults(); // Show final results after all steps
    }
    
}

function displayFinalResults() {
    const resultsPage = document.createElement('div');
    
    // Set final title based on the current theme
    resultsPage.innerHTML = `<h2 style="text-align: center;">${finalTitles[currentTheme.title.toLowerCase()]}</h2>`;

    selectedSentences.forEach((stepSentences, index) => {

        // Create a sentence container for the sentences in this step
        resultsPage.innerHTML += `<div class="sentence-container">`;

        // Display each sentence in the same row
        stepSentences.forEach(sentence => {
            if (sentence) {
                // Add each sentence inside the sentence-container
                resultsPage.innerHTML += `<span style="font-weight: bold;" class="sentence">${sentence}</span>`;
            }
        });

        resultsPage.innerHTML += `</div>`; // Close sentence-container
        resultsPage.innerHTML += `<br/>`; // Add a line break after each step
    });

    document.body.innerHTML = resultsPage.outerHTML; // Replace body content with results
}
