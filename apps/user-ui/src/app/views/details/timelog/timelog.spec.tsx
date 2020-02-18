import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Timelog from './timelog';

describe(' Timelog', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Timelog />);
    expect(baseElement).toBeTruthy();
  });
});
