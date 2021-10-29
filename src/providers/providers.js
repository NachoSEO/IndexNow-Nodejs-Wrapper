import axios from 'axios';

import indexNowConfig from '../config/indexNowConfig.js';
import mappingStatus from '../config/responseStatus.js';

import IndexURLsCommand from '../commands/IndexURLsCommand.js';

import IndexURLsService from '../services/IndexURLsService.js';

import IndexNowRepository from '../repositories/IndexNowRepository.js';


const indexURLsCommand = new IndexURLsCommand(
  new IndexURLsService(
    new IndexNowRepository(
      indexNowConfig,
      axios,
      mappingStatus
    )
  ),
);


export {
  indexURLsCommand
}