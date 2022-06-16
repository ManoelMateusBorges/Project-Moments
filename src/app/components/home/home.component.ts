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

	allMoments: Moments[] = []
	moments: Moments[] = [];

	constructor(private momentsService: MomentsService) { }

	async ngOnInit() {
		this.momentsService.getMoments().subscribe((moments) => {

			const data = moments.data;

			data.map((item) => {
				item.created_at = new Date(item.created_at).toLocaleDateString("pt-br");
			})

			this.moments = data;
			this.allMoments = data;

		})
	}

	pesquisaMoment(e: Event): void {
		const target = e.target as HTMLInputElement;
		const value = target.value;
		
		this.moments = this.allMoments.filter((moment) => {
			return moment.title.toLowerCase().includes(value)
		})
		
	}

}