import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './pages/people/people.component';
import { AboutComponent } from './pages/about/about.component';



export const MenuItems:Array<Object> = [
  {
    path: '',
    text: 'Home',
    component: HomeComponent
  },
  {
    path: 'people',
    text: 'People',
    component: PeopleComponent
  },
  {
    path: 'about',
    text: 'About',
    component: AboutComponent
  }
];

