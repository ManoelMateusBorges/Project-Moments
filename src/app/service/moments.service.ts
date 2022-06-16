import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Moments } from "../model/moments";
import { Response } from "../model/response";

@Injectable({
	providedIn: 'root'
})

export class MomentsService {

	private baseApiUrl = environment.baseApiUrl;
	private apiUrl = `${this.baseApiUrl}api/moments`

	constructor(private http: HttpClient) { }


	getMoments(): Observable<Response<Moments[]>> {
		return this.http.get<Response<Moments[]>>(this.apiUrl);
	}

	
	createMoments(formData: FormData): Observable<FormData>{
		return this.http.post<FormData>(this.apiUrl, formData)
	}
}