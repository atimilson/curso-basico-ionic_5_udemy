import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Navegacao2Page } from './navegacao2.page';

describe('Navegacao2Page', () => {
  let component: Navegacao2Page;
  let fixture: ComponentFixture<Navegacao2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navegacao2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Navegacao2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
