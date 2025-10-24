import { Input, Output } from "../views/index.js";
import { RacingLogics } from "../models/RacingLogics.js";

const Race = {  
    async run() {
        const query = await Input.readQuery();
        const cnt = await Input.readCount();

        let arr = RacingLogics.splitNames(query);
        arr = RacingLogics.makeCount(arr);

        Output.printSpace();
        for (let i = 0; i < cnt; i++) {
            arr = RacingLogics.dash(arr);
            Output.printDashResult(arr);
        }
    }
}

export { Race };