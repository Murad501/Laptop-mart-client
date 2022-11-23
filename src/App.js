import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';

function App() {
  return (
    <div>
      <div className='text-black max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
    </div>
  );
}

export default App;
