import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PDFViewer from "../components/PDFViewer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <PDFViewer />,
  },
]);

export default router;
