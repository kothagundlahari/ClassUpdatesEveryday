import { Angular3ComponentsPage } from './app.po';

describe('angular3-components App', function() {
  let page: Angular3ComponentsPage;

  beforeEach(() => {
    page = new Angular3ComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
