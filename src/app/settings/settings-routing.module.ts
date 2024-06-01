import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'general', component: GeneralSettingsComponent },
  { path: 'opcr-templates', loadChildren: () => import('./opcr-templates/opcr-templates.module').then(m => m.OpcrTemplatesModule) },
  { path: 'dpcr-templates', loadChildren: () => import('./dpcr-templates/dpcr-templates.module').then(m => m.DpcrTemplatesModule) },
  { path: 'ipcr-templates', loadChildren: () => import('./ipcr-templates/ipcr-templates.module').then(m => m.IpcrTemplatesModule) },
  { path: 'org-units', loadChildren: () => import('./org-units/org-units.module').then(m => m.OrgUnitsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
