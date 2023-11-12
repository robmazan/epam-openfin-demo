import { Context } from "@finos/fdc3";

window.addEventListener('DOMContentLoaded', initializeDOM);

/**
 * Initialize the DOM.
 */
async function initializeDOM() {
	if (window.fdc3) {
		window.fdc3.addContextListener("fdc3.instrument", setInstrument);
	}
}

/**
 * Update the contact details.
 * @param ctx The FDC3 context.
 */
function setInstrument(ctx: Context) {
    console.log('Setting selected instrument', ctx);
}
