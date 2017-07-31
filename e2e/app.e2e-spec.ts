import { GroupeeFrontEndPage } from './app.po';

describe('groupee-front-end App', () => {
  let page: GroupeeFrontEndPage;

  beforeEach(() => {
    page = new GroupeeFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
