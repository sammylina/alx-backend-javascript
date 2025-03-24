export default function* createIteratorObject(report) {
  const emp = report.allEmployees;
  for (const idx in emp) {
    if (Object.hasOwn(emp, idx)) {
      for (const name in emp[idx]) {
        if (Object.hasOwn(emp[idx], name)) {
          yield emp[idx][name];
        }
      }
    }
  }
}
