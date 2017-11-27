import { DatakeenPage } from './app.po';

describe('datakeen App', () => {
  let page: DatakeenPage;

  beforeEach(() => {
    page = new DatakeenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
