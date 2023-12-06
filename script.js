//Toni Hunter

/*This code basically breaks the words in the corpus down using Rita, analyzes the text to see if 
it's a noun, verb, adjective, r? and then stores it in the words dictionary*/
/*for my project, I want to create a a recipe title, an ingredient list, and then (maybe) dicrections 
  for the recipe.*/
/*seperate text file for titles, ingredients. var words shoul dbe changed to two dictionaries --> title dict and ingredient dict.*/
var result;
var grammar;

var grammarDict = {
  "start": "$n $v $p $r",
  "v": "Chicken | Garlic Chicken | Fried Chicken | Chili | Pulled Pork | Beef Stew | boneless chicken thighs",
  "p": "with | with a side of "
};

var words = {
  'n': "",
  'v': "",
  'a': "",
  'r': "",
};

function preload() {
  result = loadStrings('TITLES.txt');
  resultTwo = loadStrings('INGREDIENTS.txt');
}

function setup() {
  createCanvas(400, 200);
  noLoop(); // Stop the draw loop after the first iteration

  const fullString = result.join("\n");
  const fullERString = resultTwo.join("\n");

  fullString.split('\n').forEach((line) => {
    const lineWords = [];
    RiTa.tokenize(line).forEach((element) => {
      var pos = RiTa.pos(element, { simple: true });
      if ((pos == 'n') || (pos == 'v') || (pos == 'a') || pos == 'r') {
        lineWords.push(element);
      }
    });
    words['n'] += " | " + lineWords.join(" ");
  });

  grammarDict['n'] = words['n'];
  grammar = RiTa.grammar(grammarDict);

  fullERString.split('\n').forEach((line) => {
    const lineWords = [];
    RiTa.tokenize(line).forEach((element) => {
      var pos = RiTa.pos(element, { simple: true });
      if ((pos == 'n') || (pos == 'v') || (pos == 'a') || pos == 'r') {
        lineWords.push(element);
      }
    });
    words['r'] += " | " + lineWords.join(" ");
  });

  grammarDict['r'] = words['r'];
  grammar = RiTa.grammar(grammarDict);

  // Call drawResult to display the result once
  drawResult();
}

function draw() {
  // This function intentionally left blank
}

function drawResult() {
  background(255);
  fill(0);
  textSize(16);
  var expandedGrammar = grammar.expand();
  text(expandedGrammar, 10, 30);
  console.log(expandedGrammar); // Optional: Print to console
}
// var result;
// var grammar;
// var grammarDict = {
//   //start: "$TITLE\n $INGREDIENTS" 
//   //TITLE: "$n $meat $r"
//   //INGREDIENTS: "$beep $meat $bop"
//   //#meat: "chicken | beef  | garlic chicken" --> if there is a hash(#) in front, this word will be used in muitple sentences
//   //#meat: "chicken(2) | beef | garlic chicken" -> 
//   "start": "$n $v $p $r",
//   "v":"Chicken | Garlic Chicken | Fried Chicken | Chili | Pulled Pork | Beef Stew | boneless chicken thighs",
//   "p" :"with | with a side of " 
// }

// //basic dictionary that has stored words from text file
// var words = {
//     'n': "",
//     'v': "",
//     'a': "",
//     'r': "",
// }
// function preload() {
//     result = loadStrings('TITLES.txt');
//     resultTwo = loadStrings('INGREDIENTS.txt');
// }

// //

// function setup() {
//   // Join the array of lines into a single string
//   const fullString = result.join("\n");
//   const fullERString = resultTwo.join("\n");

  

//   // Tokenize each word within a line
//   fullString.split('\n').forEach((line) => {
//     const lineWords = []; // Separate array for words within a line
//     RiTa.tokenize(line).forEach((element) => {
//       var pos = RiTa.pos(element, { simple: true });
//       if ((pos == 'n') || (pos == 'v') || (pos == 'a') || pos == 'r') {
//         lineWords.push(element); // Add words to the line-specific array
//       }
//     });
//     words['n'] += " | " + lineWords.join(" "); // Join the line-specific words and add to 'n'
//   });

//   grammarDict['n'] = words['n'];
//   grammar = RiTa.grammar(grammarDict);  // Create RiTa grammar object

//    // Tokenize each word within a line
//    fullERString.split('\n').forEach((line) => {
//     const lineWords = []; // Separate array for words within a line
//     RiTa.tokenize(line).forEach((element) => {
//       var pos = RiTa.pos(element, { simple: true });
//       if ((pos == 'n') || (pos == 'v') || (pos == 'a') || pos == 'r') {
//         lineWords.push(element); // Add words to the line-specific array
//       }
//     });
//     words['r'] += " | " + lineWords.join(" "); // Join the line-specific words and add to 'n'
//   });
  
//   grammarDict['r'] = words['r'];
//   grammar = RiTa.grammar(grammarDict);  // Create RiTa grammar object
//   console.log(grammar.expand());
// }

//   function draw() {
//     background(255);
  
//     // Expand the grammar and draw the result on the canvas
//     fill(0);
//     textSize(16);
//     var expandedGrammar = grammar.expand();
//     text(expandedGrammar, 10, 30);
//     console.log(expandedGrammar); // Optional: Print to console

//   }