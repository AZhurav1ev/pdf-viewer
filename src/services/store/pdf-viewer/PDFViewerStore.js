import { makeAutoObservable } from "mobx";

class PDFViewerStore {
  instance = null;
  rootStore = null;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setInstance(instance) {
    this.instance = instance;
    // starting from this line we'll receive an error and this.instance would be equal to null.
    console.log("instance", instance);
  }
}
export default PDFViewerStore;
