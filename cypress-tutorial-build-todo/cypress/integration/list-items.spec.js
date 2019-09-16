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

	it.only('Remove a todo', () => {
		cy.route({
			url: '/app/todos/1',
			method: 'DELETE',
			status: 200,
			response: {}
		});

		cy.get('.todo-list li')
			.first()
			.find('.destroy')
			.invoke('show')
			.click();
	});
});
