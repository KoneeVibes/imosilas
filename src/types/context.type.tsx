export type ContextType = {
    headerElement: React.RefObject<HTMLHeadingElement> | undefined;
    setHeaderElement: React.Dispatch<React.SetStateAction<React.RefObject<HTMLHeadingElement> | undefined>>
};

export type ContextProviderProps = {
    children: React.ReactNode;
};