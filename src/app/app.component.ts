import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	userScore = 0;
	compScore = 0;
	userSelected: string;
	compSelected: string;
	action: string;
	status: string;
	isplayerOne: boolean = false;
	isplayerTwo: boolean = false;
	compWeapons = [
		'rock',
		'paper',
		'scissors'
	];

	/*Dikarenakan waktu saya dibagi dengan menunggu ibu saya yang sedang sakit, saya hanya dapat menyelesaikan 
	mini project ini untuk 1 pemain vs computer (random value). Semoga masih dapat menjadi bahan pertimbangan*/

	userPick(userWeapon: string): void {
		this.userSelected = userWeapon;
		setTimeout( () => {
		const randomNum = Math.floor(Math.random() * 3);
		this.compSelected = this.compWeapons[randomNum];
		this.checkResult();
		}, 1000);
	}

	clearField() {
		setTimeout(() => {
			this.status = '';
			this.userSelected = '';
			this.compSelected = '';
		}, 1500);
	}

	win(user, comp) {
		this.userScore ++;
		this.userSelected = user;
		this.compSelected = comp;
		this.action = 'beats';
		this.status = '. You win!';
		this.clearField();
	}


	lose(user, comp) {
		this.compScore ++;
		this.userSelected = user;
		this.compSelected = comp;
		this.action = 'loses to';
		this.status = '. You lose!';
		this.clearField();
	}

	draw(user, comp) {
		this.userSelected = user;
		this.compSelected = comp;
		this.action = 'and';
		this.status = '. You draw!';
		this.clearField();
	}

	checkResult() {
		const userChoice = this.userSelected;
		const compChoice = this.compSelected;
		switch (userChoice + compChoice) {
			case 'rockscissors':
			case 'paperrock':
			case 'scissorspaper':
				this.win(userChoice, compChoice);
				break;
			case 'rockpaper':
			case 'scissorsrock':
			case 'paperscissors':
				this.lose(userChoice, compChoice);
				break;
			default:
				this.draw(userChoice, compChoice);
				break;
		}
	}

	btnPlayerOne(){
		this.isplayerOne = true;
	}

	btnPlayerTwo(){
		this.isplayerTwo= true;
	}

}
