const camelToTitle = (key) => {
  // Convert camelCase to Title Case with spaces
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
};

const titleToCamel = (titleCaseString) => {
  // Convert Title Case with spaces to camelCase
  return titleCaseString
    .replace(/\s+(.)/g, (match, char) => char.toUpperCase())
    .replace(/^\w/, (firstChar) => firstChar.toLowerCase());
};

const formatObject = (docs) => {
  const adjustedObject = {};
  for (const key in docs) {
    if (
      key !== "company" &&
      key !== "companyID" &&
      key !== "createdAt" &&
      key !== "updatedAt" &&
      key !== "id"
    ) {
      const adjustedKey = camelToTitle(key);
      adjustedObject[adjustedKey] = docs[key];
    }
  }
  return adjustedObject;
};

export { camelToTitle, formatObject, titleToCamel };
