import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCriarContaComponent } from './page-criar-conta.component';

describe('PageCriarContaComponent', () => {
  let component: PageCriarContaComponent;
  let fixture: ComponentFixture<PageCriarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCriarContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCriarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
