export const groupByReaction = (objectArray, groupByType) => {
  return objectArray.reduce((acc, obj) => {
    let key = obj[groupByType];
    if (!acc[key]) {
      acc[key] = [];
    }
    delete obj.content;
    delete obj.type;
    acc[key].push(obj);
    return acc;
  }, {});
};
