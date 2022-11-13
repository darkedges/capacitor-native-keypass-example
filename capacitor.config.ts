import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-app-base',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    hostname: "webauthn.connectid.darkedges.com",
    androidScheme: "https"
  }
};

export default config;
