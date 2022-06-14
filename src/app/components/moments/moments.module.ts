import { CommonModule } from '@angular/common';
import { MomentsComponent } from './moments.component';
import { NgModule } from "@angular/core";
import { MomentsAddComponent } from "./components/moments-add/moments-add.component"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from "../messages/message.component"

@NgModule({
	declarations: [
		MomentsComponent,
		MomentsAddComponent,
		MessageComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
	],
	exports: [MomentsComponent]
})

export class MomentsModule {
	
}