import { Component } from '@angular/core';
import { PageContainerComponent } from '../page-container/page-container.component';
import { ShowcaseComponent } from '../showcase/showcase.component';

@Component({
  selector: 'app-home',
  imports: [PageContainerComponent, ShowcaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { }
