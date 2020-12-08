
// Grabing required html tags
var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var output =  document.querySelector("#output");

// storing server api 
var url = "";


// Method which will add user input along with server api call
function getTranslatedUrl(txtMessage){
    return url+"?"+"text="+txtMessage;
}


// Method to handle unexpected fault
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server, Try again after some time... ")
}

// Method to Handle click event
function clickHandler() {
    var inputText = textInput.value; // Taking user input
    
    // calling server for processing using fetch() api
    fetch(getTranslatedUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText; 
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);
