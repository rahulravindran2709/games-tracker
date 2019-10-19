import { getGreeting } from '../support/app.po';

describe('games-tracker', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to games-tracker!');
  });
});
