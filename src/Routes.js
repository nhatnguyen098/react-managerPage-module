import React from 'react'
import Home from './components/homePage/Home'
import UserList from './components/userPage/list/UserList'
import NotFound from './components/NotFound'
import ProductsContainer from './containers/ProductsContainer'
import ProductsAction from './containers/ProductsAction'

const MenuRoutes = [
    {
        path: '/',
        exact: true,
        main : () => <Home/>
    },
    {
        path: '/products/list',
        exact: true,
        main : () => <ProductsContainer/>
    },
    {
        path: '/products/remove/:id_remove',
        exact: true,
        main : ({match,history}) => <ProductsAction match = {match} history = {history} />
    },
    {
        path: '/products/create',
        exact: true,
        main : ({match,history}) => <ProductsAction match = {match} history = {history} />
    },
    {
        path: '/products/create/:id',
        exact: false,
        main : ({history,match}) => <ProductsAction history = {history} match = {match} />
    },
    {
        path: '/users/list',
        exact: false,
        main : () => <UserList/>
    },
    {
        path: '',
        exact: false,
        main : () => <NotFound/>
    },
]
export default MenuRoutes
