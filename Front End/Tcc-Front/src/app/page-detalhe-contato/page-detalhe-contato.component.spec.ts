import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetalheContatoComponent } from './page-detalhe-contato.component';

describe('PageDetalheContatoComponent', () => {
  let component: PageDetalheContatoComponent;
  let fixture: ComponentFixture<PageDetalheContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetalheContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDetalheContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
