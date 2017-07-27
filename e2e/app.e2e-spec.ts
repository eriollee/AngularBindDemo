import { AngularBindDemoPage } from './app.po';

describe('angular-bind-demo App', function() {
  let page: AngularBindDemoPage;

  beforeEach(() => {
    page = new AngularBindDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
