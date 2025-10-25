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
    
    printDashResult(list) {
        for (let car of list) {
            let dashDistance = RESULT.CAR.repeat(car.dashCount);
            Console.print(`${car.name} : ${dashDistance}`);
        }
        this.printSpace();
    },

    printResult(names) {
        Console.print(`최종 우승자 : ${names}`);
    },

    printError(error) {
        const errorMessage = `[ERROR] ${error.message}`;
        Console.print(errorMessage);
        return new Error(errorMessage);
    }
}

export { Output };