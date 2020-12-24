//

export const paginate = (items, currentPage) => {
  const perPage = 5;
  const newList = [];

  const endCount = currentPage * perPage - 1;
  const startCount = endCount - (perPage - 1);

  for (let i = startCount; i <= endCount; i++) {
    newList.push(items[i]);
  }

  return {
    items: newList,
    pages: Math.floor(items.length / perPage),
  };
};
