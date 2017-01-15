import { Component } from '@angular/core';
import {DataService} from "../../common/data-service/data.service";

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent {

  private page: any;

  constructor(private dataService: DataService) {
    dataService.getPageData('about').subscribe((data: any) => {
      this.page = data;
    });
  }

}
