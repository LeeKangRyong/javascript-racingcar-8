import { Random } from "@woowacourse/mission-utils";
import { SEPARATOR, MODEL_ERROR } from "./utils/constants.js";
import { isOver5LettersExists } from "./utils/validate.js";

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
    }
}

export { RacingLogics };