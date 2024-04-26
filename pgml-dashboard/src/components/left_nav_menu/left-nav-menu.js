import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [
    "link",
  ];

  // When page reloads we need to set the left nav to the current window 
  // location since left nave is turbo permanent. Trigger this on event 
  // rather than on connect since on connect() will fire prior to backend 
  // redirects. 
  connect() {
    this.callback = () => {
      this.setLeftNavToLocation();
    }

    document.addEventListener("turbo:load", this.callback);
  }

  // Find link element in the left nav that matches the current window 
  // location and set to active
  setLeftNavToLocation() {
    this.removeAllActive();

    let tag = "a[href='" + window.location.pathname + window.location.search + "']";
    let element = this.element.querySelector(tag);
    
    if (element) {
      element.classList.add("active");
    }
  }

  // Helper function to quickly remove all state styling
  removeAllActive() {
    for (let i = 0; i < this.linkTargets.length; i++) {
      this.linkTargets[i].classList.remove("active");
    }
  }

  // Remove event listener when controller is disconnected
  disconnect() {
    document.removeEventListener("turbo:load", this.callback);
  }
}