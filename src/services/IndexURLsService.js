export default class IndexURLsService {
  constructor(IndexNowRepository) {
    this.IndexNowRepository = IndexNowRepository;
  }

  execute() {
    return this.IndexNowRepository.indexUrlsInBulk();
  }

}
