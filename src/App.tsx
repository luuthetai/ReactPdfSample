import { pdfjs } from "react-pdf";
import PDFViewer from "./PDFViewer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <PDFViewer fileUrl={"./origin.pdf"} />

      <PDFViewer fileUrl={"./sample.pdf"} />
    </div>
  );
}

export default App;
