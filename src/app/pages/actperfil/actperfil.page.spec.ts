import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActperfilPage } from './actperfil.page';

describe('ActperfilPage', () => {
  let component: ActperfilPage;
  let fixture: ComponentFixture<ActperfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
