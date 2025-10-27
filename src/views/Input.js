import { Console } from "@woowacourse/mission-utils";
import { isEmpty, isPositiveIntegerNum } from "./utils/validate.js";
import { VIEW_ERROR, QUESTION } from "./utils/constants.js";
import { WoowaError } from "../shared/utils/WoowaError.js";

const Input = {
    async readQuery() {
        const query = await Console.readLineAsync(QUESTION.NAME);
        if (isEmpty(query)) throw new WoowaError(VIEW_ERROR.EMPTY);
        
        return query;
    },

    async readCount() {
        const cnt = await Console.readLineAsync(QUESTION.COUNT);
        if (!isPositiveIntegerNum(cnt)) throw new WoowaError(VIEW_ERROR.NON_POSITIVE_INTEGER_NUMBER);

        return +cnt;
    }
}

export { Input };