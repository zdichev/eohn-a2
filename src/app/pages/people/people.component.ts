import { Component } from '@angular/core';
import {DataService} from "../../common/data-service/data.service";

@Component({
  selector: 'app-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.scss']
})
export class PeopleComponent {
  private page: any;
  private people: any;
  private ratingIsReadOnly: boolean = false;
  private ratingMax: number = 5;

  constructor(private dataService: DataService) {
    dataService.getPageData('people').subscribe((data: any) => {
      this.page = data;
    });

    dataService.getPeople().subscribe((data: any) => {
      this.people = data;
    });
  }



}
