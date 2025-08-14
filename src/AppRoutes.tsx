import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import AboutMe from "./components/AboutMe";
import MyWorks from "./components/MyWorks";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<Layout> <AboutMe /> <MyWorks/></Layout>}></Route>
        <Route path="*" element={<Navigate to="/"/>}></Route>
    </Routes>
  )
}

export default AppRoutes;