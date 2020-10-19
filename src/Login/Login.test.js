
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './LogIn';
import { BrowserRouter } from 'react-router-dom';




it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
