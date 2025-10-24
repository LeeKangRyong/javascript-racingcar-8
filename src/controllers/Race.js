import { Input, Output } from "../views/index.js";
import { RacingLogics } from "../models/RacingLogics.js";

const Race = {  
    async run() {
        try {
            const query = await Input.readQuery();
            let arr = RacingLogics.splitNames(query);

            const cnt = await Input.readCount();

            arr = RacingLogics.makeCount(arr);

            Output.printDashResultHeader();
            for (let i = 0; i < cnt; i++) {
                arr = RacingLogics.dash(arr);
                Output.printDashResult(arr);
            }

            const winners = RacingLogics.winnerNames(arr);

            Output.printResult(winners);
        } catch (e) {
                throw Output.printError(e);
        }
    }
}

export { Race };