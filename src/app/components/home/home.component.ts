import { Component, OnInit } from "@angular/core";
import { MomentsService } from "../../service/moments.service"
import { Moments } from "src/app/model/moments";
import { environment } from "src/environments/environment";


@Component({
	selector: 'app-home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {

	apiUrl = environment.baseApiUrl;
	
	 moments: Moments[] = [];

	constructor(private momentsService: MomentsService) { }

	ngOnInit() {
		this.momentsService.getMoments().subscribe((moments) => {
			
			const data = moments.data;

			data.map((item) => {
				item.created_at = new Date(item.created_at).toLocaleDateString("pt-br");
			})

			this.moments = data;
			
		})
	}

}