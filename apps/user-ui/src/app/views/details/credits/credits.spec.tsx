import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Credits from './credits';

describe(' Credits', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Credits />);
    expect(baseElement).toBeTruthy();
  });
});
