import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Display from '.';
import { store } from '@/app/store';

describe('render Display', () => {
  test('render display', async () => {
    render(
      <Provider store={store}>
        <Display />
      </Provider>,
    );

    const container = await screen.findByTestId('display');

    expect(container).toBeInTheDocument();
  });
});
