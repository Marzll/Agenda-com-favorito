import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeContatosComponent } from './exibe-contatos.component';

describe('ExibeContatosComponent', () => {
  let component: ExibeContatosComponent;
  let fixture: ComponentFixture<ExibeContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibeContatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
