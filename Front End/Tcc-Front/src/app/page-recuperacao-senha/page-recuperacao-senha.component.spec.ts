import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecuperacaoSenhaComponent } from './page-recuperacao-senha.component';

describe('PageRecuperacaoSenhaComponent', () => {
  let component: PageRecuperacaoSenhaComponent;
  let fixture: ComponentFixture<PageRecuperacaoSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRecuperacaoSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRecuperacaoSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
