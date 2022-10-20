import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetalheAulaComponent } from './page-detalhe-aula.component';

describe('PageDetalheAulaComponent', () => {
  let component: PageDetalheAulaComponent;
  let fixture: ComponentFixture<PageDetalheAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetalheAulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDetalheAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
