import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export type ProfileForm = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  state: string;
  city: string;
  street: string;
  number: string;
  birthDay: string;
  additionalAddrInfo?: string;
  photo: string;
};

export type Profile = Omit<ProfileForm, 'photo'> & {
  photoUrl: string;
};

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private PROFILE_STORAGE = 'profiles';

  private randomInt() {
    return Math.random() * Number.MAX_SAFE_INTEGER;
  }

  async getPhoto(photoUrl: string) {
    const { data } = await Filesystem.readFile({
      directory: Directory.Data,
      path: photoUrl,
      encoding: Encoding.UTF8,
    });
    return data;
  }

  async createPhoto(photo: string) {
    const id = await this.randomInt();
    const path = `${Date.now()}-${id}.jpeg.base64`;
    const { uri } = await Filesystem.writeFile({
      directory: Directory.Data,
      data: photo,
      path,
      encoding: Encoding.UTF8,
    });
    return path;
  }

  async getProfiles() {
    const { value } = await Preferences.get({ key: this.PROFILE_STORAGE });
    const profiles = JSON.parse(value ?? '[]') as Profile[];
    return profiles;
  }

  async saveProfile(profile: Profile) {
    const profiles = await this.getProfiles();
    profiles.push(profile);
    await Preferences.set({
      key: this.PROFILE_STORAGE,
      value: JSON.stringify(profiles),
    });
  }

  async createProfile(profileForm: ProfileForm) {
    const photoUrl = await this.createPhoto(profileForm.photo);
    delete (profileForm as any).photo;
    await this.saveProfile({ ...profileForm, photoUrl });
  }
}
