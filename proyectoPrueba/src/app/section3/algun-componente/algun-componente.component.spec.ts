import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgunComponenteComponent } from './algun-componente.component';

describe('AlgunComponenteComponent', () => {
  let component: AlgunComponenteComponent;
  let fixture: ComponentFixture<AlgunComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgunComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgunComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
