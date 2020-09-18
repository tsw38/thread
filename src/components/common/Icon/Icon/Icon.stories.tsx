import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Icon from './Icon';

import icons from './icons';
import styles from './Icon.stories.module.scss';
import iconStyle from './Icon.module.scss';

export default {
  title: 'Icons/Default',
  component: Icon
} as Meta;

export const Default = () => {
    return (
      <div className={styles.IconsWrapper}>
        {Object.keys(icons).map(icon => {
          return (
            <div className={styles.IconWrapper} key={`Icon-${icon}`}>
              <Icon name={icon} className={iconStyle.Icon}/>
              <code>{icon}</code>
            </div>
          )
        })}
      </div>
    )
}