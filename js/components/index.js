var sound=document.querySelector(".music");
var flag=true;
var music=document.querySelector("audio");
sound.onclick=function(){
	if(flag){
		music.pause();
		sound.style.background="url(img/musicoff.gif) no-repeat";
	}else{
		music.play();
		sound.style.background="url(img/musicon.gif) no-repeat";
	}
	flag=!flag;
}
