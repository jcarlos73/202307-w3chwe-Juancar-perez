import AppComponent from "./components/AppComponent/AppComponent.js";

const appContainer = document.querySelector(".container");

if (!appContainer) {
  throw new Error("App container is missing");
}

const appComponent = new AppComponent(appContainer);
appComponent.render();
