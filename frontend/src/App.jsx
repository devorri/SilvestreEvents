import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./pages/Login/login";
// import SignUp from "./pages/SignUp/SignUp";
import FeaturedServices from "./DynamicPages/FeaturedServices";
import ServicesManagement from "./DynamicPages/ServicesManagement ";

import VerificationLink from "./pages/Login/VerificationLink";
import AdminDashboard from "./MantineComponents/AdminDashboard/AdminDashboard";
import CalendarAvailability from "./MantineComponents/AdminDashboard/CalendarAvailability";
import GeneralSetting from "./pages/GeneralSetting";
import UserRoleManager from "./pages/UserRoleManager";
import CalendarTUI from "./pages/CalendarTUI";

import PCard from "./components/ProductComponents/PCard";
import PCardContainer from "./components/ProductComponents/PCardContainer";
import BookConsultation from "./components/BookConsultation";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import QuotationsTable from "./pages/UserDashboard/QuotationTable";
import PaymentsTableUser from "./pages/UserDashboard/PaymentsTableUser";
import Messaging from "./pages/Messaging/Messaging";
import MyLandingPage from "./components/MyLandingPage";
import WithHero from "./components/WithHero";
import ServicesOfferedPage from "./components/ServicesOfferedPage";
import Resource from "./components/ProductComponents/Resource";
import PricingPage from "./components/PricingPage";
import Customization from "./MantineComponents/mantine/Customization";
import Login from "./components/ProductComponents/LoginSignup/Login";
import SignUp from "./components/ProductComponents/LoginSignup/SignUp";
import NewsFeed from "./components/NewsFeedComponents/NewsFeed";
import ServiceViewing from "./DynamicPages/ServiceViewing";
import Customize from "./components/BookingProcess/Customize";
import MenuBundleManagement from "./DynamicPages/MenuBundleManagement";
import Reports from "./DynamicPages/Reports";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/reports" element={<Reports />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/menu-bundle-management"
            element={<MenuBundleManagement />}
          ></Route>
          <Route path="/customization" element={<Customization />}></Route>
          <Route path="/verify" element={<VerificationLink />}></Route>
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/manage-calendar" element={<CalendarAvailability />} />
          <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
          <Route path="general-setting" element={<GeneralSetting />}></Route>
          <Route
            path="/services"
            element={
              <FeaturedServices
                onSuccess={(newService) => console.log("Created:", newService)}
              />
            }
          ></Route>
          <Route
            path="/manage-services"
            element={<ServicesManagement />}
          ></Route>
          {/* <Route path="/services-offered" element={<ServiceViewing />}></Route> */}

          <Route
            path="user-role-settings"
            element={<UserRoleManager></UserRoleManager>}
          ></Route>
          <Route path="calendar" element={<CalendarTUI></CalendarTUI>}></Route>
          <Route path="/pcard" element={<PCard />}></Route>
          <Route path="/getquoute" element={<PCardContainer />}></Route>
          <Route path="/book-consultation" element={<BookConsultation />} />

          <Route path="*" element={<div>Page not found</div>} />
          <Route path="/" element={<MyLandingPage />}>
            <Route path="/book-now" element={<Customize />} />
            <Route path="community" element={<NewsFeed />} />
            <Route path="services-offered" element={<ServiceViewing />}></Route>
            <Route index element={<WithHero />} />
            <Route path="services" element={<ServicesOfferedPage />} />
            <Route path="resources" element={<Resource />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="getquote" element={<PCardContainer />}></Route>
            <Route path="/user-dashboard" element={<UserDashboard />}>
              <Route index element={<div>Welcome to Dashboard</div>} />
              <Route path="quotations" element={<QuotationsTable />} />
              <Route path="payments" element={<PaymentsTableUser />} />
              <Route path="messages" element={<Messaging></Messaging>} />

              <Route path="calendar" element={<div>Calendar</div>}></Route>
              <Route
                path="settings"
                element={<GeneralSetting></GeneralSetting>}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </>
    </>
  );
}

export default App;
