import React from 'react';
import { render } from '@testing-library/react';
import { BasicAppLogo } from './app-logo.composition';

it('should render BasicAppLogo with the default fill color', () => {
  const { container } = render(<BasicAppLogo />);
  const el = container.querySelector('#fill-rectangle');
  const fillColor = el.attributes.getNamedItem('fill').value;     
  expect(fillColor).toBe('rgb(98.429871%, 81.959534%, 37.649536%)');
});
