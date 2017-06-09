import { MyprojectPage } from './app.po';

describe('myproject App', () => {
  let page: MyprojectPage;

  beforeEach(() => {
    page = new MyprojectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
