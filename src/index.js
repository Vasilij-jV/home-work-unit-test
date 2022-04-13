export default function vitalStatus(param) {
  if (param.health) {
    return 'health';
  }
  if (param.wounded) {
    return 'wounded';
  }
  return 'critical';
}

let a = 34;