import { Component } from '@angular/core';
import { PageContainerComponent } from '../page-container/page-container.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-resistors',
  imports: [PageContainerComponent, ShowcaseComponent],
  templateUrl: './resistors.component.html',
  styleUrl: './resistors.component.css'
})
export class ResistorsComponent {
  constructor(public navService: NavigationService) {}
}
