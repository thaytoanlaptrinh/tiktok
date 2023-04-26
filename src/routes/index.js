import Folowing from '~/pages/Folowing';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },

    {
        path: '/flowing',
        component: Folowing,
    },
    {
        path: '/profile',
        component: Profile,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
