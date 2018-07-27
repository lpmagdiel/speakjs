/*   speakjs 1.0|| created by: Magdiel Lopez Morales.  */
var synth = window.speechSynthesis;
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
function speakjs(lang) {
	var commands = [];
	var vtt; // funcion del usuario 
	var language = lang;
	if(language == undefined || language == null){
		language = 'es';
	}


  function _Speech(opc) {
  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  var grammar = '#JSGF V1.0; grammar phrase;';
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.lang = language;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.start();

  recognition.onresult = function(event) {
    var speechResult = event.results[0][0].transcript;
    if(opc == 1){
	    speechResult = speechResult.toLowerCase();
	    for(var i in commands){
	    	if(speechResult == commands[i].text){
	    		commands[i].fun();
	    		return(true);
	    	}
	    }
	    return(false);
	}
	else{
		vtt(speechResult);
	}
  }

  recognition.onspeechend = function() {
    recognition.stop();
  }

  recognition.onerror = function(event) {
    console.log("error: "+event);
  }
  
  recognition.onaudiostart = function(event) {
  }
  
  recognition.onaudioend = function(event) {
  }
  
  recognition.onend = function(event) {
  }
  
  recognition.onnomatch = function(event) {
  }
  
  recognition.onsoundstart = function(event) {
  }
  
  recognition.onsoundend = function(event) {
  }
  
  recognition.onspeechstart = function (event) {
  }
  recognition.onstart = function(event) {
  }
}
	return{
		voiceToText : function(fn){
			if(fn == null || fn == undefined){
				console.log('no se asigno una funcion');
				return(false);
			}
			vtt = fn;
			_Speech(2);
		},
		textToVoice : function(text){
			var exist = false;
			if(text != undefined || text != null){
				exist = true;
				window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
			}
			return(exist);
		},
		command : function(t,ev){
			commands.push({text:t,fun:ev});
		},
		listen : function(){
			_Speech(1);
		}
	}
}