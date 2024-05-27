import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../MainContainer";
import About from "../components/About";
import App from "../App";
import PDFViewer from "../components/PDFViewer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
  },
  {
    path: "/resume",
    element: <PDFViewer />,
  },
]);

export default router;
