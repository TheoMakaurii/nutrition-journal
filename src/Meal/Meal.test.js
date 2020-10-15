
import React from 'react'
import ReactDOM from 'react-dom'
import Meal from './Meal'
import { BrowserRouter } from 'react-router-dom'




it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Meal />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
