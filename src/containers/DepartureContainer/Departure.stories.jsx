import React from 'react';

import data from '../../data/data';
import DepartureContainer from './index';

export default {
  title: 'Example/Departure',
  component: DepartureContainer,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#e2eef6' },
      ],
    },
  },
};

const Template = (args) => <DepartureContainer {...args} />;

export const Sellable = Template.bind({});
Sellable.args = {
  payload : data.sellable
};

export const Summary = Template.bind({});
Summary.args = {
  payload : data.summary
};

export const Fastest = Template.bind({});
Fastest.args = {
  payload : data.fastest
};

export const MoreOptions = Template.bind({});
MoreOptions.args = {
  payload : data.moreOptions
};

export const MoreOptionsFastest = Template.bind({});
MoreOptionsFastest.args = {
  payload : data.moreOptionsFastest
};