import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import AboutMe from "./components/AboutMe/AboutMe";
import MyWorks from "./components/MyWorks/MyWorks";
import CluckyProject from "./components/IndividualDescriptions/Clucky/CluckyProject";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout headerButtons={["aboutMe", "myWorks", "skills", "contact"]}>
            <AboutMe /> <MyWorks />
          </Layout>
        }
      ></Route>
      <Route
        path="/Clucky-Project"
        element={
          <Layout
            deleteHero
            headerButtons={["home", "features", "moreDetails", "contact"]}
          >
            <CluckyProject />
          </Layout>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

export default AppRoutes;
