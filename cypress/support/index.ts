declare global {
	namespace Cypress {
		interface Chainable {

			getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
		}
	}
}



export { };
