export default function guardrail(mathFunction) {
  let res;

  try {
    res = mathFunction();
  } catch (err) {
    res = err.toString();
  }
  return [res, 'Guardrail was processed'];
}
