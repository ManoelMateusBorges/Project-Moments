import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Moments } from "../../../../model/moments";


@Component({
	selector: 'app-moments-add',
	templateUrl: 'moments-add.component.html',
	styleUrls: ['moments-add.component.scss']
})

export class MomentsAddComponent implements OnInit {

	@Output() onSubmit = new EventEmitter<Moments>();
	formMoments: any;
	acceptImg = 'image/*';

	constructor(private formBuider: FormBuilder) { }


	ngOnInit(): void {
		this.formMoments = this.formBuider.group({
			id: [''],
			title: ['', Validators.required],
			description: ['', Validators.required],
			image: ['', Validators.required],
		})
	}


	formValidator(title: string, form: any){

		let formSubmited = form.submitted;
		let formHasError = this.formMoments.get(title).hasError('required');
		
		if(formHasError && formSubmited){
			return true;
		}
		
		return false;
	}


	onFileSelected(event: any){

		const file: File = event.target.files[0];
		
		this.formMoments.patchValue({image: file});
	}


	submit(){

		let formMomentsIsValid =  this.formMoments.valid

		if(formMomentsIsValid){
			this.onSubmit.emit(this.formMoments.value);
		}

	}
}