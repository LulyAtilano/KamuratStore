import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Default route
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }, // In case the requested URL doesn't match or uses as 404 page;
      ], { useHash: true }),
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
