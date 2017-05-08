import { XkbAngularWebPage } from './app.po';

describe('xkb-angular-web App', () => {
  let page: XkbAngularWebPage;

  beforeEach(() => {
    page = new XkbAngularWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
