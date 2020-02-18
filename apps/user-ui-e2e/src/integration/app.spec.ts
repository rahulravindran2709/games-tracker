import { getGreeting } from '../support/app.po';

describe('user-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to user-ui!');
  });
});
