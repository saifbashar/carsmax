// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import ExploreCars from './Pages/Cars/ExploreCars/ExploreCars';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';

import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHeader from './Pages/Dashboard/DashboardHeader/DashboardHeader';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Review from './Pages/Dashboard/Review/Review';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import PlaceOrder from './Pages/Order/PlaceOrder/PlaceOrder';
import Pay from './Pages/Pay/Pay';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
            </Route>
            <Route path="/about">
              <Header></Header>
              <About></About>
            </Route>
            <Route path="/register">
              <Header></Header>
              <Register></Register>
            </Route>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
            </Route>

            <Route path="/explore">
              <Header></Header>
              <ExploreCars></ExploreCars>
            </Route>

            <PrivateRoute exact path="/dashboard">
              <DashboardHeader></DashboardHeader>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/manageProducts">
              <DashboardHeader></DashboardHeader>
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/myOrders">
              <DashboardHeader></DashboardHeader>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/addProduct">
              <DashboardHeader></DashboardHeader>
              <AddProducts></AddProducts>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/review">
              <DashboardHeader></DashboardHeader>
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:id">
              <Header></Header>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/manageOrder">
              <DashboardHeader></DashboardHeader>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/makeAdmin">
              <DashboardHeader></DashboardHeader>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/pay">
              <DashboardHeader></DashboardHeader>
              <Pay></Pay>
            </PrivateRoute>
            {/* <PrivateRoute path="/pay" component={Pay} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
