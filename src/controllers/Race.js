import { Input } from "../views/index.js";
import { RacingLogics } from "../models/RacingLogics.js";

const Race = {  
    async run() {
        const query = await Input.readQuery();
        const arr = RacingLogics.splitNames(query);
        console.log(arr);
    }
}

export { Race };