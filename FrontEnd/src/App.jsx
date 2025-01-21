import './App.css'
import Routes from './routes/Routes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  
const routes=createBrowserRouter(Routes);
  return (
    <>
    <RouterProvider  router={routes}/>
    </>
  )
}

export default App
