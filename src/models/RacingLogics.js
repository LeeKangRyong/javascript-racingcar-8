import { Random } from "@woowacourse/mission-utils";
import { SEPARATOR, MODEL_ERROR } from "./utils/constants.js";
import { isOver2People, isOver5LettersExists } from "./utils/validate.js";

const RacingLogics = {
    splitNames(carNames) {
        const names = carNames.split(SEPARATOR.COMMA);
        if(isOver5LettersExists(names)) throw new Error(MODEL_ERROR.OVER);

        return names;
    },

    makeCount(carList) {
        const newCarList = [];
        for (let carName of carList) {
            let carObj = new Object();
            carObj.name = carName;
            carObj.dashCount = 0;

            newCarList.push(carObj);
        }
        return newCarList;
    },

    dash(carList) {
        for (let carObj of carList) {
            let dashNum = Random.pickNumberInRange(0, 9);
            dashNum >=4 ? carObj.dashCount++ : null;
        }

        return carList;
    },

    winnerNames(carList) {
        const counts = carList.map(v => v.dashCount);

        const winnerCount = Math.max(...counts);
        const winner = carList.filter(v => v.dashCount === winnerCount);

        const names = winner.map(v => v.name);

        const winners = isOver2People(names) ? names.join(SEPARATOR.WINNER_COMMA) : names[0];
    
        return winners;
    }
}

export { RacingLogics };