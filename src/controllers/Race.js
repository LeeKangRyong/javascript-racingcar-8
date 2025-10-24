import { Input } from "../views/index.js";
import { RacingLogics } from "../models/RacingLogics.js";

const Race = {  
    async run() {
        const query = await Input.readQuery();
        const cnt = await Input.readCount();

        let arr = RacingLogics.splitNames(query);
        arr = RacingLogics.makeCount(arr);
    }
}

export { Race };