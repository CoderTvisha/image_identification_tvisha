function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
    
}

function setup() {
    canvas = createCanvas(320, 320);
 canvas.center();
 background("white");
 canvas.mouseReleased(classifyCanvas);
 synth = window.speechSynthesis;
}

function clearCanvas(){
    background("white");
}

function draw(){
   strokeWeight(5);
   x = 'red';
    stroke(x);   
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

}

function blue_stroke(){
    x = 'blue';
    stroke(x);
    }

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
 document.getElementById("label").innerHTML= "label:" + results[0].label;
 document.getElementById("confidence").innerHTML= "confidence" + Math.round(results[0].confidence * 100) + "%";

 utterThis = new SpeechSynthesisUtterance(results[0].label);
 synth.speak(utterThis);
}

}


