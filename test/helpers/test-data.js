const validZip = '48109';
const invalidZipText = 'foo';
const invalidZipLength = '2406';
const fakeTemp = 60;
const fakeCity = 'Blacksburg';
const fakeState = 'VA';
const fakeIcon = 'http://s3-us-west-2.amazonaws.com/americankennelclub/Cairn-Terrier.jpg';

if (typeof document === 'undefined') {
  module.exports = {
    validZip,
    invalidZipText,
    invalidZipLength,
    fakeTemp,
    fakeCity,
    fakeState,
    fakeIcon,
  };
}
