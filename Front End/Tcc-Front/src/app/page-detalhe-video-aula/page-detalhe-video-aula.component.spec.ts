import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetalheVideoAulaComponent } from './page-detalhe-video-aula.component';

describe('PageDetalheVideoAulaComponent', () => {
  let component: PageDetalheVideoAulaComponent;
  let fixture: ComponentFixture<PageDetalheVideoAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetalheVideoAulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDetalheVideoAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
