import { useRef, useEffect } from "react";
import Viewer from "@pdftron/pdfjs-express";

import { useStore } from "../../services/store";

function PDFViewer() {
  const viewer = useRef(null);
  const { viewerStore } = useStore();

  useEffect(() => {
    const addViewer = async () => {
      const instance = await Viewer(
        {
          path: "/webviewer/lib",
          initialDoc: "/files/sample.pdf",
        },
        viewer.current
      );

      viewerStore.setInstance(instance);
    };

    addViewer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div style={{ height: "700px" }} ref={viewer} />;
}

export default PDFViewer;
