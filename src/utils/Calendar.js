const getMonthAbbreviation = (timestamp) => {
  const date = new Date(timestamp?.seconds * 1000);
  return date.toLocaleString("default", { month: "short" });
};

const getDay = (timestamp) => {
  const date = new Date(timestamp?.seconds * 1000);
  return date.getDate();
};

export { getMonthAbbreviation, getDay };
