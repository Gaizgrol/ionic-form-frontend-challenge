import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { AddressService, State } from '../services/address/address.service';
import { ProfileService } from '../services/profile/profile.service';

const today = () => new Date().toISOString().split('.').shift() as string;
const newForm = () =>
  new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    jobTitle: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(12)]),
    selectedState: new FormControl<State | undefined>(undefined, [
      Validators.required,
    ]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
    additionalAddrInfo: new FormControl(''),
  });

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  today: string | undefined;
  states: State[] = [];

  form = newForm();
  birthDay = today();

  loading = false;

  constructor(
    private addressService: AddressService,
    private profileService: ProfileService,
    private alertController: AlertController
  ) {
    this.states = this.addressService.states;
  }

  updateMaxDate() {
    this.today = today();
  }

  async takePhoto() {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
        quality: 90,
      });

      if (photo.base64String) {
        this.form.controls.photo.setValue(
          `data:image/jpeg;base64,${photo.base64String}`
        );
      }
    } catch {}
  }

  formatPhone() {
    const { phone } = this.form.controls;
    const onlyNumbers = phone.value?.replace(/\D/g, '') ?? '';
    const only9Digits = onlyNumbers.substring(0, 10);
    const parts = [
      only9Digits.substring(0, 3),
      only9Digits.substring(3, 6),
      only9Digits.substring(6, 10),
    ] as const;
    const formatted = `${parts[0]} ${parts[1]} ${parts[2]}`;
    phone.setValue(formatted.trim());
  }

  async register() {
    const {
      birthDay,
      form: {
        value: {
          city,
          firstName,
          jobTitle,
          lastName,
          number,
          phone,
          photo,
          selectedState,
          street,
          additionalAddrInfo,
        },
      },
    } = this;
    try {
      this.loading = true;
      await this.profileService.createProfile({
        birthDay,
        additionalAddrInfo: additionalAddrInfo!,
        firstName: firstName!,
        lastName: lastName!,
        city: city!,
        jobTitle: jobTitle!,
        number: number!,
        phone: phone!,
        photo: photo!,
        state: selectedState?.name!,
        street: street!,
      });
      const alert = await this.alertController.create({
        header: 'Success',
        subHeader: 'User created!',
        message: `${firstName} ${lastName} was stored in the list.`,
        buttons: ['OK'],
      });
      await alert.present();
      this.form = newForm();
    } catch (err: unknown) {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Could not create new profile.',
        message: err instanceof Error ? err.message : String(err),
        buttons: ['OK'],
      });
      await alert.present();
    } finally {
      this.loading = false;
    }
  }
}
