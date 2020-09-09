import React from 'react';
import classNames from 'classnames';

import './Ribbon.scss';

export interface RibbonProps {
    children?: React.ReactNode,
  /**
   * Ribbon color
   */
    color?: 'bizarre' | 'manz' | 'atomic_tangerine' | 'tickle_me_pink' | 'tapestry' | 'flush' | 'flamingo' | 'corduroy' | 'tuna'
}

/**
 * Primary UI component for user interaction
 */
const Ribbon: React.FC<RibbonProps> = ({
  color = 'tapestry',
  children,
  ...props
}) => {
  return (
    <div className={classNames(
        'Ribbon',
        `Ribbon--${color}`
    )}>{children}</div>
  );
};

export default Ribbon;
