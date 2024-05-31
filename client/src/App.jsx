import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import "./styles/global.scss";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Redirect from "./pages/Redirect";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={""} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"account"} element={<Account />} />
        </Route>
        <Route path={"redirect"} element={<Redirect />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
