import { SEPARATOR, MODEL_ERROR } from "./utils/constants.js";
import { isOver5LettersExists } from "./utils/validate.js";

const RacingLogics = {
    splitNames(str) {
        const names = str.split(SEPARATOR.COMMA);
        if(isOver5LettersExists(names)) throw new Error(MODEL_ERROR.OVER);

        return names;
    }
}

export { RacingLogics };