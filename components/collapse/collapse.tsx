import React from 'react';
import useMeasure from 'react-use-measure';

import { useSpring, animated } from 'react-spring';
import { ResizeObserver } from '@juggle/resize-observer';
import { v4 as uuid } from 'uuid';
import { useCollapse, CollapseContextValue } from './collapse-context';

import styles from './collapse.module.scss';

interface CollapseProps {
  title: string;
  subtitle?: string;
  children: JSX.Element[] | JSX.Element | string;
}

function Icon(): JSX.Element {
  return (
    <svg 
      viewBox='0 0 24 24' 
      width='24' 
      height='24' 
      stroke='currentColor' 
      strokeWidth='1.5' 
      strokeLinecap='round' 
      strokeLinejoin='round' 
      fill='none' 
      shapeRendering='geometricPrecision' 
      style={{ color: 'currentcolor' }}
    >
      <path d='M6 9l6 6 6-6' />
    </svg>
  );
}

export default function Collapse(
  { title, subtitle, children }: CollapseProps
): JSX.Element {
  const id: string = React.useMemo(() => uuid(), []); 
  
  const [active, setActive] = React.useState<boolean>(false);
  const [ref, { height }] = useMeasure({ polyfill: ResizeObserver });
  const collapseContext: CollapseContextValue | null = useCollapse();
  
  const toggleActive = React.useCallback(() => setActive((prev: boolean) => !prev), []);
  
  const open = React.useMemo(() => {
    if (collapseContext) return !collapseContext.selected ? active : collapseContext.selected === title;
    return active;
  }, [collapseContext, active, title]);
  
  const toggleOpen = React.useMemo(() => {
    return collapseContext ? () => collapseContext.onChange(open ? null : title) : toggleActive;
  }, [collapseContext, open, title, toggleActive]);
  
  const props = useSpring({
    height: open ? height : 0,
    config: { tension: 250, friction: 32, clamp: true },
  });

  return (
    <div className={styles.collapse}>
      <h3 className={styles.header}>
        <button 
          id={`${id}-button`} 
          className={styles.button} 
          type='button'
          aria-controls={id} 
          aria-expanded={open}
          onClick={toggleOpen}
        >
          <span>
            {title}
            <span className={`${styles.icon}${open ? ` ${styles.open}` : ''}`}>
              <Icon />
            </span>
          </span>
        </button>
        {!!subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </h3>
      <animated.div style={{ overflow: 'hidden', ...props }}>
        <div 
          id={id} 
          ref={ref}
          role='region' 
          aria-labelledby={`${id}-button`} 
          className={styles.content}
        >
          {children}
        </div>
      </animated.div>
    </div>
  );
}
