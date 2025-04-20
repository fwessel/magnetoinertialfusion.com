import { Component } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navbar',
  imports: [BsDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public navService: NavigationService) {}
  
  
}
