import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Media from './media';

describe(' Media', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Media />);
    expect(baseElement).toBeTruthy();
  });
});
