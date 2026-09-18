const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString.at(i);
  }

  return normalizedString === reversedString;
};

const toNum = (string) => {
  const newString = string.toString();
  let nums = '';

  for (let i = 0; i < newString.length; i++) {
    const char = newString[i];
    const parsedChar = parseInt(char, 10);

    if (!Number.isNaN(parsedChar)) {
      nums += char;
    }
  }

  if (nums === '') {
    return NaN;
  }

  return parseInt(nums, 10);
};
