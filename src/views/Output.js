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
    
    printDashResult(arr) {
        for (let car of arr) {
            let dashDistance = RESULT.CAR.repeat(car[1]);
            Console.print(`${car[0]} : ${dashDistance}`);
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