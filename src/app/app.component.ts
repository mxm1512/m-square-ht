import { Component } from '@angular/core'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  template: `
          <div class="app-container">
            <mat-toolbar fxLayoutGap="8px" color="primary">
              <button mat-icon-button>
                <mat-icon>menu</mat-icon>
              </button>
              <app-logo></app-logo>
              <span class="flex-spacer"></span>
              <button mat-mini-fab routerLink="/user/profile" matTooltip="Profile" aria-label="User Profile">
                <mat-icon>account_circle</mat-icon>
              </button>
              <button mat-mini-fab routerLink="/user/logout" matTooltip="Logout" aria-label="Logout">
                <mat-icon>lock_open</mat-icon>
              </button>
            </mat-toolbar>
            <router-outlet></router-outlet>
          </div>
          `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'haaner-tee'
  constructor(iconRegestry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegestry.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo/logo.svg')
    )
  }
}
