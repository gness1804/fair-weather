const validZip = '48109';
const invalidZipText = 'foo';
const invalidZipLength = '2406';

if (typeof document === 'undefined') {
  module.exports = {
    validZip,
    invalidZipText,
    invalidZipLength,
  };
}
