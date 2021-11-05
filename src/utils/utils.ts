// TO-DO: provide types
export const normalizeTournaments = (data: Array<any>) => {
  return data.map((el) => {
    return {
      id: el._id,
      name: el.name,
    };
  });
};

// TO-DO: provide types
export const normalizeMatches = (data: Array<any>) => {
  return data.map((el) => {
    return {
      id: el._id,
      time: el.time.uts,
      result: el.result,
      teams: el.teams,
      comment: el.comment,
    };
  });
};
