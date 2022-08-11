import { Model, ModelStatic } from 'sequelize';

interface SlugOptions {
  replacement?: string;
  replaceSymbols?: boolean;
  remove?: boolean;
  lower?: boolean;
  charmap?: object;
  multicharmap?: object;
}

interface Options {
  source: string[];
  suffixSource?: string[];
  slugOptions?: SlugOptions;
  overwrite?: boolean;
  column?: string;
  lang?: string;
  bulkUpdate?: boolean;
  incrementalSeparator?: string;
  passTransaction?: boolean;
  paranoid?: boolean;
  allowNull?: boolean;
}

declare const _exports: SequelizeSlugify;
export = _exports;
declare class SequelizeSlugify {
  slugifyModel<M extends Model>(model: ModelStatic<M>, options: Options): void;
}
