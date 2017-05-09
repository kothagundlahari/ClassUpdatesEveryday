import { Angular2Component1Page } from './app.po';

describe('angular2-component1 App', function() {
  let page: Angular2Component1Page;

  beforeEach(() => {
    page = new Angular2Component1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
