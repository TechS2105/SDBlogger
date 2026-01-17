import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';
import Category from './components/Category/Category';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import RootLayout from './layouts/Rootlayouts';

function App(){

  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path='/' element={<RootLayout/>}>

        <Route index element={<Home/>}/>
        <Route path='articles' element={<Articles/>}/>
        <Route path='category' element={<Category/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>

      </Route>

    )

  )

  return(

    <>
    
     <RouterProvider router={router}></RouterProvider>

    </>

  );

}

export default App;