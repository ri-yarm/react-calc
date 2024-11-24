import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Digits from '.';
import { store } from '@/app/store';

describe('рендер Digits', () => {
  test('render container', async () => {
    render(
      <Provider store={store}>
        <Digits />
      </Provider>,
    );

    const container = await screen.findByTestId('digitsContain');

    expect(container).toBeInTheDocument();
  });
});
