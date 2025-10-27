import { Input, Output } from "../views/index.js";
import { RacingLogics } from "../models/RacingLogics.js";
import { RacingServices } from "../services/RacingServices.js";

const Race = {  
    async run() {
        try {
            const carNames = await Input.readQuery();
            let carList = RacingLogics.splitNames(carNames);

            const dashCounts = await Input.readCount();

            carList = RacingLogics.makeCount(carList);

            Output.printDashResultHeader();
            carList = RacingServices.dashAll(carList, dashCounts);

            const winners = RacingLogics.getWinnerNames(carList);

            Output.printResult(winners);
        } catch (e) {
            Output.printError(e);
            throw e;
        }
    }
}

export { Race };