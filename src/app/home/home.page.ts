import { Component } from '@angular/core';
import { WebAuthn } from '@darkedges/webauthn';
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
    this.init();
  }

  async init() {
    // let v1 = await WebAuthn.isWebAuthnAvailable();
    // let v2 = await WebAuthn.isWebAuthnAutoFillAvailable();
    // console.log({ v1, v2 })
    this.webAuthnService.generateRegistrationOptions().subscribe(
      publicKeyCredentialCreationOptionsJSON => {
        console.log(JSON.stringify(publicKeyCredentialCreationOptionsJSON, null, 2));
        WebAuthn.startRegistration(publicKeyCredentialCreationOptionsJSON).then(
          data => {
            alert(JSON.stringify(data, null, 2));
          }
        )
      })
  }
}
