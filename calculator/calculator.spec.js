const { add } = require("./calculator");

describe("calculator.js", () => {
  describe("calculator", () => {
    describe("add()", () => {
      it("should add of 2 numbers", () => {
        expect(add(2, 2)).toBe(4);
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 2)).toBe(1);
        expect(add(0, 0)).toBe(0);
      });

      it("return passed value if only one value provided", () => {
        expect(add(1)).toBe(1);
        expect(add(10)).toBe(10);
        expect(add(230)).toBe(230);
      });

      it("should calculate the sum of any number of arguments seperated by comma", () => {
        expect(add(1, 2, 3)).toBe(6);
        expect(add(1, 2, 3, 4)).toBe(10);
        expect(add([1, 2, 3])).toBe(6);
      });
    });

    it("should return a concat string", () => {
      expect(add(2, "2")).toBe("22");
      expect(add(2, "5")).toBe("25");
    });
  });

  it.todo("passing strings");
  it.todo("not passing values");
  it.todo("passing null or undefined or objexts");
  it.todo("passing number and string together");
});

describe("honest funtion", () => {
  expect(honest()).toBeTruthy();

  function honest() {
    return true;
  }

  test("an honest function should always tell the truth", () => {
    expect(honest()).toBeTruthy();
  });
});
// console.log("The sum is: ", sum);

// // test case
// test(" adds 2 and 2", () => {
//   // Arrange
//   const expected = 4;
//   const value1 = 2;
//   const value2 = 2;
//   // Act
//   const sum = add(value1, value2);
//   // Assert
//   expect(sum).toEqual(expected);
// });
