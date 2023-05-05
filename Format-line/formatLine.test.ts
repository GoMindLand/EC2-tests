import { formatLine } from "./formatLine";

describe("Format line", () => {
  it("Fixed tests", () => {
    expect(formatLine([])).toStrictEqual([]);
    expect(formatLine(["a", "b", "c"])).toStrictEqual(["1: a", "2: b", "3: c"]);
    expect(formatLine(["", "", "", "", ""])).toStrictEqual([
      "1: ",
      "2: ",
      "3: ",
      "4: ",
      "5: ",
    ]);
  });
});
