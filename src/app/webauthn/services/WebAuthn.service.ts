import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PublicKeyCredentialCreationOptionsJSON, PublicKeyCredentialRequestOptionsJSON } from '@simplewebauthn/typescript-types';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebAuthnService {
    protected getDelay = 0;
    protected timeout = 0;
    protected saveDelay = 0;
    protected delete404OK: boolean = false;
    protected root: string = '';

    constructor(
        protected http: HttpClient,
    ) {
        this.root = 'https://api.connectid.darkedges.com/webauthn';
    }

    generateRegistrationOptions(): Observable<PublicKeyCredentialCreationOptionsJSON> {
        return this.http.get<PublicKeyCredentialCreationOptionsJSON>(`${this.root}/generate-registration-options`,
            {
                withCredentials: true
            });
    }


    generateAuthenticationOptions(): Observable<PublicKeyCredentialRequestOptionsJSON> {
        return this.http.get<PublicKeyCredentialRequestOptionsJSON>(`${this.root}/generate-authentication-options`,
            {
                withCredentials: true
            });
    }
}
