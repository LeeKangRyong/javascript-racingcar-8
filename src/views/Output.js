import { Console } from "@woowacourse/mission-utils";
import { RESULT } from "./utils/constants.js";
import { ERROR_PREFIX } from "../shared/utils/constants.js";

const Output = {
    printSpace() {
        Console.print(RESULT.SPACE);
    },

    printDashResultHeader() {
        this.printSpace();
        Console.print(RESULT.RACE);
    },
    
    printDashResult(carList) {
        for (let carObj of carList) {
            let dashDistance = RESULT.CAR.repeat(carObj.dashCount);
            Console.print(`${carObj.name} : ${dashDistance}`);
        }
        this.printSpace();
    },

    printResult(winners) {
        Console.print(`최종 우승자 : ${winners}`);
    },
    
    printError(error) {
        let errorMessage = error.message;

        if (!errorMessage.startsWith(ERROR_PREFIX)) {
            errorMessage = `${ERROR_PREFIX} ${errorMessage}`;
        }

        Console.print(errorMessage);
    }
}

export { Output };