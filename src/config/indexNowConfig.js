const indexNowConfig = {
  searchEngines: [
    'https://www.bing.com',
    'https://yandex.com'
  ],
  url: '/IndexNow ',
  payload: {
    host: 'https://www.example.com', //Replace with your own domain
    key: '<apiKey>', // Replace with your own API key
    keyLocation: 'https://www.example.com/apiKey.txt', //Replace with your own API key location
    urlList: [ // Replace with your own URL list
      'https://www.example.org/url1',
      'https://www.example.org/folder/url2',
      'https://www.example.org/url3'
    ]
  }

}

export default indexNowConfig;
