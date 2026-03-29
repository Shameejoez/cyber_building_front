import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { WorkTable } from './pages/WorkTable.tsx'
import { LoginPage } from './features/auth/LoginPage.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'


const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <WorkTable/>}
  ]
}, {
  path: '/auth',
  element: <LoginPage />
}

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
