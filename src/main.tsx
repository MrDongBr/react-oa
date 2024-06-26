import ReactDOM from 'react-dom/client'
import 'reset-css'
import App from './App.tsx'
import '@/styles/app.scss'
import {BrowserRouter} from 'react-router-dom'
import "@/mock/index";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
