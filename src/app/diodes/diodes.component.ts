import { Component } from '@angular/core';
import { PageContainerComponent } from '../page-container/page-container.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-diodes',
  imports: [PageContainerComponent, ShowcaseComponent],
  templateUrl: './diodes.component.html',
  styleUrl: './diodes.component.css'
})
export class DiodesComponent {
  constructor (public navService: NavigationService) {}
}
