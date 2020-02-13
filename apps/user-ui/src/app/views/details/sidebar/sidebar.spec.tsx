import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Sidebar from './sidebar';

describe(' Sidebar', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Sidebar />);
    expect(baseElement).toBeTruthy();
  });
});
