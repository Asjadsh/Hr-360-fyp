import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import Attendance from "./screens/Attendance";
import AddAttendance from "./screens/AddAttendance";
import Calendar1 from "./screens/Calendar";
import UsersScreen from "./screens/UsersScreen";
import Feedback from "./screens/Feedback";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./Redux/Actions/ProductActions";
import { listOrders } from "./Redux/Actions/OrderActions";
import Register from "./screens/Register";
import EmpHomeScreen from "./screens/EmpHomeScreen"
import EmpFeedback from "./screens/EmpFeedback"
import EmpCalendar1 from "./screens/EmpCalendar";
import ClientHomeScreen from "./screens/ClientHomeScreen"
import ClientFeedback from "./screens/ClientFeedback"


function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/" component={HomeScreen} exact />
          <PrivateRouter path="/register" component={Register} />
          <PrivateRouter path="/products" component={ProductScreen} />
          <PrivateRouter path="/orders" component={OrderScreen} />
          <PrivateRouter path="/order/:id" component={OrderDetailScreen} />
          <PrivateRouter path="/addproduct" component={AddProduct} />
          <PrivateRouter path="/users" component={UsersScreen} />
          <PrivateRouter path="/attendance" component={Attendance} />
          <PrivateRouter path="/addattendance" component={AddAttendance} />
          <PrivateRouter path="/Calendar" component={Calendar1} />
          <PrivateRouter path="/Feedback" component={Feedback} />
          <PrivateRouter path="/emp" component={EmpHomeScreen} exact />
          <PrivateRouter path="/EmpFeedback" component={EmpFeedback} />
          <PrivateRouter path="/EmpCalendar" component={EmpCalendar1} />
          <PrivateRouter path="/client" component={ClientHomeScreen} exact />
          <PrivateRouter path="/ClientFeedback" component={ClientFeedback} />

          <PrivateRouter
            path="/product/:id/edit"
            component={ProductEditScreen}
          />
          <Route path="/login" component={Login} />
          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;