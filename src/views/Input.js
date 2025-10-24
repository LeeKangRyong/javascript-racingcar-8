import { Console } from "@woowacourse/mission-utils";
import { isEmpty } from "./utils/validate.js";
import { VIEW_ERROR, QUESTION } from "./utils/constants.js";

const Input = {
    async readQuery() {
        const query = await Console.readLineAsync(QUESTION.NAME);
        if (isEmpty(query)) {
            throw new Error(VIEW_ERROR.EMPTY);
        }

        return query;
    }
}

export { Input };