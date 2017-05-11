import { ReduxStyleAppPage } from './app.po';

describe('redux-style-app App', () => {
  let page: ReduxStyleAppPage;

  beforeEach(() => {
    page = new ReduxStyleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
