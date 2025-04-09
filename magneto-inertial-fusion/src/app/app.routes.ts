import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SystemsComponent } from './systems/systems.component';
import { ComponentsComponent } from './components/components.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CapacitorsComponent } from './capacitors/capacitors.component';
import { DiodesComponent } from './diodes/diodes.component';
import { ResistorsComponent } from './resistors/resistors.component';
import { SwitchesComponent } from './switches/switches.component';
import { TransformersComponent } from './transformers/transformers.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';

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
                path: 'components/capacitors',
                component: CapacitorsComponent
            },
            {
                path: 'components/diodes',
                component: DiodesComponent
            },
            {
                path: 'components/resistors',
                component: ResistorsComponent
            },
            {
                path: 'components/switches',
                component: SwitchesComponent
            },
            {
                path: 'components/transformers',
                component: TransformersComponent
            },
            {
                path: 'components/miscellaneous',
                component: MiscellaneousComponent
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
