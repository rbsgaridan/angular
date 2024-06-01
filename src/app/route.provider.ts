import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/strategy-map',
        name: 'Strategy Map',
        parentName: '::Menu:Home',
        iconClass: 'fas fa-share-alt',
        order: 1,
        layout: eLayoutType.application,
        requiredPolicy: 'YamangTao.StrategyMap'
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        parentName: '::Menu:Home',
        iconClass: 'fas fa-th-large',
        order: 2,
        layout: eLayoutType.application,
        requiredPolicy: 'YamangTao.Dashboard'
      },
      {
        path: '/planning',
        name: 'Planning',
        iconClass: 'fas fa-binoculars',
        order: 2,
        layout: eLayoutType.application,
        requiredPolicy: 'YamangTao.Planning'
      },
      {
        path: '/planning/strategic-plans',
        name: 'Strategic Plans',
        iconClass: 'fa fa-line-chart',
        parentName: 'Planning',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/planning/operational-plans',
        name: 'Operational Plans',
        iconClass: 'fas fa-cubes',
        parentName: 'Planning',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/performance',
        name: 'Performance',
        iconClass: 'fa fa-bar-chart',
        order: 3,
        layout: eLayoutType.application,
        requiredPolicy: 'YamangTao.Performance'
      },
      {
        path: '/performance/targets',
        name: 'Targets',
        parentName: 'Performance',
        iconClass: 'fa fa-bullseye',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/performance/targets/office',
        name: 'Office',
        parentName: 'Targets',
        iconClass: 'fa fa-building',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/performance/targets/department',
        name: 'Department',
        parentName: 'Targets',
        iconClass: 'fa fa-building-o',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/performance/targets/individual',
        name: 'Individual',
        parentName: 'Targets',
        iconClass: 'fa fa-user-circle',
        order: 3,
        layout: eLayoutType.application,
      },
      {
        path: '/performance/accomplishments',
        name: 'Accomplishments',
        parentName: 'Performance',
        iconClass: 'fa fa-check-circle',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/performance/accomplishments/office',
        name: 'Office Accomplishments',
        parentName: 'Accomplishments',
        iconClass: 'fa fa-building',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/performance/accomplishments/department',
        name: 'Department Accomplishments',
        parentName: 'Accomplishments',
        iconClass: 'fa fa-building-o',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/performance/accomplishments/individual',
        name: 'Individual Accomplishments',
        parentName: 'Accomplishments',
        iconClass: 'fa fa-user-circle',
        order: 3,
        layout: eLayoutType.application,
      },
      {
        path: '/settings',
        name: 'Settings',
        iconClass: 'fa fa-cogs',
        order: 4,
        layout: eLayoutType.application,
      },
      {
        path: '/settings/general',
        name: 'General',
        iconClass: 'fa fa-cog',
        parentName: 'Settings',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/settings/opcr-templates',
        name: 'OPCR Templates',
        iconClass: 'fa fa-cog',
        parentName: 'Settings',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/settings/dpcr-templates',
        name: 'DPCR Templates',
        iconClass: 'fa fa-cog',
        parentName: 'Settings',
        order: 3,
        layout: eLayoutType.application,
      },
      {
        path: '/settings/ipcr-templates',
        name: 'IPCR Templates',
        iconClass: 'fa fa-cog',
        parentName: 'Settings',
        order: 4,
        layout: eLayoutType.application,
      },
      {
        path: '/settings/org-units',
        name: 'Org Units',
        iconClass: 'fa fa-cog',
        parentName: 'Settings',
        order: 4,
        layout: eLayoutType.application,
      },

    ]);
  };
}
