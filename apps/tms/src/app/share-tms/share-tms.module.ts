import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareTmsRoutingModule } from './share-tms-routing.module';
import { ShareTmsComponent } from './share-tms/share-tms.component';

@NgModule({
  declarations: [ShareTmsComponent],
  imports: [CommonModule, ShareTmsRoutingModule],
})
export class ShareTmsModule {}
