import React from 'react';

export interface CollapseContextValue {
  selected: string | null;
  onChange: (title: string | null) => void;
}

const CollapseContext = React.createContext<CollapseContextValue | null>(null);
export const { Provider } = CollapseContext;
export const { Consumer } = CollapseContext;
export function useCollapse(): CollapseContextValue | null {
  return React.useContext(CollapseContext);
}
