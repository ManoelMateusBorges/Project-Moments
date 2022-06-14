import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Component } from "@angular/core";
import { MessageService } from "src/app/service/message.service";

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})

export class MessageComponent {

	constructor(public message: MessageService) { }

}