import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { MaterialModule } from '../material.module'
import { InventoryComponent } from './inventory.component'

describe('InventoryComponent', () => {
  let component: InventoryComponent
  let fixture: ComponentFixture<InventoryComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryComponent],
      imports: [RouterTestingModule, MaterialModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
