const pagination = (awards) => {
  const awardPerPage = 5;
  const pages = Math.ceil(awards.length / awardPerPage);

  const newAwards = Array.from({ length: pages }, (_, index) => {
    const start = index * awardPerPage;
    return awards.slice(start, start + awardPerPage);
  });

  return newAwards;
};

export default pagination;
