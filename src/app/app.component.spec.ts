import { async, TestBed } from '@angular/core/testing'
import { ObservableMedia } from '@angular/flex-layout'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import {
  commonTestingModules,
  commonTestingProviders,
  DomSanitizerFake,
  MatIconRegistryFake,
  ObservableMediaFake,
} from './common/common.testing'
import { LogoComponent } from './logo/logo.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat([
        { provide: ObservableMedia, useClass: ObservableMediaFake },
        { provide: MatIconRegistry, useClass: MatIconRegistryFake },
        { provide: DomSanitizer, DomSanitizerFake },
      ]),
      declarations: [AppComponent, LogoComponent],
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  it('should render app-container', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('.app-container').textContent).toContain(
      'Welcome to haaner-tee!'
    )
  }))
})
