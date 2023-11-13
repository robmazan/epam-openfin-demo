import { useContext, useEffect } from "react";
import { DesktopAgentContext } from "./DesktopAgentContext";
import { Listener } from "@finos/fdc3";

function App() {
    const desktopAgent = useContext(DesktopAgentContext);
    useEffect(() => {
        let listener: Listener | undefined;

        async function init() {
            listener = await desktopAgent?.addContextListener("fdc.instrument", (ctx, ctxMeta) => {
                console.log("Received instrument", ctx, ctxMeta);
            });
        }
        init();
        return () => {
            listener?.unsubscribe();
        }
    }, []);
    return (
        <>
            <h1>Portfolio app</h1>
        </>
    );
}

export default App;
