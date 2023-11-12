import type { fin as FinApi } from "@openfin/core";
import * as Fdc3Api from "@finos/fdc3";

declare global {
	const fin: typeof FinApi;
	const fdc3: typeof Fdc3Api;
}
