const validZip = '48109';
const invalidZipText = 'foo';
const invalidZipLength = '2406';
const fakeTemp = 60;
const fakeCity = 'Blacksburg';
const fakeState = 'VA';

if (typeof document === 'undefined') {
  module.exports = {
    validZip,
    invalidZipText,
    invalidZipLength,
    fakeTemp,
    fakeCity,
    fakeState,
  };
}
