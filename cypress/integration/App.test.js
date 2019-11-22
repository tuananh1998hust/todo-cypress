/* eslint-disable no-undef */
describe('App Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Default UI', () => {
    it('render app', () => {
      cy.get('.App').should('have.length', 1);
    });

    it('render title', () => {
      cy.get('.title').should('have.length', 1);
    });

    it('render todo list', () => {
      cy.get('.todo-list').should('have.length', 1);
    });

    it('render add todo', () => {
      cy.get('.add-todo').should('have.length', 1);
    });

    it('render todo item', () => {
      cy.get('.todo-item').should('have.length', 2);
    });

    it('render 2 todoitem completed', () => {
      cy.get('.is-completed').should('have.length', 2);
    });
  });

  describe('Add tood', () => {
    it('add new item should have 3 .todo-item', () => {
      cy.get('input')
        .type('new todo item')
        .should('have.value', 'new todo item');

      cy.get('.btn-add').click();

      it('render todo item', () => {
        cy.get('.todo-item').should('have.length', 3);
      });

      it('render 1 todoitem not completed', () => {
        cy.get('.not-completed').should('have.length', 1);
      });
    });
  });

  describe('Change iscompleted todo', () => {
    it('change status completed todo', () => {
      cy.get('.todo-item:first-child .btn-completed').click();

      cy.get('.not-completed').should('have.length', 1);
    });
  });

  describe('Delete todo', () => {
    it('delete todo', () => {
      cy.get('.todo-item:first-child .btn-delete').click();

      cy.get('.todo-item').should('have.length', 1);
    });
  });
});
