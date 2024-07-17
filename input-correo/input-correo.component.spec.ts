import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCorreoComponent } from './input-correo.component';

describe('InputCorreoComponent', () => {
  let component: InputCorreoComponent;
  let fixture: ComponentFixture<InputCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCorreoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
