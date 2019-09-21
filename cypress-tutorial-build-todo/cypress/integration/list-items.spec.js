describe('List items', () => {
	beforeEach(() => {
		cy.seedAndVisit();
	});

	it('properly displays completed items', () => {
		cy.get('.todo-list li')
			.filter('.completed')
			.should('have.length', 1)
			.find('.toggle')
			.should('be.checked');
	});

	it('displays correct number of remaining todos', () => {
		cy.get('.todo-count').should('contain', 3);
	});

	it('Remove a todo', () => {
		cy.route({
			url: '/app/todos/1',
			method: 'DELETE',
			status: 200,
			response: {}
		});

		cy.get('.todo-list li').as('list');

		cy.get('@list')
			.first()
			.find('.destroy')
			.invoke('show')
			.click();
	});

	it('Marks an incomplete item complete', () => {
		cy.fixture('todos').then(todos => {
			const target = Cypress._.head(todos);
			cy.route(
				'PUT',
				`/api/todos/${target.id}`,
				Cypress._.merge(target, { isComplete: true })
			);
		});

		cy.get('.todo-list li')
			.first()
			.as('first-todo');

		cy.get('@first-todo')
			.find('.toggle')
			.click()
			.should('be.checked');

		cy.get('@first-todo').should('have.class', 'completed');

		cy.get('.todo-count').should('contain', 2);
	});
});
