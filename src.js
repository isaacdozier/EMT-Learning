// Define an array of root word objects
var rootWords

  // Replace 'your-json-file.json' with the path to your JSON file
const jsonFileUrl = 'roots.json';

fetch(jsonFileUrl)
  .then(response => response.json())
  .then(data => {
    // Here, 'data' will contain the parsed JSON content
    rootWords = data
    console.log(data)
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  // Reference to the meaning text element
  var meaningText = document.getElementById("meaning");
  var resultText = document.getElementById("result");
  
  // Get references to the button elements
  var button1 = document.getElementById("answer_1");
  var button2 = document.getElementById("answer_2");
  var button3 = document.getElementById("answer_3");

  var randomMeaningIndex, randomMeaning

function generate(){
    // Randomly select 3 unique root word indices
    var randomIndices = [];
    while (randomIndices.length < 3) {
        var randomIndex = Math.floor(Math.random() * rootWords.length);
        if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
        }
    }
    
    // Set values for the buttons based on the selected random indices
    button1.textContent = rootWords[randomIndices[0]].root;
    button2.textContent = rootWords[randomIndices[1]].root;
    button3.textContent = rootWords[randomIndices[2]].root;
    
    button1.value = 0; // Set the index directly
    button2.value = 1; // Set the index directly
    button3.value = 2; // Set the index directly
    
    // Randomly choose one of the meanings and display it as text
    randomIndex = Math.floor(Math.random() * 3);
    
    // Display the random meaning as text
    meaningText.textContent = rootWords[randomIndices[randomIndex]].meaning;
    
    // Add click event listeners to the buttons
    button1.addEventListener("click", function () {
        checkAnswer(button1.value);
    });
    
    button2.addEventListener("click", function () {
        checkAnswer(button2.value);
    });
    
    button3.addEventListener("click", function () {
        checkAnswer(button3.value);
    });
}
  
  
  
// Function to check the user's answer
function checkAnswer(userAnswer) {
    console.log(Number(userAnswer) + " - " + randomIndex)

    // Check if the user's answer matches any of the randomly selected indices
    if (Number(userAnswer) === randomIndex) {
        resultText.innerHTML = "Success";
        generate()
    } else {
        resultText.innerHTML = "Incorrect";
    }
}

generate()
  