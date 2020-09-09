import React from 'react';
import classNames from 'classnames';

import './ribbon.scss';

export interface RibbonProps {
  /**
   * Ribbon color
   */
    color: 'manz' | 'atomic_tangerine' | 'tickle_me_pink' | 'tapestry' | 'flush' | 'flamingo' | 'corduroy' | 'tuna'
}

/**
 * Primary UI component for user interaction
 */
const Ribbon: React.FC<RibbonProps> = ({
  color = 'tapestry',
  ...props
}) => {
  return (
    <div className={classNames(
        'Ribbon',
        `Ribbon--${color}`
    )}></div>
  );
};

export default Ribbon;
