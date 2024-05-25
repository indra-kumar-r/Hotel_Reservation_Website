import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import "./styles/global.scss";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={""} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"account"} element={<Account />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
