import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.forEach((result) => {
        const resObj = {
          status: result.status,
          value: result.value || result.reason.toString(),
        };
        arr.push(resObj);
      });
      return arr;
    });
}
