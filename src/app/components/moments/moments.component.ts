import { Component } from "@angular/core";
import { MomentsService } from "../../service/moments.service";
import { MessageService } from "../../service/message.service"
import { Router } from "@angular/router";

@Component({
	selector: 'app-moments',
	templateUrl: 'moments.component.html',
	styleUrls: ['moments.component.scss']
})

export class MomentsComponent {

	constructor(
		private http: MomentsService,
		private messageService: MessageService,
		private router: Router
		){ }

	sendMomentsDataHttp(event: any){
		
		const form = new FormData();
		form.append('title', event.title);
		form.append('description', event.description)
		form.append('image', event.image);
		
		this.http.createMoments(form).subscribe();
		
		this.messageService.addMessage('enviada !!!!');

		// this.router.navigate(['/'])
	}
	
}