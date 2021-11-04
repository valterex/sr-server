export const BASE_URL = 'https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo';

export const normalizeTournaments = (data: Array<any>) => {
  return data.map((el) => {
    return {
      id: el._id,
      name: el.name,
    };
  });
};
