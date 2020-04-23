import { Provider } from '@angular/core';
import { environment } from '../environments/environment';

export { environment } from '../environments/environment';

export const API_URL = ''

export const CONFIG_PROVIDERS: Provider = [
  {
    provide: API_URL,
    useValue: environment.API_URL,
  },
];