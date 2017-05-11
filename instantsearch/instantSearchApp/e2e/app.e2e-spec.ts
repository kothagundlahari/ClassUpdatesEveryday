import { InstantSearchAppPage } from './app.po';

describe('instant-search-app App', () => {
  let page: InstantSearchAppPage;

  beforeEach(() => {
    page = new InstantSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
