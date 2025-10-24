import { Race } from "./controllers/Race.js";

class App {
  async run() {
    await Race.run();
  }
}

export default App;
