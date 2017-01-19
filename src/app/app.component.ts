import { Component } from '@angular/core';
import { MenuItems } from './menu.items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private menuItems = MenuItems;

}
