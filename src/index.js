export default function vitalStatus(param) {
  if (param.health) {
    return 'health';
  }
  if (param.wounded) {
    return 'wounded';
  }
  return 'critical';
}

export const obj1 = {
  name: 'Vasilij',
  age: '44',
};

export const obj2 = {
  name: 'Vasilij',
  age: '44',
};
