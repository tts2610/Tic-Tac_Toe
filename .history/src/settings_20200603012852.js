// export const styles = {
//   grid: {
//     paddingLeft: 0,
//     paddingRight: 0,
//   },
//   row: {
//     marginLeft: 0,
//     marginRight: 0,
//   },
//   col: {
//     paddingLeft: 0,
//     paddingRight: 0,
//   },
// };

export const board = [
  {
    id: [0, 0],
    value: "",
    isChecked: false,
  },
  {
    id: [0, 1],
    value: "",
    isChecked: false,
  },
  {
    id: [0, 2],
    value: "",
    isChecked: false,
  },
  {
    id: [1, 0],
    value: "",
    isChecked: false,
  },
  {
    id: [1, 1],
    value: "",
    isChecked: false,
  },
  {
    id: [1, 2],
    value: "",
    isChecked: false,
  },
  {
    id: [2, 0],
    value: "",
    isChecked: false,
  },
  {
    id: [2, 1],
    value: "",
    isChecked: false,
  },
  {
    id: [2, 2],
    value: "",
    isChecked: false,
  },
];

export const boardWidth = 3;

export const history = { 0: board };

export const checkAllFilled = (board) => {
  let flag = true;
  board.forEach((element) => {
    if (!element.isChecked) flag = false;
  });

  return flag;
};

export const spliceDict = (dict, minKey, maxKey) => {
  var newDict = {};
  for (var i in dict) {
    if (i >= minKey && i <= maxKey) {
      newDict[i] = dict[i];
    }
  }
  return newDict;
};

export const compareArrays = (array1, array2) => {
  return (
    array1.length === array2.length &&
    array1.every(function (element, index) {
      return element === array2[index];
    })
  );
};
