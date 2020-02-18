import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Dashboard from './dashboard';

describe(' Dashboard', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Dashboard />);
    expect(baseElement).toBeTruthy();
  });
});
