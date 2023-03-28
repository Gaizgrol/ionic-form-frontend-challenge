import { Component, Input } from '@angular/core';
import { Profile, ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-card-profile',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export default class CardComponent {
  @Input()
  profile!: Profile;

  photo: string = '';

  constructor(private profileService: ProfileService) {}

  formatDate(isoDate: string) {
    const date = new Date(isoDate);
    const dd = String(date.getUTCDate()).padStart(2, '0');
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
    const yyyy = String(date.getUTCFullYear()).padStart(4, '0');
    return `${mm}/${dd}/${yyyy}`;
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.photo = await this.profileService.getPhoto(this.profile.photoUrl);
  }
}
