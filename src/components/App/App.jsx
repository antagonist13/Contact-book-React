
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';

const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"))
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"))
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"))
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"))


export default function App() {
    
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (<p>Refreshing user</p>) : (
<Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/tasks" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  )
}