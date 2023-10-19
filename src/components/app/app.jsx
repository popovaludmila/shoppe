import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/layout";
import { HomePage } from "../../pages";

export const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout /> }>
        <Route index element={<HomePage />} />
      </Route>
     </Routes>
    </>
  );
};
