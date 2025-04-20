import { Component } from '@angular/core';
import { PageContainerComponent } from '../page-container/page-container.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-systems',
  imports: [PageContainerComponent, ShowcaseComponent],
  templateUrl: './systems.component.html',
  styleUrl: './systems.component.css'
})
export class SystemsComponent {
  constructor(public navService:NavigationService) {}

}
