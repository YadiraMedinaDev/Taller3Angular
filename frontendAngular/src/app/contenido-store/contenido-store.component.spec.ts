import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoStoreComponent } from './contenido-store.component';

describe('ContenidoStoreComponent', () => {
  let component: ContenidoStoreComponent;
  let fixture: ComponentFixture<ContenidoStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
