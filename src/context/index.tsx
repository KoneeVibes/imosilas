import { createContext, useState } from "react";
import { ContextProviderProps, ContextType } from "../types/context.type";

export const Context = createContext({} as ContextType);

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [headerElement, setHeaderElement] = useState<React.RefObject<HTMLHeadingElement> | undefined>(undefined);

    return (
        <Context.Provider value={{ headerElement, setHeaderElement }}>
            {children}
        </Context.Provider>
    );
};
