import { NowRequest, NowResponse, NowRequestQuery } from '@now/node';
import * as fs from 'fs';
import { promisify } from 'util';
import { AirportEntityModel } from '../src/data/models';
import _get from 'lodash.get';
import { join } from 'path';

const dataPath = join(__dirname, 'data.json');

type FilterQueryModel<K extends keyof any> = Partial<Record<K, any>>;

type AirportQueryKeys = 'country.countryCode' | 'country.countryName' | 'onlineIndicator';

interface GenericFilterFn<I, K extends keyof any> {
  (items: Array<I>, query: FilterQueryModel<K>): Array<I>;
}

const readFileAsync = promisify(fs.readFile);

// A generic filter function with type check
const filterAirport: GenericFilterFn<AirportEntityModel, AirportQueryKeys> = (items, query) => {
  return items.filter(x => {
    for (let key of Object.keys(query) as Array<keyof typeof query>) {
      // TODO runtine key check, because typescript can not do runtime check
      // use lodash/get because we allow key to present nested attribute
      if (
        _get(x, key)
          .toString()
          .toUpperCase() !== query[key].toUpperCase()
      ) {
        return false;
      }
    }
    return true;
  });
};

const sortAirport = (items: Array<AirportEntityModel>, sortKey: string, order: 'asec' | 'desc' = 'asec') => {
  if (!sortKey) {
    return items;
  }
  return items.sort((a, b) => {
    const isAsec = order === 'asec';
    if (_get(a, sortKey) > _get(b, sortKey)) {
      return isAsec ? 1 : -1;
    }
    if (_get(a, sortKey) < _get(b, sortKey)) {
      return isAsec ? -1 : 1;
    }
    return 0;
  });
};

// transfer all Array<string> in reqQuery to first string if its Array<string>
const processReqQuery = (reqQuery: NowRequestQuery) => {
  return Object.keys(reqQuery).reduce(
    (acc, key) => {
      acc[key] = Array.isArray(reqQuery[key]) ? reqQuery[key][0] : reqQuery[key];
      return acc;
    },
    {} as any
  );
};

const handler = async (_req: NowRequest, res: NowResponse) => {
  try {
    const query = processReqQuery(_req.query);
    const { sortKey = '', order = 'asec', ...filterQuery } = query;
    const data = await readFileAsync(dataPath);
    const items: Array<AirportEntityModel> = JSON.parse(data.toString());
    let result = filterAirport(items, filterQuery);

    result = sortAirport(result, sortKey, order);
    console.log(result.length);
    res.status(200).send(result);
  } catch (e) {
    console.log(e.message);
    res.status(500);
  }
};

export default handler;
