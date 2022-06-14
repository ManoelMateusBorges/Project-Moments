import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})

export class MessageService {
	
	infoMessage: string = "";

	addMessage(msg: string){
		this.infoMessage = msg;

		setTimeout(() => { 
				this.clearMessage();
		  }, 4000);		
	}

	clearMessage(){
		this.infoMessage = "";
	}
}