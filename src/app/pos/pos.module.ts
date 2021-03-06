import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MaterialModule } from '../material.module'
import { PosRoutingModule } from './pos-routing.module'
import { PosComponent } from './pos/pos.component'

@NgModule({
  imports: [CommonModule, PosRoutingModule, MaterialModule],
  declarations: [PosComponent],
})
export class PosModule {}
