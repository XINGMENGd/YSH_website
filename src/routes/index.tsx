import { lazy } from "react";
import lazyLoad from '@/routes/utils/lazyLoad'
import { RouteObject, createHashRouter, RouterProvider } from 'react-router-dom';
import KeepAlive from "@/components/keepalive";
import RootBoundary from "@/components/rootBoundary";

// 路由映射表
const routes: RouteObject[] = [
  {
    path: '/',
    element: <KeepAlive />,
    children: [
      {
        path: '/home',
        element: lazyLoad(lazy(() => import('@/pages/home/index'))),
        errorElement: <RootBoundary />,
      },
      {
        path: '/list',
        element: lazyLoad(lazy(() => import('@/pages/list/index'))),
        errorElement: <RootBoundary />,
      },
      {
        path: '/virtuaList',
        element: lazyLoad(lazy(() => import('@/pages/virtuaList/index'))),
        errorElement: <RootBoundary />,
      },
    ]
  },
  {
    path: '/useStore',
    element: lazyLoad(lazy(() => import('@/pages/useStore/index')))
  },
  {
    path: '/my',
    element: lazyLoad(lazy(() => import('@/pages/my/index')))
  },

  // 路由重定向
  {
    path: '/',
    element: lazyLoad(lazy(() => import('@/pages/home/index'))),
    errorElement: <RootBoundary />
  }
];

export default function () {
  const router = createHashRouter(routes);
  return <RouterProvider router={router}></RouterProvider>
}
