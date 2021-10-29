export default class IndexNowRepository {
  constructor(indexNowConfig, axios, mappingStatus) {
    this.indexNowConfig = indexNowConfig;
    this.axios = axios;
    this.mappingStatus = mappingStatus;
  }

  indexUrlsInBulk() {
    const { searchEngines, url, payload } = this.indexNowConfig;

    searchEngines.forEach(searchEngine => {
      this.axios.post(`${searchEngine}${url}`, payload)
        .then(response => {
          if(response.status === 200) {
            console.log(`${payload.urlList.length} URLs Submitted succesfully to ${searchEngine}`);
          } else {
            console.log(`Error in submitting ${payload.urlList.length} URLs to ${searchEngine}`);
          }
        })
        .catch(error => {
          console.log(`Error in submitting ${payload.urlList.length} URLs to ${searchEngine}`);
          console.log(`Possible reason: ${error.response.status} - ${this.mappingStatus[error.response.status]}`)
        })
    });
  }
}