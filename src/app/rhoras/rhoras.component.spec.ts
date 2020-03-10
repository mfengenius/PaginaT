import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhorasComponent } from './rhoras.component';

describe('RhorasComponent', () => {
  let component: RhorasComponent;
  let fixture: ComponentFixture<RhorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
