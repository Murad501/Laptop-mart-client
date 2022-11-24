import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';

function App() {
  return (
    <div>
      <div className='text-black max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    <Toaster />
    </div>
    </div>
  );
}

export default App;
