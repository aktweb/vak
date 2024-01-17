// Generated by Xata Codegen 0.28.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "records",
    columns: [
      { name: "name", type: "string" },
      { name: "phone", type: "string" },
      { name: "desc", type: "string" },
      { name: "desc", type: "string" },
    ],
  },
  {
    name: "products",
    columns: [
      { name: "title", type: "string" },
      { name: "image", type: "string" },
      { name: "desc", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Records = InferredTypes["records"];
export type RecordsRecord = Records & XataRecord;

export type Products = InferredTypes["products"];
export type ProductsRecord = Products & XataRecord;

export type DatabaseSchema = {
  records: RecordsRecord;
  products: ProductsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://AKT-s-workspace-3dkrsb.us-east-1.xata.sh/db/vak",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
// https://AKT-s-workspace-3dkrsb.us-east-1.xata.sh/db/vak:main/tables/products