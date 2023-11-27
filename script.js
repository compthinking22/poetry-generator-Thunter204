var result;
var words = {
    'n': "",
    'v': "",
    'a': "",
    'r': "",
}
function preload() {
    result = loadStrings('YOURTEXTFILEHERE.txt');
}

function setup() {
    const initialValue = "";
    const fullString = result.reduce(
      (accumulator, currentValue) => accumulator + " " + currentValue,
      initialValue,
    );
    RiTa.tokenize(fullString).forEach((element) => {
        var pos = RiTa.pos(element, {simple: true});
        // console.log(element + " " + pos);

        if ((pos == 'n') || (pos == 'v') || (pos == 'a') || pos =='r') {
            words[pos] += " | " + element;
        }
       
    });
  }

  function draw() {
    
  }