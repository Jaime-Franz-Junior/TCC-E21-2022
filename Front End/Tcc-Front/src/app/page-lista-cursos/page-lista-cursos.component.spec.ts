import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListaCursosComponent } from './page-lista-cursos.component';

describe('PageListaCursosComponent', () => {
  let component: PageListaCursosComponent;
  let fixture: ComponentFixture<PageListaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListaCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
