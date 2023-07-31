// Crie a variável canvas

//Defina as posições iniciais das imagens da bola e do buraco.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// programe o envio da imagem do buraco de golfe ao canvas
	new_image();
}

function new_image()
{
	// programe o envio da imagem da bola ao canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique as coordenadas da bola e do buraco para concluir o jogo.
	Identifique as coordenadas, caso forem iguais, remova  a imagem da bola,
	exiba "Você acertou o buraco!!"
	e troque a cor da borda do canvas para vermelho (red). */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		// Programe o movimento da bola para cima.
	}

	function down()
	{
		 // Programe o movimento da bola para baixo.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Programe o movimento da bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Programe o movimento da bola para a direita.
		}
	}
	
}
