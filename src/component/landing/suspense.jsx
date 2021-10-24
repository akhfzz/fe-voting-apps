import Logo from '../../image/logo.png';
import './landing.scss'
import { lazy, Suspense } from 'react';
const LandingPage = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./landing")), 1000);
    });
  });


export function SuspenseProduct(){
    return(
        <div className='products'>
            <div className='child-products'>
                <img src={Logo} className='logo-product' alt='ZallApps'/>
            </div>
        </div>
    )
}

export function SuspenseLoading(){
    return(
        <Suspense fallback={<SuspenseProduct/>}>
            <LandingPage/>
        </Suspense>
    )
}