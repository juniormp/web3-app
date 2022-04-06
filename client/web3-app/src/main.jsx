import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { TransactionProvider } from './context/Transaction';

ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <link href="/dist/output.css" rel="stylesheet" />
      <App />
    </React.StrictMode>,
  </TransactionProvider>,
  document.getElementById('root')
)
