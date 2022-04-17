import { Component, HostListener, OnInit } from '@angular/core';
import { PROFILE, CONFIGURATION } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile_data: PROFILE[] | undefined;
  configuration: CONFIGURATION[] | undefined;
  profieModal: any = null;

  constructor(private profile: ProfileService) {}

  ngOnInit(): void {
    this.profile.getProfile().subscribe(
      (res: any) => {
        this.profile_data = res;
        this.configuration = res[0].configuration;
        console.log('Profile data', this.profile_data, this.configuration);
      },
      (error) => {
        console.log(`Error:${error}`);
      }
    );
  }

  updateConfiguration() {
    this.profieModal = document.getElementById('profileModal');
    this.profieModal.classList.toggle('show-modal');
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    if (event.target === this.profieModal) {
      this.updateConfiguration();
    }
  }
}
