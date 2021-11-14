import dayjs from 'dayjs';

export const formattedDate = (date: string): string => dayjs(date).format('YYYY-MM-DD');

export const humanizedDate = (date: string): string => dayjs(date).format('MMMM DD, YYYY');
