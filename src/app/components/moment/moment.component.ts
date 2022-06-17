import { Component, OnInit } from "@angular/core";
import { MomentsService } from "../../service/moments.service";
import { Moments } from "../../model/moments";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-moment',
	templateUrl: 'moment.component.html',
	styleUrls: ['moment.component.scss']
})

export class MomentComponent implements OnInit{

	moment!: Moments;

	constructor(
		private MomentsService: MomentsService,
		private router: Router,
		private activatedRoute: ActivatedRoute
		) {}

	ngOnInit(): void{
		const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

		this.MomentsService.getMoment(id).subscribe((item) => this.moment = item.data);

		
	}
}