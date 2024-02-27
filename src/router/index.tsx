import { useRoutes } from 'react-router-dom'
import Layout from '../components/layout'
import MainPage from '../pages/(root)'

const Routes = () => {
  return useRoutes([
    {
      element: <Layout />,
      children: [{ path: '/', element: <MainPage /> }],
    },
  ])
}
export default Routes
