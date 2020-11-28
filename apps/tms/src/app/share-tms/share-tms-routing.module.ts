import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareTmsComponent } from './share-tms/share-tms.component';

const routes: Routes = [
  {
    path: '',
    component: ShareTmsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareTmsRoutingModule {}
