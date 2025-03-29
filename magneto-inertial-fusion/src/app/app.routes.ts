import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SystemsComponent } from './systems/systems.component';
import { ComponentsComponent } from './components/components.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'systems',
                component: SystemsComponent,
            },
            {
                path: 'components',
                component: ComponentsComponent,
            },
            {
                path: 'diagnostics',
                component: DiagnosticsComponent,
            },
            {
                path: 'contact',
                component: ContactComponent,
            },
            {
                path: 'about',
                component: AboutComponent,
            },
        ]
    },
    
];
