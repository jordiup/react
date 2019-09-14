describe('Input form', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('focuses input on load', () => {
		cy.focused().should('have.class', 'new-todo');
	});

	it('accepts input', () => {
		const typedText = 'Buy Milk';

		cy.get('.new-todo')
			.type(typedText)
			.should('have.value', typedText);
	});

	context('From submission', () => {
		const itemText = 'Buy eggs';

		beforeEach(() => {
			cy.server();
		});

		it('Adds a new todo on submit', () => {
			cy.server();
			cy.route('POST', '/api/todos', {
				name: itemText,
				id: 1,
				isComplete: false
			});
			cy.get('.new-todo')
				.type(itemText)
				.type('{enter}');
			cy.get('.todo-list li')
				.should('have.length', 1)
				.and('contain', itemText);
		});

		it.only('Shows an error on failed submission', () => {
			cy.server();
			cy.route({
				url: '/api/todos',
				method: 'POST',
				status: 500,
				response: {}
			});

			cy.get('.new-todo').type('{enter}');

			cy.get('.todo-list li').should('not.exist');

			cy.get('.error').should('be.visible');
		});
	});
});
