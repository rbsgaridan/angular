import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'YamangTao',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44383/',
    redirectUri: baseUrl,
    clientId: 'YamangTao_App',
    responseType: 'code',
    scope: 'offline_access YamangTao',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44383',
      rootNamespace: 'YamangTao',
    },
  },
} as Environment;
