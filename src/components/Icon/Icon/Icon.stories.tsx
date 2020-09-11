import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Icon from './Icon';

import icons from './icons';
import './Icon.stories.scss';

export default {
  title: 'Icons/Default',
  component: Icon
} as Meta;

export const Default = () => {
    return (
      <div className="IconsWrapper">
        {Object.keys(icons).map(icon => {
          return (
            <div className="IconWrapper" key={`Icon-${icon}`}>
              <Icon name={icon} />
              <code>{icon}</code>
            </div>
          )
        })}
      </div>
    )
}