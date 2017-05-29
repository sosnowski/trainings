import { RoutingTestPage } from './app.po';

describe('routing-test App', () => {
  let page: RoutingTestPage;

  beforeEach(() => {
    page = new RoutingTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
