import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CustomPicker from './custom-picker';

describe(' CustomPicker', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<CustomPicker />);
    expect(baseElement).toBeTruthy();
  });
});
