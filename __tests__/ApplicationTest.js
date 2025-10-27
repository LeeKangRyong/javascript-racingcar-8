import App from "../src/App.js";
import { VIEW_ERROR } from "../src/views/utils/constants.js";
import { MODEL_ERROR } from "../src/models/utils/constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const errorMessage = (error) => {
  return new RegExp(`^\\[ERROR\\] ${error}$`);
};

describe("E2E 테스트", () => {
  test("기능 테스트 1 : 우승자 1명", async () => {
    // given
    const counts = [4, 3, 2, 1];
    const inputs = ["pobi,edy,krong,rupi", "1"];
    const logs = ["pobi : -", "edy : ", "krong : ", "rupi : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(counts);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 2 : 우승자 3명", async () => {
    // given
    const counts = [6, 4, 5, 1];
    const inputs = ["pobi,edy,krong,rupi", "1"];
    const logs = ["pobi : -", "edy : -", "krong : -", "rupi : ", "최종 우승자 : pobi, edy, krong"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(counts);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 3 : 우승자 1명 && 시도횟수 3회", async () => {
    // given
    const counts = [4, 2, 1, 1, 4, 2, 3, 1, 4, 3, 1, 1];
    const inputs = ["pobi,edy,krong,rupi", "3"];
    const logs = ["pobi : ---", "edy : ", "krong : ", "rupi : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(counts);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 4 : 우승자 2명 && 시도횟수 3회", async () => {
    // given
    const counts = [8, 5, 3, 1, 7, 2, 6, 1, 2, 9, 1, 3];
    const inputs = ["pobi,edy,krong,rupi", "3"];
    const logs = ["pobi : --", "edy : --", "krong : -", "rupi : ", "최종 우승자 : pobi, edy"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(counts);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트 1 : 아무 이름도 입력하지 않았을 시", async () => {
    // given
    const inputs = [""];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(errorMessage(VIEW_ERROR.EMPTY));
  });

  test("예외 테스트 2 : 5글자 초과하는 이름 발생 시", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(errorMessage(MODEL_ERROR.OVER));
  });

  test("예외 테스트 3 : 시도횟수가 양의 정수가 아닐 시", async () => {
    // given
    const counts = "wrongNumber";
    const inputs = ["pobi,edy", counts];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    expect(app.run()).rejects.toThrow(errorMessage(VIEW_ERROR.NON_INTEGER_NUMBER));
  });

  test("예외 테스트 4 : 비어있는 이름이 있을 시", async () => {
    // given
    const inputs = ["pobi,edy,"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    expect(app.run()).rejects.toThrow(errorMessage(MODEL_ERROR.EMPTY_NAME));
  });

  test("예외 테스트 5 : 같은 이름이 있을 시", async () => {
    // given
    const inputs = ["pobi,pobi"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    expect(app.run()).rejects.toThrow(errorMessage(MODEL_ERROR.SAME_NAME));
  });
});
