import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type propviderType = {
  asideToggle: boolean;
  setAsideToggle: Dispatch<SetStateAction<boolean>>;
};
export const MainContext = createContext<propviderType | null>(null);

export default function MainStore({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [asideToggle, setAsideToggle] = useState(false);

  return (
    <MainContext.Provider
      value={{
        asideToggle,
        setAsideToggle,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
