import { Component } from '@angular/core';
import { WebAuthn } from '@darkedges/capacitor-native-passkey';
import { WebAuthnService } from '../webauthn/services/WebAuthn.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private webAuthnService: WebAuthnService
  ) {
  }

  async initAuthentication() {
    this.webAuthnService.generateAuthenticationOptions().subscribe(
      publicKeyCredentialRequestOptionsJSON => {
        WebAuthn.startAuthentication(publicKeyCredentialRequestOptionsJSON).then(
          data => {
            alert(JSON.stringify(data, null, 2));
          }
        )
      }
    )
  }

  async initRegistration() {
    this.webAuthnService.generateRegistrationOptions().subscribe(
      publicKeyCredentialCreationOptionsJSON => {
        WebAuthn.startRegistration(publicKeyCredentialCreationOptionsJSON).then(
          data => {
            alert(JSON.stringify(data, null, 2));
          }
        )
      })
  }
}
