import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root'
})

export class MomentsService {

	private baseApiUrl = environment.baseApiUrl;
	private apiUrl = `${this.baseApiUrl}api/moments`

	constructor(private http: HttpClient) { }

	
	createMoments(formData: FormData): Observable<FormData>{
		return this.http.post<FormData>(this.apiUrl, formData)
	}
}