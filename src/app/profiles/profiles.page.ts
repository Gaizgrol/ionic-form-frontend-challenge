import { Component } from '@angular/core';
import { Profile, ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: 'profiles.page.html',
  styleUrls: ['profiles.page.scss'],
})
export class ProfilesPage {
  loading = false;

  profiles: Profile[] = [];

  constructor(private profileService: ProfileService) {}

  async ionViewDidEnter() {
    this.loading = true;
    this.profiles = await this.profileService.getProfiles();
    this.profiles.sort(
      ({ firstName: f1, lastName: l1 }, { firstName: f2, lastName: l2 }) =>
        `${f1} ${l1}`.localeCompare(`${f2} ${l2}`)
    );
    this.loading = false;
  }
}
