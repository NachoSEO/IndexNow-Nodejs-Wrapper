# IndexNow NodeJS Wrapper

NodeJS Wrapper for the [IndexNow](https://www.indexnow.org) API.

## Requeriments
* Node installed with version >=14.16.0
* IndexNow API created and sumitted to your site. Check the [IndexNow API implementation guide here](https://www.bing.com/indexnow)
## Configuration

Go to `src/config/indexNowConfig.js`, you'll find the configuration for the IndexNow API:

You just need to replace the following values inside the `payload`:
* `host`: The host of the website you want to index.
* `key`: The API key of the website you want to index.
* `keyLocation`: The location of the API key of the website you want to index.
* `urlList`: The list of URLs you want to index.

```js
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
```

## Quickstart
When you have the configuration, you can execute the script with the following command:
```sh
yarn indexURLs
```

The terminal output would be the following:
```
  Error in submitting 1 URLs to https://yandex.com
  Possible reason: 422 - In case of URLs don’t belong to the host or the key is not matching the schema in the protocol
  1 URLs Submitted succesfully to https://www.bing.com
```
In this case we submitted 1 URL to Bing but not in Yandex because of an specific error (just for the sake of the example).