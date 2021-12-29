// 计算金额

const generateOutput = (text: string, output = '0') => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (output === '0') {
        return text;
      } else {
        return output + text;
      }
    case '·':
      if (output.indexOf('.') >= 0) {
        return output;
      }
      return output + '.';
    case '':
      if (output.length === 1) {
        return '';
      } else {
        return output.slice(0, -1) || '';
      }
    case '清零':
      return '';
    default:
      return '';
  }
};

export {generateOutput};
