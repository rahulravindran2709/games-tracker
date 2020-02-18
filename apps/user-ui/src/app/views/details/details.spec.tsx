import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Details from './details';

describe(' Details', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Details />);
    expect(baseElement).toBeTruthy();
  });
});
