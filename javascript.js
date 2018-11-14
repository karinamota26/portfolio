var imgatual = 0;
var div_img;
var imagens = ["igarape.jpg", "sinergia.png", "dig.png", "EfeitoFelicia.jpg"]
function passar(){
	if(imgatual >= 0 && imgatual < imagens.length - 1){
	imgatual++;
	div_img.src = imagens[imgatual];
	console.log(imgatual);
	}
}
function voltar(){
	if(imgatual > 0){
	imgatual--;
	div_img.src = imagens[imgatual];
	console.log(imgatual);
	}
}
window.onload = function(){
	div_img = document.getElementById("imgslider");
}