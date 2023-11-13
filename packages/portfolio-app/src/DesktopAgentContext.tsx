import { DesktopAgent } from "@finos/fdc3";
import { createContext } from "react";

export const DesktopAgentContext = createContext<DesktopAgent | null>(null);

type DesktopAgentProviderProps = {
    DesktopAgent: DesktopAgent,
} & React.PropsWithChildren;

export function DesktopAgentProvider({ DesktopAgent, children }: DesktopAgentProviderProps) {
    return (
        <DesktopAgentContext.Provider value={DesktopAgent}>
            {children}
        </DesktopAgentContext.Provider>
    );
}
