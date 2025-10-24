import { Random } from "@woowacourse/mission-utils";
import { SEPARATOR, MODEL_ERROR } from "./utils/constants.js";
import { isOver2People, isOver5LettersExists } from "./utils/validate.js";

const RacingLogics = {
    splitNames(str) {
        const names = str.split(SEPARATOR.COMMA);
        if(isOver5LettersExists(names)) throw new Error(MODEL_ERROR.OVER);

        return names;
    },

    makeCount(arr) {
        return arr.map(v => [v, 0]);
    },

    dash(arr) {
        for (let str of arr) {
            let dashNum = Random.pickNumberInRange(0, 9);
            dashNum >=4 ? str[1]++ : str[1];
        }

        return arr;
    },

    winnerNames(arr) {
        const counts = arr.map(v => v[1]);

        const winnerCount = Math.max(...counts);
        const winner = arr.filter(v => v[1] === winnerCount);

        const names = winner.map(v => v[0]);

        const winners = isOver2People(names) ? names.join(SEPARATOR.WINNER_COMMA) : names[0];
    
        return winners;
    }
}

export { RacingLogics };