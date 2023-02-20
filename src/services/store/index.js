import { createContext, useContext } from "react";

import PDFViewerStore from "./pdf-viewer/PDFViewerStore";

class Store {
  constructor() {
    this.viewerStore = new PDFViewerStore(this);
  }
}

export const store = new Store();

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);
