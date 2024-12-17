// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>

    {/* <StrictMode> */}
      <App />
    {/* </StrictMode> */}
    </Provider>
  </BrowserRouter>
);
