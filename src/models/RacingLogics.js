import { Random } from "@woowacourse/mission-utils";
import { SEPARATOR, MODEL_ERROR } from "./utils/constants.js";
import { isOver2People, isOver5LettersExists } from "./utils/validate.js";
import { WoowaError } from "../shared/utils/WoowaError.js";

const RacingLogics = {
    splitNames(carNames) {
        const names = carNames.split(SEPARATOR.COMMA);
        if(isOver5LettersExists(names)) throw new WoowaError(MODEL_ERROR.OVER);

        return names;
    },

    makeCount(carList) {
        const newCarList = carList.map(carName => ({
            name: carName,
            dashCount: 0
        }));

        return newCarList;
    },

    dash(carList) {
        for (let carObj of carList) {
            let dashNum = Random.pickNumberInRange(0, 9);
            if (dashNum >= 4) carObj.dashCount++;
        }

        return carList;
    },

    findWinners(carList) {
        const maxCount = this.getMaxDashCount(carList);
        return carList.filter(carObj => carObj.dashCount === maxCount);
    },

    getMaxDashCount(carList) {
        const counts = carList.map(carObj => carObj.dashCount);
        return Math.max(...counts);
    },

    formatWinnerNames(winners) {
        const names = winners.map(carObj => carObj.name);
        if (isOver2People(names)) return names.join(SEPARATOR.WINNER_COMMA);
        return names[0];
    },

    getWinnerNames(carList) {
        const winners = this.findWinners(carList);
        return this.formatWinnerNames(winners);
    }
}

export { RacingLogics };