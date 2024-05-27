import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PDFViewer from "../components/PDFViewer";

const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/resume",
    element: <PDFViewer />,
  },
]);

export default router;
