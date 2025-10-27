import { Output } from "../views/index.js";
import { RacingLogics } from "../models/RacingLogics.js";

const RacingServices = {
    dashAll(carList, dashCounts) {
        for (let i = 0; i < dashCounts; i++) {
            carList = RacingLogics.dash(carList);
            Output.printDashResult(carList);
        }

        return carList;
    }
}

export { RacingServices };