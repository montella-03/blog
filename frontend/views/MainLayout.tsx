import { AppLayout } from '@hilla/react-components/AppLayout.js';
import { DrawerToggle } from '@hilla/react-components/DrawerToggle.js';
import Placeholder from 'Frontend/components/placeholder/Placeholder';
import { useRouteMetadata } from 'Frontend/util/routing';
import React, {Suspense, useEffect} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './MainLayout.module.css';
import Login from "Frontend/views/login/Login";
import {LoginService} from "Frontend/generated/endpoints";

export default function MainLayout() {
  const currentTitle = useRouteMetadata()?.title ?? 'My App';
    const [isLogedIn, setIsLogedIn] = React.useState(false);
    useEffect(() => {
        LoginService.isLoggedIn().then((result) => {
            setIsLogedIn(result);
        });
    }, []);
    return (
      <>
          {isLogedIn ?
    <AppLayout primarySection="drawer">
      <div slot="drawer" className={css.drawer}>
        <header>
          <h1 className="text-l m-0">My App</h1>
          <nav>
            <NavLink to="/home">Hello World</NavLink>
            <NavLink to="/about">About</NavLink>
              <NavLink to={"/products"}></NavLink>
              <NavLink to="/customers">Customers</NavLink>
              <NavLink to="/orders">Orders</NavLink>
          </nav>
        </header>
      </div>

      <DrawerToggle slot="navbar" aria-label="Menu toggle"></DrawerToggle>
      <h2 slot="navbar" className="text-l m-0">
        {currentTitle}
      </h2>

      <Suspense fallback={<Placeholder />}>
        <Outlet />
      </Suspense>
    </AppLayout>
              :
              <Login/>}
      </>
  );
}
