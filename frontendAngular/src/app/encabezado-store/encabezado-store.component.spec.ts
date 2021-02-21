import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoStoreComponent } from './encabezado-store.component';

describe('EncabezadoStoreComponent', () => {
  let component: EncabezadoStoreComponent;
  let fixture: ComponentFixture<EncabezadoStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
