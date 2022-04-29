import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FeatureModule } from '../feature/feature.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FeatureModule,
    CoreModule,
  ]
})
export class DashboardModule { }
