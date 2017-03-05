import { MeanExamplePage } from './app.po';

describe('mean-example App', () => {
  let page: MeanExamplePage;

  beforeEach(() => {
    page = new MeanExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
