import {useRoutes,Link} from 'react-router-dom'
import router from './router';
const App = () => {
  
  const outlet = useRoutes(router);
  return (
    <div className='app'>
      {outlet}
    </div>
  )
}

export default App;
