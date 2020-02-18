import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Synopsis from './synopsis';

describe(' Synopsis', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Synopsis />);
    expect(baseElement).toBeTruthy();
  });
});
