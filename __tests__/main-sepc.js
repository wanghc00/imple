const add = require('../main');
const createMultilyTable = require('../main');

it ('should require two numbers multily table', () => {
    let firstNumber = 2;
    let secondNumber = 4;
    const result = createMultilyTable(firstNumber, secondNumber);
    expect(result).toBe("2*2=4\r\n" +
                                           "2*3=6  3*3=9\r\n" +
                                           "2*4=8  3*4=12  4*4=16");
});
