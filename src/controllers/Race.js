import { Input, Output } from "../views/index.js";
import { RacingLogics } from "../models/RacingLogics.js";

const Race = {  
    async run() {
        try {
            const carNames = await Input.readQuery();
            let carList = RacingLogics.splitNames(carNames);

            const dashCounts = await Input.readCount();

            carList = RacingLogics.makeCount(carList);

            Output.printDashResultHeader();
            for (let i = 0; i < dashCounts; i++) {
                carList = RacingLogics.dash(carList);
                Output.printDashResult(carList);
            }

            const winners = RacingLogics.winnerNames(carList);

            Output.printResult(winners);
        } catch (e) {
                throw Output.printError(e);
        }
    }
}

export { Race };