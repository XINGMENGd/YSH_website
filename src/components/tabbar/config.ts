import Home from '@/images/tabBar/home.svg';
import HomeActive from '@/images/tabBar/home-active.svg';
import My from '@/images/tabBar/my.svg';
import MyActive from '@/images/tabBar/my-active.svg';

export const tabBarConfig = [
    {
        name: '首页',
        icon: Home,
        active: HomeActive,
        route: '/home',
        title: '首页'
    },
    {
        name: 'useStore',
        icon: My,
        active: MyActive,
        route: '/useStore',
        title: 'useStore'
    },
    {
        name: '我的',
        icon: My,
        active: MyActive,
        route: '/my',
        title: '我的'
    }
];