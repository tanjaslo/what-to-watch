import dayjs from 'dayjs';

export const formattedDate = (date: string): string => dayjs(date).format('YYYY-MM-DD');

export const humanizedDate = (date: string): string => dayjs(date).format('MMMM DD, YYYY');

export const getDurationInMinutes = (runTime: number): string => {
  if (runTime > 60) {
    return `${Math.floor(runTime / 60)}h ${runTime % 60}m`;
  }
  return `${runTime} minutes`;
};
