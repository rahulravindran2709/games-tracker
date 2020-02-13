import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Toolbar from './toolbar';

describe(' Toolbar', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Toolbar />);
    expect(baseElement).toBeTruthy();
  });
});
