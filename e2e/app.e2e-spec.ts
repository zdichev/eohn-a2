import { EohnA2Page } from './app.po';

describe('eohn-a2 App', function() {
  let page: EohnA2Page;

  beforeEach(() => {
    page = new EohnA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
