import { Component } from '@angular/core';
import { PageContainerComponent } from '../page-container/page-container.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-capacitors',
  imports: [PageContainerComponent, ShowcaseComponent],
  templateUrl: './capacitors.component.html',
  styleUrl: './capacitors.component.css'
})
export class CapacitorsComponent {
  constructor(public navService:NavigationService) {}
}
