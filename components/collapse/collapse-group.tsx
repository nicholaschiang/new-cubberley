import React from 'react';

import { Provider } from './collapse-context';

import styles from './collapse-group.module.scss';

interface CollapseGroupProps {
  children: React.ReactNode;
}

export default function CollapseGroup(
  { children }: CollapseGroupProps
): JSX.Element {
  const [selected, setSelected] = React.useState<string | null>(null);
  const onChange = React.useCallback((t: string | null) => setSelected(t), []);

  return (
    <div className={styles.collapseGroupWrapper}>
      <div className={styles.collapseGroup}>
        <Provider value={{ selected, onChange }}>
          {children}
        </Provider>
      </div>
    </div>
  );
}
