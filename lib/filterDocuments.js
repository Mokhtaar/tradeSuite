// // export function filterDocuments(documents, status) {
// //   let array = [];
// //   documents.map((obj) => {
// //     const values = Object.entries(obj);
// //     const { company } = obj;

// //     values.map(([key, value]) =>
// //       value && value.hasOwnProperty("status") && value.status === status
// //         ? array.push({ [key]: value, company: company.name })
// //         : ""
// //     );
// //   });
// //   return array;
// // }

// export function filterDocuments(documents, status) {
//   let array = [];

//   documents.forEach((obj) => {
//     const { company } = obj;
//     const existingIndex = array.findIndex(
//       (item) => item.company === company.name
//     );

//     if (existingIndex !== -1) {
//       // Company already exists in the array, add the document to the existing company
//       const existingCompany = array[existingIndex];
//       const values = Object.entries(obj);
//       values.forEach(([key, value]) => {
//         if (
//           value &&
//           value.hasOwnProperty("status") &&
//           value.status === status
//         ) {
//           existingCompany[key] = value;
//         }
//       });
//     } else {
//       // Company doesn't exist in the array, add a new row
//       const newRow = { company: company.name };
//       const values = Object.entries(obj);
//       values.forEach(([key, value]) => {
//         if (
//           value &&
//           value.hasOwnProperty("status") &&
//           value.status === status
//         ) {
//           newRow[key] = value;
//         }
//       });
//       array.push(newRow);
//     }
//   });

//   return array;
// }

export function filterDocuments(documents, status) {
  let result = [];

  documents.forEach((obj) => {
    const { company, companyID, ...rest } = obj;
    const existingIndex = result.findIndex(
      (item) => item.company === company.name
    );

    if (existingIndex !== -1) {
      // Company already exists in the array, add the document to the existing company
      const existingCompany = result[existingIndex];
      const values = Object.entries(rest);
      values.forEach(([key, value]) => {
        if (
          value &&
          value.hasOwnProperty("status") &&
          value.status === status
        ) {
          existingCompany.docs.push({ [key]: value });
        }
      });
    } else {
      // Company doesn't exist in the array, add a new row
      const newRow = { company: company.name, companyID, docs: [] };
      const values = Object.entries(rest);
      values.forEach(([key, value]) => {
        if (
          value &&
          value.hasOwnProperty("status") &&
          value.status === status
        ) {
          newRow.docs.push({ [key]: value });
        }
      });
      result.push(newRow);
    }
  });

  return result;
}
