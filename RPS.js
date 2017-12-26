(function(){
	$(document).ready(init);
	var computerImg = document.createElement("img");
	var playerImg = document.createElement("img");
	var verdict = document.createElement("h1");

function init(){
	$('#rock').on('click', rock);
	$('#paper').on('click', paper);
	$('#scissors').on('click', scissors);
}

function rock(){
	var randomNumber = Math.floor(Math.random() * ((3-1)+1) + 1);
	var chocie;
	if(randomNumber === 1){
		chocie = "rock";
	}else if(randomNumber === 2){
		chocie = "paper";
	}else{
		chocie = "scissors";
	}
	$('#chocie').hide();
	$(playerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/rock.jpg');
	if(chocie === "rock"){
		$(computerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/rock.jpg');
		verdict.textContent = "TIE";
		$('#player').append(playerImg);
		$('#computer').append(computerImg);
		$('#verdict').append(verdict);
		setInterval(function(){
			$('#chocie').show();
		}, 2500);
		init();
	}else if(chocie === "paper"){
		$(computerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/paper.jpg');
		verdict.textContent = "YOU LOOSE";
		$('#player').append(playerImg);
		$('#computer').append(computerImg);
		$('#verdict').append(verdict);
		setInterval(function(){
			$('#chocie').show();
		}, 2500);
		init();
	}else{
		$(computerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/scissors.jpg');
		verdict.textContent = "YOU WIN";
		$('#player').append(playerImg);
		$('#computer').append(computerImg);
		$('#verdict').append(verdict);
		setInterval(function(){
			$('#chocie').show();
		}, 2500);
		init();
	}
}

function paper(){
	var randomNumber = Math.floor(Math.random() * ((3-1)+1) + 1);
	var chocie;
	if(randomNumber === 1){
		chocie = "rock";
	}else if(randomNumber === 2){
		chocie = "paper";
	}else{
		chocie = "scissors";
	}
	$('#chocie').hide();
	$(playerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/paper.jpg');
	if(chocie === "rock"){
		$(computerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/rock.jpg');
		verdict.textContent = "YOU WIN";
		$('#player').append(playerImg);
		$('#computer').append(computerImg);
		$('#verdict').append(verdict);
		setInterval(function(){
			$('#chocie').show();
		}, 2500);
		init();
	}else if(chocie === "paper"){
		$(computerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/paper.jpg');
		verdict.textContent = "TIE";
		$('#player').append(playerImg);
		$('#computer').append(computerImg);
		$('#verdict').append(verdict);
		setInterval(function(){
			$('#chocie').show();
		}, 2500);
		init();
	}else{
		$(computerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/scissors.jpg');
		verdict.textContent = "YOU LOOSE";
		$('#player').append(playerImg);
		$('#computer').append(computerImg);
		$('#verdict').append(verdict);
		setInterval(function(){
			$('#chocie').show();
		}, 2500);
		init();
	}
}

function scissors(){
	var randomNumber = Math.floor(Math.random() * ((3-1)+1) + 1);
	var chocie;
	if(randomNumber === 1){
		chocie = "rock";
	}else if(randomNumber === 2){
		chocie = "paper";
	}else{
		chocie = "scissors";
	}
	$('#chocie').hide();
	$(playerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/scissors.jpg');
	if(chocie === "rock"){
		$(computerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/rock.jpg');
		verdict.textContent = "YOU LOOSE";
		$('#player').append(playerImg);
		$('#computer').append(computerImg);
		$('#verdict').append(verdict);
		setInterval(function(){
			$('#chocie').show();
		}, 2500);
		init();
	}else if(chocie === "paper"){
		$(computerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/paper.jpg');
		verdict.textContent = "YOU WIN";
		$('#player').append(playerImg);
		$('#computer').append(computerImg);
		$('#verdict').append(verdict);
		setInterval(function(){
			$('#chocie').show();
		}, 2500);
		init();
	}else{
		$(computerImg).attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/scissors.jpg');
		verdict.textContent = "TIE";
		$('#player').append(playerImg);
		$('#computer').append(computerImg);
		$('#verdict').append(verdict);
		setInterval(function(){
			$('#chocie').show();
		}, 2500);
		init();
	}
}
})();