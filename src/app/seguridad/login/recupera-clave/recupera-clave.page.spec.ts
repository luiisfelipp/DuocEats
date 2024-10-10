import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperaClavePage } from './recupera-clave.page';

describe('RecuperaClavePage', () => {
  let component: RecuperaClavePage;
  let fixture: ComponentFixture<RecuperaClavePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperaClavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
