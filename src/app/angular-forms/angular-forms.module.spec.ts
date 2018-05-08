import { AngularFormsModule } from './angular-forms.module';

describe('AngularFormsModule', () => {
  let angularFormsModule: AngularFormsModule;

  beforeEach(() => {
    angularFormsModule = new AngularFormsModule();
  });

  it('should create an instance', () => {
    expect(angularFormsModule).toBeTruthy();
  });
});
