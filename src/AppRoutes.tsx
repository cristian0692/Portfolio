import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import AboutMe from "./components/AboutMe";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<Layout> <AboutMe /></Layout>}></Route>
        <Route path="*" element={<Navigate to="/"/>}></Route>
    </Routes>
  )
}

export default AppRoutes;