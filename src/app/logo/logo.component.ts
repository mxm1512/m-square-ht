import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-logo',
  template: `
            <a mat-flat-button routerLink="/home" style="height:fit-content" aria-label="Home">
              <div flexLayout="row">
                <div fxFlex><mat-icon class="tea-logo" svgIcon="logo"></mat-icon></div>
                  <div flexLayout="column" flexLayoutALign="start start" class="logo-shop-name">
                    <div class="logo-line-1">
                      <span class="mat-h2">Haaner</span>
                    </div>
                    <div class="logo-line-2"><span class="mat-h2">eeladen</span></div>
                </div>
              </div>
            </a>
  `,
  styles: [
    `
      .tea-logo {
        zoom: 250%;
        color: limegreen;
      }
      .logo-shop-name {
        margin-left: -20px;
        margin-top: 5px;
      }
      .logo-line-1 {
        width: 118px;
        height: 23px;
      }
      .logo-line-1 > span {
        font-weight: 300;
      }
      .logo-line-2 {
        width: 20px;
      }
      .logo-line-2 > span {
        font-size: 1.6rem;
      }
    `,
  ],
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
