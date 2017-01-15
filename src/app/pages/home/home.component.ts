import {Component} from "@angular/core";
import {DataService} from "../../common/data-service/data.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  private page: any;

  constructor(private dataService: DataService) {
    dataService.getPageData('home').subscribe((data: any) => {
      this.page = data;
    });
  }

}
