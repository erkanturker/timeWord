const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });
  test("should midnight", () => {
    const time = timeWord("00:00");
    expect(time).toBe("midnight");
  });
  test("should twelve twelve am", () => {
    const time = timeWord("00:12");
    expect(time).toBe("twelve twelve am");
  });
  test("should one o'clock am", () => {
    const time = timeWord("01:00");
    expect(time).toBe("one o’clock am");
  });

  test("should six oh one am", () => {
    const time = timeWord("06:01");
    expect(time).toBe("six oh one am");
  });

  test("should six ten am", () => {
    const time = timeWord("06:10");
    expect(time).toBe("six ten am");
  });

  test("should six eighteen am", () => {
    const time = timeWord("06:18");
    expect(time).toBe("six eighteen am");
  });

  test("should six thirty am", () => {
    const time = timeWord("06:30");
    expect(time).toBe("six thirty am");
  });

  test("should ten thirty four am", () => {
    const time = timeWord("10:34");
    expect(time).toBe("ten thirty four am");
  });

  test("should noon", () => {
    const time = timeWord("12:00");
    expect(time).toBe("noon");
  });

  test("should twelve oh nine pm", () => {
    const time = timeWord("12:09");
    expect(time).toBe("twelve oh nine pm");
  });

  test("should eleven twenty three pm", () => {
    debugger;
    const time = timeWord("23:23");
    expect(time).toBe("eleven twenty three pm");
  });
});
