export default class IndexURLsCommand {
  constructor(IndexURLsService) {
    this.IndexURLsService = IndexURLsService;
  }

  execute() {
    this.IndexURLsService.execute();
  }

}
