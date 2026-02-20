// FILE: script.js

// complete the TODO comments

// Get references to page elements
const button = document.getElementById("makeSmoothie");
const outputDiv = document.getElementById("output");

// Helper function to display messages on the page
function showMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;
  outputDiv.appendChild(p);
}

// Helper function that returns a Promise that resolves after a delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* =========================
   PART 1 — PROMISE FUNCTIONS
========================= */

// Step 1: Get ingredients
function getIngredients() {
  // TODO: 
  // 1. Show message: "Gathering ingredients..."
  // 2. Wait 2 seconds using wait()
  // 3. Resolve with "Ingredients ready"

  return new Promise((resolve, reject) => {
    // Your code here

    showMessage("Gathering ingredients...");

    //doc stmt: https://stackoverflow.com/questions/66934373/how-then-method-actually-works-in-javascript for then logic
    wait(2000).then(() => {

      showMessage("Ingredients ready");
      resolve("Ingredients ready");

    }).catch(reject);

  });
}

// Step 2: Blend smoothie
function blendSmoothie() {
  // TODO:
  // 1. Show message: "Blending smoothie..."
  // 2. Wait 3 seconds
  // 3. Sometimes FAIL (see assignment instructions)
  // 4. Otherwise resolve with "Smoothie blended"

  return new Promise((resolve, reject) => {
    // Your code here

    showMessage("Blending smoothie...");

    wait(3000).then(() => {

      //doc stmt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random for gambling
      if(Math.random() < .333){

        reject("KABOOOM");

      }
      else{

        showMessage("Smoothie blended");
        resolve("Smoothie blended");

      }

    }).catch(reject);

  });
}

// Step 3: Pour smoothie
function pourSmoothie() {
  // TODO:
  // 1. Show message: "Pouring into cup..."
  // 2. Wait 1 second
  // 3. Resolve with "Smoothie is ready!"

  return new Promise((resolve, reject) => {
    // Your code here

    showMessage("Pouring into cup...");

    wait(1000).then(() => {

      showMessage("Smoothie is ready!");
      resolve("Smoothie is ready!");

    }).catch(reject);

  });
}

/* =========================
   PART 2 — PROMISE CHAIN VERSION
========================= */

function makeSmoothieWithPromises() {
  outputDiv.innerHTML = ""; // Clear previous messages

  // TODO: Chain the steps in order using .then()
  //doc stmt: https://stackoverflow.com/questions/33469962/javascript-chaining-promises-calling-next-promise-before-previous-has-finished fixed my overlap problem by removing ()
  getIngredients()
  .then(blendSmoothie)
  .then(pourSmoothie)
  .catch(reject => { showMessage(reject)});
}

/* =========================
   PART 3 — ASYNC/AWAIT VERSION
========================= */

async function makeSmoothieAsync() {
  outputDiv.innerHTML = ""; // Clear previous messages

  // TODO:
  // Use try/catch
  // await getIngredients()
  // await blendSmoothie()
  // await pourSmoothie()
  // Show final success message
  // Catch and display any errors
}
