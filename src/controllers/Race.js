import { Input } from "../views/index.js";
import { RacingLogics } from "../models/RacingLogics.js";

const Race = {  
    async run() {
        const query = await Input.readQuery();
        const arr = RacingLogics.splitNames(query);

        const cnt = await Input.readCount();
    }
}

export { Race };