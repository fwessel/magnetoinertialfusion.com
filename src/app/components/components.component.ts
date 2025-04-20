import { Component } from '@angular/core';
import { PageContainerComponent } from "../page-container/page-container.component";
import { ShowcaseComponent } from "../showcase/showcase.component";

@Component({
  selector: 'app-components',
  imports: [PageContainerComponent, ShowcaseComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {

}
