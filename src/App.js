import EventController from "./controller/EventController.js";

class App {
  constructor() {
    this.event = new EventController();
  }
  async run() {
    await this.event.playEvent();
  }
}

export default App;
