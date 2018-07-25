var ip = document.getElementById('inputText');
var sbtn = document.getElementById('btn-speak');
var sjs = new speakjs('es');



sbtn.addEventListener('click',function(e){
	sjs.textToVoice(ip.value);
});