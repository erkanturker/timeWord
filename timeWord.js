var mapping = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

function numberToText(number) {
  const getTextNumber = mapping[number];

  if (getTextNumber) {
    return getTextNumber;
  }

  if (number.startsWith("0")) {
    return mapping[number.charAt(1)];
  }

  let ones = parseInt(number) % 10;
  let tens = parseInt(number) - ones;
  return `${mapping[tens]} ${mapping[ones]}`;
}

function getHourText(hour) {
  if (hour.startsWith("00")) {
    hour = 12;
  }

  hour = parseInt(hour) > 12 ? (parseInt(hour) - 12).toString() : hour;

  return numberToText(hour);
}

function getMinutesText(minutes) {
  let textMinutues;

  if (minutes.startsWith("00")) {
    textMinutues = ` o’clock`;
  } else {
    const isMinLessThenTen = minutes.startsWith("0") ? " oh" : "";
    textMinutues = `${isMinLessThenTen} ${numberToText(minutes)}`;
  }
  return textMinutues;
}

function getDayPeriod(hour) {
  if (hour.startsWith("00")) {
    return "am";
  }
  return parseInt(hour) > 11 ? "pm" : "am";
}

function timeWord(time) {
  if (time === "00:00") return "midnight";
  if (time === "12:00") return "noon";

  const splitTime = time.split(":");
  const hour = splitTime[0];
  const minutes = splitTime[1];

  const dayPeriod = getDayPeriod(hour);
  const texthour = getHourText(hour);
  const textMinutues = getMinutesText(minutes);

  return `${texthour}${textMinutues} ${dayPeriod}`;
}

module.exports = timeWord;
