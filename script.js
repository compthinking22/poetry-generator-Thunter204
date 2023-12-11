//Toni Hunter

/*This code basically breaks the words in the corpus down using Rita, analyzes the text to see if 
it's a noun, verb, adjective, r? and then stores it in the words dictionary*/
/*seperate text file for titles, ingredients. var words shoul dbe changed to two dictionaries --> title dict and ingredient dict.*/
var result;
var grammar;


var grammarDict = {
  "start": "$n $fir $p $sec\n\n $num $a $fir\n $num $a $sec\n $num $a $r\n $num $a $r\n $num $a $r\n $num $a $r\n", //title, recipe
  "p": "with | with a side of ",
  "num": "1 | 2 | 3 | 4",
  "#fir":"$v",
  "#sec":"$r" //Gets repeated in title and once in the recipe
};

var words = {
  'n': "", //titles
  'v': "", 
  'a': "", //Measurements
  'r': "" //ingredients
};

function preload() {
  result = loadStrings('TITLES.txt');
  resultTwo = loadStrings('INGREDIENTS.txt');
  resultThree = loadStrings('MEASURMENTS.txt');
  resultFour = loadStrings('Mingre.txt');

}

function setup() {
  createCanvas(1920, 923); //size of my screen
  noLoop(); // Stop the draw loop after the first iteration

  const fullString = result.join("\n");
  const fullERString = resultTwo.join("\n");
  const fullESTString = resultThree.join("\n");
  const fullFString = resultFour.join("\n");

  /*-------------------------------TITLES------------------------------------------------ */

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

  /*-----------------------------INGREDIENTS----------------------------------------------- */
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

  /*------------------------------MEASURMENTS------------------------------------------------ */

  fullESTString.split('\n').forEach((line) => {
    const lineWords = [];
    RiTa.tokenize(line).forEach((element) => {
      var pos = RiTa.pos(element, { simple: true });
      if ((pos == 'n') || (pos == 'v') || (pos == 'a') || pos == 'r') {
        lineWords.push(element);
      }
    });
    words['a'] += " | " + lineWords.join(" ");
  });

  grammarDict['a'] = words['a'];
  grammar = RiTa.grammar(grammarDict);

  fullFString.split('\n').forEach((line) => { 
    const lineWords = [];
    RiTa.tokenize(line).forEach((element) => {
      var pos = RiTa.pos(element, { simple: true });
      if ((pos == 'n') || (pos == 'v') || (pos == 'a') || pos == 'r') {
        lineWords.push(element);
      }
    });
    words['v'] += " | " + lineWords.join(" ");
  });

  grammarDict['v'] = words['v'];
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
  textSize(58);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  var expandedGrammar = grammar.expand();
  text(expandedGrammar, width / 2, 10 );
  console.log(expandedGrammar);
}