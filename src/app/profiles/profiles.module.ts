import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilesPage } from './profiles.page';

import { ProfilesPageRoutingModule } from './profiles-routing.module';
import CardComponent from './card.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ProfilesPageRoutingModule],
  declarations: [ProfilesPage, CardComponent],
})
export class ProfilesPageModule {}
