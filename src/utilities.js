import jwt from 'jsonwebtoken';
import { DateTime } from 'luxon';

export const passwordIsCorrect = (password) => {
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters long.');
  }

  const regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi);

  return regex.test(password);
};

export const datesAreCorrect = (start, end) => {
  const startDate = DateTime.fromJSDate(new Date(start));
  const endDate = DateTime.fromJSDate(new Date(end));

  // Початкова дата має бути раніше за кінцеву
  if (startDate >= endDate) {
    return false;
  }

  // Уроки/слоти мають починатись та закінчуватись на початку години
  if (startDate.minute !== 0 || endDate.minute !== 0) {
    return false;
  }

  // Уроки/слоти можуть починатись о 16й і мають закінчуватись о 20й
  if (startDate.hour < 16 || endDate.hour > 20) {
    return false;
  }

  // Тривалість уроку/слоту має бути не більшою за годину
  const { hours } = endDate.diff(startDate, 'hours');
  return hours === 1;
}

export const extractAndVerifyToken = (headers) => {
  const context = {};
  const authorization = headers['authorization'] ?? headers['Authorization'];
    
  if (authorization) {
    const token = authorization.split(' ')[1];
    
    if (token) {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      context.user = data;
    }
  }

  return context;
}

export const fileTypeIsCorrect = ({ file }, allowedTypes) => {
  return allowedTypes.includes(file.mimetype);
}