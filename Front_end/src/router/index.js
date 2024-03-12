import { DefaultLayout } from '../layouts';
import { Home, Dashboard, Login, Signup,  Homepages, News, Bracelet, Contact, Agency, Seemore, Necklace, Earring, Promotional, introduce, Weddingring, Samplearticle, Samplearticle2, Samplearticle3, Allproducts,  } from '../pages';

export const PuclicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
        isPrivate: false,
    },
   
    {
        path: '/agency',
        component: Agency,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/contact',
        component: Contact,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/login',
        component: Login,
        layout: Login,
        isPrivate: false,
    },
    {
        path: '/vòngtay',
        component: Bracelet,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/gioithieu',
        component: introduce,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/bongtai',
        component: Earring,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/nhancuoi',
        component: Weddingring,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/khuyenmai',
        component: Promotional,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/daychuyen',
        component: Necklace,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/xemthem',
        component: Seemore,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/baivietmau',
        component: Samplearticle,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/baivietmau2',
        component: Samplearticle2,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/baivietmau3',
        component: Samplearticle3,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/tatcasanpham',
        component: Allproducts,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/news',
        component: News,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/home',
        component: Homepages,
        layout: Homepages,
        isPrivate: false,
    },
    {
        path: '/signup',
        component: Signup,
        layout: Signup,
        isPrivate: false,
    },
   
   
];
export const PrivateRoutes = [
    {
        path: '/admin',
        component: Dashboard,
        layout: DefaultLayout,
        isPrivate: true,
    },
];

