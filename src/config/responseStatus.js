const mappingStatus = {
  '200': 'URL submitted successfully',
  '400': 'Invalid format',
  '403': 'In case of key not valid (e.g. key not found, file found but key not in the file)',
  '422': 'In case of URLs don’t belong to the host or the key is not matching the schema in the protocol',
  '429': 'Too Many Requests (potential Spam)'
}

export default mappingStatus;