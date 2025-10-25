import { Console } from "@woowacourse/mission-utils";
import { RESULT } from "./utils/constants.js";

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
        const errorMessage = `[ERROR] ${error.message}`;
        Console.print(errorMessage);
        return new Error(errorMessage);
    }
}

export { Output };