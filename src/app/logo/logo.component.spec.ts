import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MaterialModule } from '../material.module'
import { LogoComponent } from './logo.component'

describe('LogoComponent', () => {
  let component: LogoComponent
  let fixture: ComponentFixture<LogoComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoComponent],
      imports: [MaterialModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
