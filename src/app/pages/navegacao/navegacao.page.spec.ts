import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavegacaoPage } from './navegacao.page';

describe('NavegacaoPage', () => {
  let component: NavegacaoPage;
  let fixture: ComponentFixture<NavegacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavegacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
