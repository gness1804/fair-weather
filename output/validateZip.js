//      
/* eslint-disable no-unused-vars */
const validateZip = (zip        )          => {
  const parsedZip = parseInt(zip, 10);
  if (!parsedZip || typeof parsedZip !== 'number' || zip.length !== 5) {
    return false;
  }
  return true;
};
/* eslint-enable no-unused-vars */

if (typeof document === 'undefined') {
  module.exports = validateZip;
}
