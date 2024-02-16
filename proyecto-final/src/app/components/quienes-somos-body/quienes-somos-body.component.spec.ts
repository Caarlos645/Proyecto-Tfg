import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosBodyComponent } from './quienes-somos-body.component';

describe('QuienesSomosBodyComponent', () => {
  let component: QuienesSomosBodyComponent;
  let fixture: ComponentFixture<QuienesSomosBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuienesSomosBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuienesSomosBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
