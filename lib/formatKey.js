export function formatKey(key) {
  // Convert camelCase to Title Case with spaces
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
}
