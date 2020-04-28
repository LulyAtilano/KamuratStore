import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found-component';

const ROUTES = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Default route
  { path: '**', component: PageNotFoundComponent }, // In case the requested URL doesn't match or uses as 404 page;
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
