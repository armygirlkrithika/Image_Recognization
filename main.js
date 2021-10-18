
Webcam.set({
    width : 350,
    height : 300,
    image_format : "jpg",
    jpg_quality : 120

})

camera = document.getElementById("camera")
Webcam.attach('camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "output" src = "'+data_uri+'"/>'
    })
}

console.log("version of ml5  = ", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x4H4r_wEE/model.json", modelLoaded)

function modelLoaded(){
    console.log("model is loaded")
}


function identifySnapshot (){
    img = document.getElementById("output");
    classifier.classify(img,gotResult)
}

function gotResult(error,result) {
     if (error) {
         console.error(error)
             }

    else {
        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
        document.getElementById("object_accuracy").innerHTML  = result[0].confidence.toFixed(3)
    }
}
