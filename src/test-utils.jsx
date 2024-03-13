import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { TodoProvider } from './contexts/TodoListContext';

function render(
  ui,
  {
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <TodoProvider>{children}</TodoProvider>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
