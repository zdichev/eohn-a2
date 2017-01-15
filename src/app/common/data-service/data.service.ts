import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getPageData(pageName: string): Observable<any> {
    return this.http
      .get(environment.baseApiUrl + pageName)
      .map((res: Response) => {

        return res.json();
      });

  }

  getPeople(): Observable<any> {
    return this.http
      .get(environment.baseApiUrl + 'people.list')
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }

}
