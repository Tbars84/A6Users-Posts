import { LandingPageModuleModule } from './landing-page-module.module';

describe('LandingPageModuleModule', () => {
  let landingPageModuleModule: LandingPageModuleModule;

  beforeEach(() => {
    landingPageModuleModule = new LandingPageModuleModule();
  });

  it('should create an instance', () => {
    expect(landingPageModuleModule).toBeTruthy();
  });
});
