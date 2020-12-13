import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TMS_ROUTES } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(TMS_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
