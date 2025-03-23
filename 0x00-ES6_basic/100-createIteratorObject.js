export default function* createIteratorObject(report) {
    const emp = report.allEmployees;
    for (const idx in emp) {
        for (const name in emp[idx]) {
            yield emp[idx][name];
        }
    }
}
