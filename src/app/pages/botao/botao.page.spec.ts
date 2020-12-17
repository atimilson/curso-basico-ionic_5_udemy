import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BotaoPage } from './botao.page';

describe('BotaoPage', () => {
  let component: BotaoPage;
  let fixture: ComponentFixture<BotaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BotaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
