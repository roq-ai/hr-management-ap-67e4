/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model employee
 *
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>;
/**
 * Model hr_manager
 *
 */
export type hr_manager = $Result.DefaultSelection<Prisma.$hr_managerPayload>;
/**
 * Model job_applicant
 *
 */
export type job_applicant = $Result.DefaultSelection<Prisma.$job_applicantPayload>;
/**
 * Model owner
 *
 */
export type owner = $Result.DefaultSelection<Prisma.$ownerPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   */
  get employee(): Prisma.employeeDelegate<ExtArgs>;

  /**
   * `prisma.hr_manager`: Exposes CRUD operations for the **hr_manager** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Hr_managers
   * const hr_managers = await prisma.hr_manager.findMany()
   * ```
   */
  get hr_manager(): Prisma.hr_managerDelegate<ExtArgs>;

  /**
   * `prisma.job_applicant`: Exposes CRUD operations for the **job_applicant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Job_applicants
   * const job_applicants = await prisma.job_applicant.findMany()
   * ```
   */
  get job_applicant(): Prisma.job_applicantDelegate<ExtArgs>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
   * ```
   */
  get owner(): Prisma.ownerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    employee: 'employee';
    hr_manager: 'hr_manager';
    job_applicant: 'job_applicant';
    owner: 'owner';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'employee' | 'hr_manager' | 'job_applicant' | 'owner' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>;
        fields: Prisma.employeeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[];
          };
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee>;
          };
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeGroupByOutputType>[];
          };
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number;
          };
        };
      };
      hr_manager: {
        payload: Prisma.$hr_managerPayload<ExtArgs>;
        fields: Prisma.hr_managerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.hr_managerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.hr_managerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          findFirst: {
            args: Prisma.hr_managerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.hr_managerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          findMany: {
            args: Prisma.hr_managerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>[];
          };
          create: {
            args: Prisma.hr_managerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          createMany: {
            args: Prisma.hr_managerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.hr_managerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          update: {
            args: Prisma.hr_managerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          deleteMany: {
            args: Prisma.hr_managerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.hr_managerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.hr_managerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          aggregate: {
            args: Prisma.Hr_managerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHr_manager>;
          };
          groupBy: {
            args: Prisma.hr_managerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Hr_managerGroupByOutputType>[];
          };
          count: {
            args: Prisma.hr_managerCountArgs<ExtArgs>;
            result: $Utils.Optional<Hr_managerCountAggregateOutputType> | number;
          };
        };
      };
      job_applicant: {
        payload: Prisma.$job_applicantPayload<ExtArgs>;
        fields: Prisma.job_applicantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.job_applicantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.job_applicantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicantPayload>;
          };
          findFirst: {
            args: Prisma.job_applicantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.job_applicantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicantPayload>;
          };
          findMany: {
            args: Prisma.job_applicantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicantPayload>[];
          };
          create: {
            args: Prisma.job_applicantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicantPayload>;
          };
          createMany: {
            args: Prisma.job_applicantCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.job_applicantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicantPayload>;
          };
          update: {
            args: Prisma.job_applicantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicantPayload>;
          };
          deleteMany: {
            args: Prisma.job_applicantDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.job_applicantUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.job_applicantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicantPayload>;
          };
          aggregate: {
            args: Prisma.Job_applicantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob_applicant>;
          };
          groupBy: {
            args: Prisma.job_applicantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Job_applicantGroupByOutputType>[];
          };
          count: {
            args: Prisma.job_applicantCountArgs<ExtArgs>;
            result: $Utils.Optional<Job_applicantCountAggregateOutputType> | number;
          };
        };
      };
      owner: {
        payload: Prisma.$ownerPayload<ExtArgs>;
        fields: Prisma.ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          findFirst: {
            args: Prisma.ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          findMany: {
            args: Prisma.ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>[];
          };
          create: {
            args: Prisma.ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          createMany: {
            args: Prisma.ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          update: {
            args: Prisma.ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          deleteMany: {
            args: Prisma.ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOwner>;
          };
          groupBy: {
            args: Prisma.ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OwnerGroupByOutputType>[];
          };
          count: {
            args: Prisma.ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    other_employee: number;
  };

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_employee?: boolean | EmployeeCountOutputTypeCountOther_employeeArgs;
  };

  // Custom InputTypes

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountOther_employeeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: employeeWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    employee: number;
    hr_manager: number;
    job_applicant: number;
    owner: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    employee?: boolean | UserCountOutputTypeCountEmployeeArgs;
    hr_manager?: boolean | UserCountOutputTypeCountHr_managerArgs;
    job_applicant?: boolean | UserCountOutputTypeCountJob_applicantArgs;
    owner?: boolean | UserCountOutputTypeCountOwnerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: employeeWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHr_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: hr_managerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJob_applicantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: job_applicantWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _avg: CompanyAvgAggregateOutputType | null;
    _sum: CompanySumAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyAvgAggregateOutputType = {
    size: number | null;
  };

  export type CompanySumAggregateOutputType = {
    size: number | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    industry: string | null;
    size: number | null;
    founded_year: Date | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    industry: string | null;
    size: number | null;
    founded_year: Date | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    industry: number;
    size: number;
    founded_year: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyAvgAggregateInputType = {
    size?: true;
  };

  export type CompanySumAggregateInputType = {
    size?: true;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    industry?: true;
    size?: true;
    founded_year?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    industry?: true;
    size?: true;
    founded_year?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    industry?: true;
    size?: true;
    founded_year?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CompanyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CompanySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _avg?: CompanyAvgAggregateInputType;
    _sum?: CompanySumAggregateInputType;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    industry: string | null;
    size: number | null;
    founded_year: Date | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _avg: CompanyAvgAggregateOutputType | null;
    _sum: CompanySumAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      industry?: boolean;
      size?: boolean;
      founded_year?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    industry?: boolean;
    size?: boolean;
    founded_year?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        industry: string | null;
        size: number | null;
        founded_year: Date | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly industry: FieldRef<'company', 'String'>;
    readonly size: FieldRef<'company', 'Int'>;
    readonly founded_year: FieldRef<'company', 'DateTime'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  export type EmployeeAvgAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeSumAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeMinAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    job_title: string | null;
    salary: number | null;
    department: string | null;
    report_to: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    job_title: string | null;
    salary: number | null;
    department: string | null;
    report_to: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeCountAggregateOutputType = {
    id: number;
    hire_date: number;
    job_title: number;
    salary: number;
    department: number;
    report_to: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EmployeeAvgAggregateInputType = {
    salary?: true;
  };

  export type EmployeeSumAggregateInputType = {
    salary?: true;
  };

  export type EmployeeMinAggregateInputType = {
    id?: true;
    hire_date?: true;
    job_title?: true;
    salary?: true;
    department?: true;
    report_to?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeMaxAggregateInputType = {
    id?: true;
    hire_date?: true;
    job_title?: true;
    salary?: true;
    department?: true;
    report_to?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeCountAggregateInputType = {
    id?: true;
    hire_date?: true;
    job_title?: true;
    salary?: true;
    department?: true;
    report_to?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employees
     **/
    _count?: true | EmployeeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EmployeeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EmployeeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployeeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployeeMaxAggregateInputType;
  };

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>;
  };

  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[];
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum;
    having?: employeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
  };

  export type EmployeeGroupByOutputType = {
    id: string;
    hire_date: Date;
    job_title: string;
    salary: number;
    department: string;
    report_to: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EmployeeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
          : GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
      }
    >
  >;

  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        hire_date?: boolean;
        job_title?: boolean;
        salary?: boolean;
        department?: boolean;
        report_to?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        employee?: boolean | employeeDefaultArgs<ExtArgs>;
        other_employee?: boolean | employee$other_employeeArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['employee']
    >;

  export type employeeSelectScalar = {
    id?: boolean;
    hire_date?: boolean;
    job_title?: boolean;
    salary?: boolean;
    department?: boolean;
    report_to?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
    other_employee?: boolean | employee$other_employeeArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>;
      other_employee: Prisma.$employeePayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        hire_date: Date;
        job_title: string;
        salary: number;
        department: string;
        report_to: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee']
    >;
    composites: {};
  };

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<
    Prisma.$employeePayload,
    S
  >;

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employeeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: EmployeeCountAggregateInputType | true;
  };

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee']; meta: { name: 'employee' } };
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     *
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     *
     **/
    create<T extends employeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeCreateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     *
     **/
    delete<T extends employeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     **/
    upsert<T extends employeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
     **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EmployeeAggregateArgs>(
      args: Subset<T, EmployeeAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee model
     */
    readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    other_employee<T extends employee$other_employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$other_employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<'employee', 'String'>;
    readonly hire_date: FieldRef<'employee', 'DateTime'>;
    readonly job_title: FieldRef<'employee', 'String'>;
    readonly salary: FieldRef<'employee', 'Int'>;
    readonly department: FieldRef<'employee', 'String'>;
    readonly report_to: FieldRef<'employee', 'String'>;
    readonly user_id: FieldRef<'employee', 'String'>;
    readonly created_at: FieldRef<'employee', 'DateTime'>;
    readonly updated_at: FieldRef<'employee', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
  };

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>;
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput;
  };

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput;
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
  };

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput;
  };

  /**
   * employee.other_employee
   */
  export type employee$other_employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
  };

  /**
   * Model hr_manager
   */

  export type AggregateHr_manager = {
    _count: Hr_managerCountAggregateOutputType | null;
    _min: Hr_managerMinAggregateOutputType | null;
    _max: Hr_managerMaxAggregateOutputType | null;
  };

  export type Hr_managerMinAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    department: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Hr_managerMaxAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    department: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Hr_managerCountAggregateOutputType = {
    id: number;
    hire_date: number;
    department: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Hr_managerMinAggregateInputType = {
    id?: true;
    hire_date?: true;
    department?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Hr_managerMaxAggregateInputType = {
    id?: true;
    hire_date?: true;
    department?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Hr_managerCountAggregateInputType = {
    id?: true;
    hire_date?: true;
    department?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Hr_managerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hr_manager to aggregate.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned hr_managers
     **/
    _count?: true | Hr_managerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Hr_managerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Hr_managerMaxAggregateInputType;
  };

  export type GetHr_managerAggregateType<T extends Hr_managerAggregateArgs> = {
    [P in keyof T & keyof AggregateHr_manager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHr_manager[P]>
      : GetScalarType<T[P], AggregateHr_manager[P]>;
  };

  export type hr_managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hr_managerWhereInput;
    orderBy?: hr_managerOrderByWithAggregationInput | hr_managerOrderByWithAggregationInput[];
    by: Hr_managerScalarFieldEnum[] | Hr_managerScalarFieldEnum;
    having?: hr_managerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Hr_managerCountAggregateInputType | true;
    _min?: Hr_managerMinAggregateInputType;
    _max?: Hr_managerMaxAggregateInputType;
  };

  export type Hr_managerGroupByOutputType = {
    id: string;
    hire_date: Date;
    department: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Hr_managerCountAggregateOutputType | null;
    _min: Hr_managerMinAggregateOutputType | null;
    _max: Hr_managerMaxAggregateOutputType | null;
  };

  type GetHr_managerGroupByPayload<T extends hr_managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hr_managerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Hr_managerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Hr_managerGroupByOutputType[P]>
          : GetScalarType<T[P], Hr_managerGroupByOutputType[P]>;
      }
    >
  >;

  export type hr_managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        hire_date?: boolean;
        department?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['hr_manager']
    >;

  export type hr_managerSelectScalar = {
    id?: boolean;
    hire_date?: boolean;
    department?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type hr_managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $hr_managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'hr_manager';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        hire_date: Date;
        department: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['hr_manager']
    >;
    composites: {};
  };

  type hr_managerGetPayload<S extends boolean | null | undefined | hr_managerDefaultArgs> = $Result.GetResult<
    Prisma.$hr_managerPayload,
    S
  >;

  type hr_managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    hr_managerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Hr_managerCountAggregateInputType | true;
  };

  export interface hr_managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hr_manager']; meta: { name: 'hr_manager' } };
    /**
     * Find zero or one Hr_manager that matches the filter.
     * @param {hr_managerFindUniqueArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends hr_managerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerFindUniqueArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Hr_manager that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {hr_managerFindUniqueOrThrowArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends hr_managerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Hr_manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerFindFirstArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends hr_managerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindFirstArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Hr_manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerFindFirstOrThrowArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends hr_managerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Hr_managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hr_managers
     * const hr_managers = await prisma.hr_manager.findMany()
     *
     * // Get first 10 Hr_managers
     * const hr_managers = await prisma.hr_manager.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hr_managerWithIdOnly = await prisma.hr_manager.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends hr_managerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Hr_manager.
     * @param {hr_managerCreateArgs} args - Arguments to create a Hr_manager.
     * @example
     * // Create one Hr_manager
     * const Hr_manager = await prisma.hr_manager.create({
     *   data: {
     *     // ... data to create a Hr_manager
     *   }
     * })
     *
     **/
    create<T extends hr_managerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerCreateArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Hr_managers.
     *     @param {hr_managerCreateManyArgs} args - Arguments to create many Hr_managers.
     *     @example
     *     // Create many Hr_managers
     *     const hr_manager = await prisma.hr_manager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends hr_managerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Hr_manager.
     * @param {hr_managerDeleteArgs} args - Arguments to delete one Hr_manager.
     * @example
     * // Delete one Hr_manager
     * const Hr_manager = await prisma.hr_manager.delete({
     *   where: {
     *     // ... filter to delete one Hr_manager
     *   }
     * })
     *
     **/
    delete<T extends hr_managerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerDeleteArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Hr_manager.
     * @param {hr_managerUpdateArgs} args - Arguments to update one Hr_manager.
     * @example
     * // Update one Hr_manager
     * const hr_manager = await prisma.hr_manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends hr_managerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerUpdateArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Hr_managers.
     * @param {hr_managerDeleteManyArgs} args - Arguments to filter Hr_managers to delete.
     * @example
     * // Delete a few Hr_managers
     * const { count } = await prisma.hr_manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends hr_managerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Hr_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hr_managers
     * const hr_manager = await prisma.hr_manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends hr_managerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Hr_manager.
     * @param {hr_managerUpsertArgs} args - Arguments to update or create a Hr_manager.
     * @example
     * // Update or create a Hr_manager
     * const hr_manager = await prisma.hr_manager.upsert({
     *   create: {
     *     // ... data to create a Hr_manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hr_manager we want to update
     *   }
     * })
     **/
    upsert<T extends hr_managerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerUpsertArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Hr_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerCountArgs} args - Arguments to filter Hr_managers to count.
     * @example
     * // Count the number of Hr_managers
     * const count = await prisma.hr_manager.count({
     *   where: {
     *     // ... the filter for the Hr_managers we want to count
     *   }
     * })
     **/
    count<T extends hr_managerCountArgs>(
      args?: Subset<T, hr_managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hr_managerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Hr_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hr_managerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Hr_managerAggregateArgs>(
      args: Subset<T, Hr_managerAggregateArgs>,
    ): Prisma.PrismaPromise<GetHr_managerAggregateType<T>>;

    /**
     * Group by Hr_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends hr_managerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hr_managerGroupByArgs['orderBy'] }
        : { orderBy?: hr_managerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, hr_managerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHr_managerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the hr_manager model
     */
    readonly fields: hr_managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hr_manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hr_managerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the hr_manager model
   */
  interface hr_managerFieldRefs {
    readonly id: FieldRef<'hr_manager', 'String'>;
    readonly hire_date: FieldRef<'hr_manager', 'DateTime'>;
    readonly department: FieldRef<'hr_manager', 'String'>;
    readonly user_id: FieldRef<'hr_manager', 'String'>;
    readonly created_at: FieldRef<'hr_manager', 'DateTime'>;
    readonly updated_at: FieldRef<'hr_manager', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * hr_manager findUnique
   */
  export type hr_managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager findUniqueOrThrow
   */
  export type hr_managerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager findFirst
   */
  export type hr_managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hr_managers.
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hr_managers.
     */
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * hr_manager findFirstOrThrow
   */
  export type hr_managerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hr_managers.
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hr_managers.
     */
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * hr_manager findMany
   */
  export type hr_managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_managers to fetch.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing hr_managers.
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * hr_manager create
   */
  export type hr_managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * The data needed to create a hr_manager.
     */
    data: XOR<hr_managerCreateInput, hr_managerUncheckedCreateInput>;
  };

  /**
   * hr_manager createMany
   */
  export type hr_managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hr_managers.
     */
    data: hr_managerCreateManyInput | hr_managerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * hr_manager update
   */
  export type hr_managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * The data needed to update a hr_manager.
     */
    data: XOR<hr_managerUpdateInput, hr_managerUncheckedUpdateInput>;
    /**
     * Choose, which hr_manager to update.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager updateMany
   */
  export type hr_managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hr_managers.
     */
    data: XOR<hr_managerUpdateManyMutationInput, hr_managerUncheckedUpdateManyInput>;
    /**
     * Filter which hr_managers to update
     */
    where?: hr_managerWhereInput;
  };

  /**
   * hr_manager upsert
   */
  export type hr_managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * The filter to search for the hr_manager to update in case it exists.
     */
    where: hr_managerWhereUniqueInput;
    /**
     * In case the hr_manager found by the `where` argument doesn't exist, create a new hr_manager with this data.
     */
    create: XOR<hr_managerCreateInput, hr_managerUncheckedCreateInput>;
    /**
     * In case the hr_manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hr_managerUpdateInput, hr_managerUncheckedUpdateInput>;
  };

  /**
   * hr_manager delete
   */
  export type hr_managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter which hr_manager to delete.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager deleteMany
   */
  export type hr_managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hr_managers to delete
     */
    where?: hr_managerWhereInput;
  };

  /**
   * hr_manager without action
   */
  export type hr_managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
  };

  /**
   * Model job_applicant
   */

  export type AggregateJob_applicant = {
    _count: Job_applicantCountAggregateOutputType | null;
    _min: Job_applicantMinAggregateOutputType | null;
    _max: Job_applicantMaxAggregateOutputType | null;
  };

  export type Job_applicantMinAggregateOutputType = {
    id: string | null;
    application_date: Date | null;
    position_applied: string | null;
    resume: string | null;
    status: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_applicantMaxAggregateOutputType = {
    id: string | null;
    application_date: Date | null;
    position_applied: string | null;
    resume: string | null;
    status: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_applicantCountAggregateOutputType = {
    id: number;
    application_date: number;
    position_applied: number;
    resume: number;
    status: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Job_applicantMinAggregateInputType = {
    id?: true;
    application_date?: true;
    position_applied?: true;
    resume?: true;
    status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_applicantMaxAggregateInputType = {
    id?: true;
    application_date?: true;
    position_applied?: true;
    resume?: true;
    status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_applicantCountAggregateInputType = {
    id?: true;
    application_date?: true;
    position_applied?: true;
    resume?: true;
    status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Job_applicantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_applicant to aggregate.
     */
    where?: job_applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_applicants to fetch.
     */
    orderBy?: job_applicantOrderByWithRelationInput | job_applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: job_applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned job_applicants
     **/
    _count?: true | Job_applicantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Job_applicantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Job_applicantMaxAggregateInputType;
  };

  export type GetJob_applicantAggregateType<T extends Job_applicantAggregateArgs> = {
    [P in keyof T & keyof AggregateJob_applicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_applicant[P]>
      : GetScalarType<T[P], AggregateJob_applicant[P]>;
  };

  export type job_applicantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_applicantWhereInput;
    orderBy?: job_applicantOrderByWithAggregationInput | job_applicantOrderByWithAggregationInput[];
    by: Job_applicantScalarFieldEnum[] | Job_applicantScalarFieldEnum;
    having?: job_applicantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Job_applicantCountAggregateInputType | true;
    _min?: Job_applicantMinAggregateInputType;
    _max?: Job_applicantMaxAggregateInputType;
  };

  export type Job_applicantGroupByOutputType = {
    id: string;
    application_date: Date;
    position_applied: string;
    resume: string;
    status: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Job_applicantCountAggregateOutputType | null;
    _min: Job_applicantMinAggregateOutputType | null;
    _max: Job_applicantMaxAggregateOutputType | null;
  };

  type GetJob_applicantGroupByPayload<T extends job_applicantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_applicantGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Job_applicantGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Job_applicantGroupByOutputType[P]>
          : GetScalarType<T[P], Job_applicantGroupByOutputType[P]>;
      }
    >
  >;

  export type job_applicantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        application_date?: boolean;
        position_applied?: boolean;
        resume?: boolean;
        status?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['job_applicant']
    >;

  export type job_applicantSelectScalar = {
    id?: boolean;
    application_date?: boolean;
    position_applied?: boolean;
    resume?: boolean;
    status?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type job_applicantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $job_applicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job_applicant';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        application_date: Date;
        position_applied: string;
        resume: string;
        status: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job_applicant']
    >;
    composites: {};
  };

  type job_applicantGetPayload<S extends boolean | null | undefined | job_applicantDefaultArgs> = $Result.GetResult<
    Prisma.$job_applicantPayload,
    S
  >;

  type job_applicantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    job_applicantFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Job_applicantCountAggregateInputType | true;
  };

  export interface job_applicantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_applicant']; meta: { name: 'job_applicant' } };
    /**
     * Find zero or one Job_applicant that matches the filter.
     * @param {job_applicantFindUniqueArgs} args - Arguments to find a Job_applicant
     * @example
     * // Get one Job_applicant
     * const job_applicant = await prisma.job_applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends job_applicantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicantFindUniqueArgs<ExtArgs>>,
    ): Prisma__job_applicantClient<
      $Result.GetResult<Prisma.$job_applicantPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Job_applicant that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {job_applicantFindUniqueOrThrowArgs} args - Arguments to find a Job_applicant
     * @example
     * // Get one Job_applicant
     * const job_applicant = await prisma.job_applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends job_applicantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__job_applicantClient<
      $Result.GetResult<Prisma.$job_applicantPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Job_applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicantFindFirstArgs} args - Arguments to find a Job_applicant
     * @example
     * // Get one Job_applicant
     * const job_applicant = await prisma.job_applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends job_applicantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicantFindFirstArgs<ExtArgs>>,
    ): Prisma__job_applicantClient<
      $Result.GetResult<Prisma.$job_applicantPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Job_applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicantFindFirstOrThrowArgs} args - Arguments to find a Job_applicant
     * @example
     * // Get one Job_applicant
     * const job_applicant = await prisma.job_applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends job_applicantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__job_applicantClient<
      $Result.GetResult<Prisma.$job_applicantPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Job_applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_applicants
     * const job_applicants = await prisma.job_applicant.findMany()
     *
     * // Get first 10 Job_applicants
     * const job_applicants = await prisma.job_applicant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const job_applicantWithIdOnly = await prisma.job_applicant.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends job_applicantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicantPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job_applicant.
     * @param {job_applicantCreateArgs} args - Arguments to create a Job_applicant.
     * @example
     * // Create one Job_applicant
     * const Job_applicant = await prisma.job_applicant.create({
     *   data: {
     *     // ... data to create a Job_applicant
     *   }
     * })
     *
     **/
    create<T extends job_applicantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicantCreateArgs<ExtArgs>>,
    ): Prisma__job_applicantClient<
      $Result.GetResult<Prisma.$job_applicantPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Job_applicants.
     *     @param {job_applicantCreateManyArgs} args - Arguments to create many Job_applicants.
     *     @example
     *     // Create many Job_applicants
     *     const job_applicant = await prisma.job_applicant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends job_applicantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job_applicant.
     * @param {job_applicantDeleteArgs} args - Arguments to delete one Job_applicant.
     * @example
     * // Delete one Job_applicant
     * const Job_applicant = await prisma.job_applicant.delete({
     *   where: {
     *     // ... filter to delete one Job_applicant
     *   }
     * })
     *
     **/
    delete<T extends job_applicantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicantDeleteArgs<ExtArgs>>,
    ): Prisma__job_applicantClient<
      $Result.GetResult<Prisma.$job_applicantPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Job_applicant.
     * @param {job_applicantUpdateArgs} args - Arguments to update one Job_applicant.
     * @example
     * // Update one Job_applicant
     * const job_applicant = await prisma.job_applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends job_applicantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicantUpdateArgs<ExtArgs>>,
    ): Prisma__job_applicantClient<
      $Result.GetResult<Prisma.$job_applicantPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Job_applicants.
     * @param {job_applicantDeleteManyArgs} args - Arguments to filter Job_applicants to delete.
     * @example
     * // Delete a few Job_applicants
     * const { count } = await prisma.job_applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends job_applicantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Job_applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_applicants
     * const job_applicant = await prisma.job_applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends job_applicantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job_applicant.
     * @param {job_applicantUpsertArgs} args - Arguments to update or create a Job_applicant.
     * @example
     * // Update or create a Job_applicant
     * const job_applicant = await prisma.job_applicant.upsert({
     *   create: {
     *     // ... data to create a Job_applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_applicant we want to update
     *   }
     * })
     **/
    upsert<T extends job_applicantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicantUpsertArgs<ExtArgs>>,
    ): Prisma__job_applicantClient<
      $Result.GetResult<Prisma.$job_applicantPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Job_applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicantCountArgs} args - Arguments to filter Job_applicants to count.
     * @example
     * // Count the number of Job_applicants
     * const count = await prisma.job_applicant.count({
     *   where: {
     *     // ... the filter for the Job_applicants we want to count
     *   }
     * })
     **/
    count<T extends job_applicantCountArgs>(
      args?: Subset<T, job_applicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_applicantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job_applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Job_applicantAggregateArgs>(
      args: Subset<T, Job_applicantAggregateArgs>,
    ): Prisma.PrismaPromise<GetJob_applicantAggregateType<T>>;

    /**
     * Group by Job_applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends job_applicantGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_applicantGroupByArgs['orderBy'] }
        : { orderBy?: job_applicantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, job_applicantGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJob_applicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job_applicant model
     */
    readonly fields: job_applicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_applicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_applicantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job_applicant model
   */
  interface job_applicantFieldRefs {
    readonly id: FieldRef<'job_applicant', 'String'>;
    readonly application_date: FieldRef<'job_applicant', 'DateTime'>;
    readonly position_applied: FieldRef<'job_applicant', 'String'>;
    readonly resume: FieldRef<'job_applicant', 'String'>;
    readonly status: FieldRef<'job_applicant', 'String'>;
    readonly user_id: FieldRef<'job_applicant', 'String'>;
    readonly created_at: FieldRef<'job_applicant', 'DateTime'>;
    readonly updated_at: FieldRef<'job_applicant', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job_applicant findUnique
   */
  export type job_applicantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
    /**
     * Filter, which job_applicant to fetch.
     */
    where: job_applicantWhereUniqueInput;
  };

  /**
   * job_applicant findUniqueOrThrow
   */
  export type job_applicantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
    /**
     * Filter, which job_applicant to fetch.
     */
    where: job_applicantWhereUniqueInput;
  };

  /**
   * job_applicant findFirst
   */
  export type job_applicantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
    /**
     * Filter, which job_applicant to fetch.
     */
    where?: job_applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_applicants to fetch.
     */
    orderBy?: job_applicantOrderByWithRelationInput | job_applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_applicants.
     */
    cursor?: job_applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_applicants.
     */
    distinct?: Job_applicantScalarFieldEnum | Job_applicantScalarFieldEnum[];
  };

  /**
   * job_applicant findFirstOrThrow
   */
  export type job_applicantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
    /**
     * Filter, which job_applicant to fetch.
     */
    where?: job_applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_applicants to fetch.
     */
    orderBy?: job_applicantOrderByWithRelationInput | job_applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_applicants.
     */
    cursor?: job_applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_applicants.
     */
    distinct?: Job_applicantScalarFieldEnum | Job_applicantScalarFieldEnum[];
  };

  /**
   * job_applicant findMany
   */
  export type job_applicantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
    /**
     * Filter, which job_applicants to fetch.
     */
    where?: job_applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_applicants to fetch.
     */
    orderBy?: job_applicantOrderByWithRelationInput | job_applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing job_applicants.
     */
    cursor?: job_applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_applicants.
     */
    skip?: number;
    distinct?: Job_applicantScalarFieldEnum | Job_applicantScalarFieldEnum[];
  };

  /**
   * job_applicant create
   */
  export type job_applicantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
    /**
     * The data needed to create a job_applicant.
     */
    data: XOR<job_applicantCreateInput, job_applicantUncheckedCreateInput>;
  };

  /**
   * job_applicant createMany
   */
  export type job_applicantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_applicants.
     */
    data: job_applicantCreateManyInput | job_applicantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job_applicant update
   */
  export type job_applicantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
    /**
     * The data needed to update a job_applicant.
     */
    data: XOR<job_applicantUpdateInput, job_applicantUncheckedUpdateInput>;
    /**
     * Choose, which job_applicant to update.
     */
    where: job_applicantWhereUniqueInput;
  };

  /**
   * job_applicant updateMany
   */
  export type job_applicantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_applicants.
     */
    data: XOR<job_applicantUpdateManyMutationInput, job_applicantUncheckedUpdateManyInput>;
    /**
     * Filter which job_applicants to update
     */
    where?: job_applicantWhereInput;
  };

  /**
   * job_applicant upsert
   */
  export type job_applicantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
    /**
     * The filter to search for the job_applicant to update in case it exists.
     */
    where: job_applicantWhereUniqueInput;
    /**
     * In case the job_applicant found by the `where` argument doesn't exist, create a new job_applicant with this data.
     */
    create: XOR<job_applicantCreateInput, job_applicantUncheckedCreateInput>;
    /**
     * In case the job_applicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_applicantUpdateInput, job_applicantUncheckedUpdateInput>;
  };

  /**
   * job_applicant delete
   */
  export type job_applicantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
    /**
     * Filter which job_applicant to delete.
     */
    where: job_applicantWhereUniqueInput;
  };

  /**
   * job_applicant deleteMany
   */
  export type job_applicantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_applicants to delete
     */
    where?: job_applicantWhereInput;
  };

  /**
   * job_applicant without action
   */
  export type job_applicantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
  };

  /**
   * Model owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  export type OwnerAvgAggregateOutputType = {
    ownership_percentage: number | null;
  };

  export type OwnerSumAggregateOutputType = {
    ownership_percentage: number | null;
  };

  export type OwnerMinAggregateOutputType = {
    id: string | null;
    ownership_percentage: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OwnerMaxAggregateOutputType = {
    id: string | null;
    ownership_percentage: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OwnerCountAggregateOutputType = {
    id: number;
    ownership_percentage: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OwnerAvgAggregateInputType = {
    ownership_percentage?: true;
  };

  export type OwnerSumAggregateInputType = {
    ownership_percentage?: true;
  };

  export type OwnerMinAggregateInputType = {
    id?: true;
    ownership_percentage?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OwnerMaxAggregateInputType = {
    id?: true;
    ownership_percentage?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OwnerCountAggregateInputType = {
    id?: true;
    ownership_percentage?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owner to aggregate.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned owners
     **/
    _count?: true | OwnerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OwnerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OwnerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OwnerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OwnerMaxAggregateInputType;
  };

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
    [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>;
  };

  export type ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithAggregationInput | ownerOrderByWithAggregationInput[];
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum;
    having?: ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OwnerCountAggregateInputType | true;
    _avg?: OwnerAvgAggregateInputType;
    _sum?: OwnerSumAggregateInputType;
    _min?: OwnerMinAggregateInputType;
    _max?: OwnerMaxAggregateInputType;
  };

  export type OwnerGroupByOutputType = {
    id: string;
    ownership_percentage: number;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  type GetOwnerGroupByPayload<T extends ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OwnerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
          : GetScalarType<T[P], OwnerGroupByOutputType[P]>;
      }
    >
  >;

  export type ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      ownership_percentage?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['owner']
  >;

  export type ownerSelectScalar = {
    id?: boolean;
    ownership_percentage?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'owner';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        ownership_percentage: number;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['owner']
    >;
    composites: {};
  };

  type ownerGetPayload<S extends boolean | null | undefined | ownerDefaultArgs> = $Result.GetResult<
    Prisma.$ownerPayload,
    S
  >;

  type ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ownerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OwnerCountAggregateInputType | true;
  };

  export interface ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['owner']; meta: { name: 'owner' } };
    /**
     * Find zero or one Owner that matches the filter.
     * @param {ownerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ownerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     *
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Owner.
     * @param {ownerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     *
     **/
    create<T extends ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ownerCreateArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Owners.
     *     @param {ownerCreateManyArgs} args - Arguments to create many Owners.
     *     @example
     *     // Create many Owners
     *     const owner = await prisma.owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Owner.
     * @param {ownerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     *
     **/
    delete<T extends ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ownerDeleteArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Owner.
     * @param {ownerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpdateArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Owners.
     * @param {ownerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Owner.
     * @param {ownerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     **/
    upsert<T extends ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpsertArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
     **/
    count<T extends ownerCountArgs>(
      args?: Subset<T, ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OwnerAggregateArgs>(
      args: Subset<T, OwnerAggregateArgs>,
    ): Prisma.PrismaPromise<GetOwnerAggregateType<T>>;

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ownerGroupByArgs['orderBy'] }
        : { orderBy?: ownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the owner model
     */
    readonly fields: ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the owner model
   */
  interface ownerFieldRefs {
    readonly id: FieldRef<'owner', 'String'>;
    readonly ownership_percentage: FieldRef<'owner', 'Int'>;
    readonly user_id: FieldRef<'owner', 'String'>;
    readonly created_at: FieldRef<'owner', 'DateTime'>;
    readonly updated_at: FieldRef<'owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * owner findUnique
   */
  export type ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner findUniqueOrThrow
   */
  export type ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner findFirst
   */
  export type ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner findFirstOrThrow
   */
  export type ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner findMany
   */
  export type ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owners to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner create
   */
  export type ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a owner.
     */
    data: XOR<ownerCreateInput, ownerUncheckedCreateInput>;
  };

  /**
   * owner createMany
   */
  export type ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many owners.
     */
    data: ownerCreateManyInput | ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * owner update
   */
  export type ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a owner.
     */
    data: XOR<ownerUpdateInput, ownerUncheckedUpdateInput>;
    /**
     * Choose, which owner to update.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner updateMany
   */
  export type ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update owners.
     */
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyInput>;
    /**
     * Filter which owners to update
     */
    where?: ownerWhereInput;
  };

  /**
   * owner upsert
   */
  export type ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the owner to update in case it exists.
     */
    where: ownerWhereUniqueInput;
    /**
     * In case the owner found by the `where` argument doesn't exist, create a new owner with this data.
     */
    create: XOR<ownerCreateInput, ownerUncheckedCreateInput>;
    /**
     * In case the owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ownerUpdateInput, ownerUncheckedUpdateInput>;
  };

  /**
   * owner delete
   */
  export type ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter which owner to delete.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner deleteMany
   */
  export type ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owners to delete
     */
    where?: ownerWhereInput;
  };

  /**
   * owner without action
   */
  export type ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      employee?: boolean | user$employeeArgs<ExtArgs>;
      hr_manager?: boolean | user$hr_managerArgs<ExtArgs>;
      job_applicant?: boolean | user$job_applicantArgs<ExtArgs>;
      owner?: boolean | user$ownerArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    employee?: boolean | user$employeeArgs<ExtArgs>;
    hr_manager?: boolean | user$hr_managerArgs<ExtArgs>;
    job_applicant?: boolean | user$job_applicantArgs<ExtArgs>;
    owner?: boolean | user$ownerArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      employee: Prisma.$employeePayload<ExtArgs>[];
      hr_manager: Prisma.$hr_managerPayload<ExtArgs>[];
      job_applicant: Prisma.$job_applicantPayload<ExtArgs>[];
      owner: Prisma.$ownerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    employee<T extends user$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    hr_manager<T extends user$hr_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$hr_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    job_applicant<T extends user$job_applicantArgs<ExtArgs> = {}>(
      args?: Subset<T, user$job_applicantArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicantPayload<ExtArgs>, T, 'findMany'> | Null>;

    owner<T extends user$ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.employee
   */
  export type user$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * user.hr_manager
   */
  export type user$hr_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    where?: hr_managerWhereInput;
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    cursor?: hr_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * user.job_applicant
   */
  export type user$job_applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applicant
     */
    select?: job_applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicantInclude<ExtArgs> | null;
    where?: job_applicantWhereInput;
    orderBy?: job_applicantOrderByWithRelationInput | job_applicantOrderByWithRelationInput[];
    cursor?: job_applicantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Job_applicantScalarFieldEnum | Job_applicantScalarFieldEnum[];
  };

  /**
   * user.owner
   */
  export type user$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    cursor?: ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    industry: 'industry';
    size: 'size';
    founded_year: 'founded_year';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const EmployeeScalarFieldEnum: {
    id: 'id';
    hire_date: 'hire_date';
    job_title: 'job_title';
    salary: 'salary';
    department: 'department';
    report_to: 'report_to';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];

  export const Hr_managerScalarFieldEnum: {
    id: 'id';
    hire_date: 'hire_date';
    department: 'department';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Hr_managerScalarFieldEnum = (typeof Hr_managerScalarFieldEnum)[keyof typeof Hr_managerScalarFieldEnum];

  export const Job_applicantScalarFieldEnum: {
    id: 'id';
    application_date: 'application_date';
    position_applied: 'position_applied';
    resume: 'resume';
    status: 'status';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Job_applicantScalarFieldEnum =
    (typeof Job_applicantScalarFieldEnum)[keyof typeof Job_applicantScalarFieldEnum];

  export const OwnerScalarFieldEnum: {
    id: 'id';
    ownership_percentage: 'ownership_percentage';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    industry?: StringNullableFilter<'company'> | string | null;
    size?: IntNullableFilter<'company'> | number | null;
    founded_year?: DateTimeNullableFilter<'company'> | Date | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    size?: SortOrderInput | SortOrder;
    founded_year?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      industry?: StringNullableFilter<'company'> | string | null;
      size?: IntNullableFilter<'company'> | number | null;
      founded_year?: DateTimeNullableFilter<'company'> | Date | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    size?: SortOrderInput | SortOrder;
    founded_year?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _avg?: companyAvgOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
    _sum?: companySumOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    industry?: StringNullableWithAggregatesFilter<'company'> | string | null;
    size?: IntNullableWithAggregatesFilter<'company'> | number | null;
    founded_year?: DateTimeNullableWithAggregatesFilter<'company'> | Date | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[];
    OR?: employeeWhereInput[];
    NOT?: employeeWhereInput | employeeWhereInput[];
    id?: UuidFilter<'employee'> | string;
    hire_date?: DateTimeFilter<'employee'> | Date | string;
    job_title?: StringFilter<'employee'> | string;
    salary?: IntFilter<'employee'> | number;
    department?: StringFilter<'employee'> | string;
    report_to?: UuidFilter<'employee'> | string;
    user_id?: UuidFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    other_employee?: EmployeeListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    salary?: SortOrder;
    department?: SortOrder;
    report_to?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByWithRelationInput;
    other_employee?: employeeOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type employeeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employeeWhereInput | employeeWhereInput[];
      OR?: employeeWhereInput[];
      NOT?: employeeWhereInput | employeeWhereInput[];
      hire_date?: DateTimeFilter<'employee'> | Date | string;
      job_title?: StringFilter<'employee'> | string;
      salary?: IntFilter<'employee'> | number;
      department?: StringFilter<'employee'> | string;
      report_to?: UuidFilter<'employee'> | string;
      user_id?: UuidFilter<'employee'> | string;
      created_at?: DateTimeFilter<'employee'> | Date | string;
      updated_at?: DateTimeFilter<'employee'> | Date | string;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
      other_employee?: EmployeeListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    salary?: SortOrder;
    department?: SortOrder;
    report_to?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employeeCountOrderByAggregateInput;
    _avg?: employeeAvgOrderByAggregateInput;
    _max?: employeeMaxOrderByAggregateInput;
    _min?: employeeMinOrderByAggregateInput;
    _sum?: employeeSumOrderByAggregateInput;
  };

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    OR?: employeeScalarWhereWithAggregatesInput[];
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee'> | string;
    hire_date?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    job_title?: StringWithAggregatesFilter<'employee'> | string;
    salary?: IntWithAggregatesFilter<'employee'> | number;
    department?: StringWithAggregatesFilter<'employee'> | string;
    report_to?: UuidWithAggregatesFilter<'employee'> | string;
    user_id?: UuidWithAggregatesFilter<'employee'> | string;
    created_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
  };

  export type hr_managerWhereInput = {
    AND?: hr_managerWhereInput | hr_managerWhereInput[];
    OR?: hr_managerWhereInput[];
    NOT?: hr_managerWhereInput | hr_managerWhereInput[];
    id?: UuidFilter<'hr_manager'> | string;
    hire_date?: DateTimeFilter<'hr_manager'> | Date | string;
    department?: StringFilter<'hr_manager'> | string;
    user_id?: UuidFilter<'hr_manager'> | string;
    created_at?: DateTimeFilter<'hr_manager'> | Date | string;
    updated_at?: DateTimeFilter<'hr_manager'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type hr_managerOrderByWithRelationInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type hr_managerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: hr_managerWhereInput | hr_managerWhereInput[];
      OR?: hr_managerWhereInput[];
      NOT?: hr_managerWhereInput | hr_managerWhereInput[];
      hire_date?: DateTimeFilter<'hr_manager'> | Date | string;
      department?: StringFilter<'hr_manager'> | string;
      user_id?: UuidFilter<'hr_manager'> | string;
      created_at?: DateTimeFilter<'hr_manager'> | Date | string;
      updated_at?: DateTimeFilter<'hr_manager'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type hr_managerOrderByWithAggregationInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: hr_managerCountOrderByAggregateInput;
    _max?: hr_managerMaxOrderByAggregateInput;
    _min?: hr_managerMinOrderByAggregateInput;
  };

  export type hr_managerScalarWhereWithAggregatesInput = {
    AND?: hr_managerScalarWhereWithAggregatesInput | hr_managerScalarWhereWithAggregatesInput[];
    OR?: hr_managerScalarWhereWithAggregatesInput[];
    NOT?: hr_managerScalarWhereWithAggregatesInput | hr_managerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'hr_manager'> | string;
    hire_date?: DateTimeWithAggregatesFilter<'hr_manager'> | Date | string;
    department?: StringWithAggregatesFilter<'hr_manager'> | string;
    user_id?: UuidWithAggregatesFilter<'hr_manager'> | string;
    created_at?: DateTimeWithAggregatesFilter<'hr_manager'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'hr_manager'> | Date | string;
  };

  export type job_applicantWhereInput = {
    AND?: job_applicantWhereInput | job_applicantWhereInput[];
    OR?: job_applicantWhereInput[];
    NOT?: job_applicantWhereInput | job_applicantWhereInput[];
    id?: UuidFilter<'job_applicant'> | string;
    application_date?: DateTimeFilter<'job_applicant'> | Date | string;
    position_applied?: StringFilter<'job_applicant'> | string;
    resume?: StringFilter<'job_applicant'> | string;
    status?: StringFilter<'job_applicant'> | string;
    user_id?: UuidFilter<'job_applicant'> | string;
    created_at?: DateTimeFilter<'job_applicant'> | Date | string;
    updated_at?: DateTimeFilter<'job_applicant'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type job_applicantOrderByWithRelationInput = {
    id?: SortOrder;
    application_date?: SortOrder;
    position_applied?: SortOrder;
    resume?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type job_applicantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: job_applicantWhereInput | job_applicantWhereInput[];
      OR?: job_applicantWhereInput[];
      NOT?: job_applicantWhereInput | job_applicantWhereInput[];
      application_date?: DateTimeFilter<'job_applicant'> | Date | string;
      position_applied?: StringFilter<'job_applicant'> | string;
      resume?: StringFilter<'job_applicant'> | string;
      status?: StringFilter<'job_applicant'> | string;
      user_id?: UuidFilter<'job_applicant'> | string;
      created_at?: DateTimeFilter<'job_applicant'> | Date | string;
      updated_at?: DateTimeFilter<'job_applicant'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type job_applicantOrderByWithAggregationInput = {
    id?: SortOrder;
    application_date?: SortOrder;
    position_applied?: SortOrder;
    resume?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: job_applicantCountOrderByAggregateInput;
    _max?: job_applicantMaxOrderByAggregateInput;
    _min?: job_applicantMinOrderByAggregateInput;
  };

  export type job_applicantScalarWhereWithAggregatesInput = {
    AND?: job_applicantScalarWhereWithAggregatesInput | job_applicantScalarWhereWithAggregatesInput[];
    OR?: job_applicantScalarWhereWithAggregatesInput[];
    NOT?: job_applicantScalarWhereWithAggregatesInput | job_applicantScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job_applicant'> | string;
    application_date?: DateTimeWithAggregatesFilter<'job_applicant'> | Date | string;
    position_applied?: StringWithAggregatesFilter<'job_applicant'> | string;
    resume?: StringWithAggregatesFilter<'job_applicant'> | string;
    status?: StringWithAggregatesFilter<'job_applicant'> | string;
    user_id?: UuidWithAggregatesFilter<'job_applicant'> | string;
    created_at?: DateTimeWithAggregatesFilter<'job_applicant'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job_applicant'> | Date | string;
  };

  export type ownerWhereInput = {
    AND?: ownerWhereInput | ownerWhereInput[];
    OR?: ownerWhereInput[];
    NOT?: ownerWhereInput | ownerWhereInput[];
    id?: UuidFilter<'owner'> | string;
    ownership_percentage?: IntFilter<'owner'> | number;
    user_id?: UuidFilter<'owner'> | string;
    created_at?: DateTimeFilter<'owner'> | Date | string;
    updated_at?: DateTimeFilter<'owner'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type ownerOrderByWithRelationInput = {
    id?: SortOrder;
    ownership_percentage?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ownerWhereInput | ownerWhereInput[];
      OR?: ownerWhereInput[];
      NOT?: ownerWhereInput | ownerWhereInput[];
      ownership_percentage?: IntFilter<'owner'> | number;
      user_id?: UuidFilter<'owner'> | string;
      created_at?: DateTimeFilter<'owner'> | Date | string;
      updated_at?: DateTimeFilter<'owner'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    ownership_percentage?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ownerCountOrderByAggregateInput;
    _avg?: ownerAvgOrderByAggregateInput;
    _max?: ownerMaxOrderByAggregateInput;
    _min?: ownerMinOrderByAggregateInput;
    _sum?: ownerSumOrderByAggregateInput;
  };

  export type ownerScalarWhereWithAggregatesInput = {
    AND?: ownerScalarWhereWithAggregatesInput | ownerScalarWhereWithAggregatesInput[];
    OR?: ownerScalarWhereWithAggregatesInput[];
    NOT?: ownerScalarWhereWithAggregatesInput | ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'owner'> | string;
    ownership_percentage?: IntWithAggregatesFilter<'owner'> | number;
    user_id?: UuidWithAggregatesFilter<'owner'> | string;
    created_at?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    employee?: EmployeeListRelationFilter;
    hr_manager?: Hr_managerListRelationFilter;
    job_applicant?: Job_applicantListRelationFilter;
    owner?: OwnerListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    employee?: employeeOrderByRelationAggregateInput;
    hr_manager?: hr_managerOrderByRelationAggregateInput;
    job_applicant?: job_applicantOrderByRelationAggregateInput;
    owner?: ownerOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      employee?: EmployeeListRelationFilter;
      hr_manager?: Hr_managerListRelationFilter;
      job_applicant?: Job_applicantListRelationFilter;
      owner?: OwnerListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type employeeCreateInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutOther_employeeInput;
    other_employee?: employeeCreateNestedManyWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    report_to: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    other_employee?: employeeUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutOther_employeeNestedInput;
    other_employee?: employeeUpdateManyWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    report_to?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    other_employee?: employeeUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateManyInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    report_to: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    report_to?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerCreateInput = {
    id?: string;
    hire_date: Date | string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutHr_managerInput;
  };

  export type hr_managerUncheckedCreateInput = {
    id?: string;
    hire_date: Date | string;
    department: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutHr_managerNestedInput;
  };

  export type hr_managerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerCreateManyInput = {
    id?: string;
    hire_date: Date | string;
    department: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicantCreateInput = {
    id?: string;
    application_date: Date | string;
    position_applied: string;
    resume: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutJob_applicantInput;
  };

  export type job_applicantUncheckedCreateInput = {
    id?: string;
    application_date: Date | string;
    position_applied: string;
    resume: string;
    status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position_applied?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutJob_applicantNestedInput;
  };

  export type job_applicantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position_applied?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicantCreateManyInput = {
    id?: string;
    application_date: Date | string;
    position_applied: string;
    resume: string;
    status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position_applied?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position_applied?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerCreateInput = {
    id?: string;
    ownership_percentage: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateInput = {
    id?: string;
    ownership_percentage: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerCreateManyInput = {
    id?: string;
    ownership_percentage: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
    job_applicant?: job_applicantCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
    job_applicant?: job_applicantUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
    job_applicant?: job_applicantUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
    job_applicant?: job_applicantUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    industry?: SortOrder;
    size?: SortOrder;
    founded_year?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyAvgOrderByAggregateInput = {
    size?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    industry?: SortOrder;
    size?: SortOrder;
    founded_year?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    industry?: SortOrder;
    size?: SortOrder;
    founded_year?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companySumOrderByAggregateInput = {
    size?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type EmployeeRelationFilter = {
    is?: employeeWhereInput;
    isNot?: employeeWhereInput;
  };

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput;
    some?: employeeWhereInput;
    none?: employeeWhereInput;
  };

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    salary?: SortOrder;
    department?: SortOrder;
    report_to?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    salary?: SortOrder;
    department?: SortOrder;
    report_to?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    salary?: SortOrder;
    department?: SortOrder;
    report_to?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type hr_managerCountOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hr_managerMaxOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hr_managerMinOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_applicantCountOrderByAggregateInput = {
    id?: SortOrder;
    application_date?: SortOrder;
    position_applied?: SortOrder;
    resume?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_applicantMaxOrderByAggregateInput = {
    id?: SortOrder;
    application_date?: SortOrder;
    position_applied?: SortOrder;
    resume?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_applicantMinOrderByAggregateInput = {
    id?: SortOrder;
    application_date?: SortOrder;
    position_applied?: SortOrder;
    resume?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    ownership_percentage?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerAvgOrderByAggregateInput = {
    ownership_percentage?: SortOrder;
  };

  export type ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    ownership_percentage?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    ownership_percentage?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerSumOrderByAggregateInput = {
    ownership_percentage?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type Hr_managerListRelationFilter = {
    every?: hr_managerWhereInput;
    some?: hr_managerWhereInput;
    none?: hr_managerWhereInput;
  };

  export type Job_applicantListRelationFilter = {
    every?: job_applicantWhereInput;
    some?: job_applicantWhereInput;
    none?: job_applicantWhereInput;
  };

  export type OwnerListRelationFilter = {
    every?: ownerWhereInput;
    some?: ownerWhereInput;
    none?: ownerWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type hr_managerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type job_applicantOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type employeeCreateNestedOneWithoutOther_employeeInput = {
    create?: XOR<employeeCreateWithoutOther_employeeInput, employeeUncheckedCreateWithoutOther_employeeInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutOther_employeeInput;
    connect?: employeeWhereUniqueInput;
  };

  export type employeeCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<employeeCreateWithoutEmployeeInput, employeeUncheckedCreateWithoutEmployeeInput>
      | employeeCreateWithoutEmployeeInput[]
      | employeeUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutEmployeeInput | employeeCreateOrConnectWithoutEmployeeInput[];
    createMany?: employeeCreateManyEmployeeInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
  };

  export type employeeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<employeeCreateWithoutEmployeeInput, employeeUncheckedCreateWithoutEmployeeInput>
      | employeeCreateWithoutEmployeeInput[]
      | employeeUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutEmployeeInput | employeeCreateOrConnectWithoutEmployeeInput[];
    createMany?: employeeCreateManyEmployeeInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type employeeUpdateOneRequiredWithoutOther_employeeNestedInput = {
    create?: XOR<employeeCreateWithoutOther_employeeInput, employeeUncheckedCreateWithoutOther_employeeInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutOther_employeeInput;
    upsert?: employeeUpsertWithoutOther_employeeInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutOther_employeeInput, employeeUpdateWithoutOther_employeeInput>,
      employeeUncheckedUpdateWithoutOther_employeeInput
    >;
  };

  export type employeeUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<employeeCreateWithoutEmployeeInput, employeeUncheckedCreateWithoutEmployeeInput>
      | employeeCreateWithoutEmployeeInput[]
      | employeeUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutEmployeeInput | employeeCreateOrConnectWithoutEmployeeInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutEmployeeInput | employeeUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: employeeCreateManyEmployeeInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutEmployeeInput | employeeUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutEmployeeInput | employeeUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    upsert?: userUpsertWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEmployeeInput, userUpdateWithoutEmployeeInput>,
      userUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type employeeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<employeeCreateWithoutEmployeeInput, employeeUncheckedCreateWithoutEmployeeInput>
      | employeeCreateWithoutEmployeeInput[]
      | employeeUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutEmployeeInput | employeeCreateOrConnectWithoutEmployeeInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutEmployeeInput | employeeUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: employeeCreateManyEmployeeInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutEmployeeInput | employeeUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutEmployeeInput | employeeUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutHr_managerInput = {
    create?: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutHr_managerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutHr_managerNestedInput = {
    create?: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutHr_managerInput;
    upsert?: userUpsertWithoutHr_managerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutHr_managerInput, userUpdateWithoutHr_managerInput>,
      userUncheckedUpdateWithoutHr_managerInput
    >;
  };

  export type userCreateNestedOneWithoutJob_applicantInput = {
    create?: XOR<userCreateWithoutJob_applicantInput, userUncheckedCreateWithoutJob_applicantInput>;
    connectOrCreate?: userCreateOrConnectWithoutJob_applicantInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutJob_applicantNestedInput = {
    create?: XOR<userCreateWithoutJob_applicantInput, userUncheckedCreateWithoutJob_applicantInput>;
    connectOrCreate?: userCreateOrConnectWithoutJob_applicantInput;
    upsert?: userUpsertWithoutJob_applicantInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutJob_applicantInput, userUpdateWithoutJob_applicantInput>,
      userUncheckedUpdateWithoutJob_applicantInput
    >;
  };

  export type userCreateNestedOneWithoutOwnerInput = {
    create?: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOwnerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOwnerInput;
    upsert?: userUpsertWithoutOwnerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOwnerInput, userUpdateWithoutOwnerInput>,
      userUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type employeeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type hr_managerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
  };

  export type job_applicantCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<job_applicantCreateWithoutUserInput, job_applicantUncheckedCreateWithoutUserInput>
      | job_applicantCreateWithoutUserInput[]
      | job_applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicantCreateOrConnectWithoutUserInput | job_applicantCreateOrConnectWithoutUserInput[];
    createMany?: job_applicantCreateManyUserInputEnvelope;
    connect?: job_applicantWhereUniqueInput | job_applicantWhereUniqueInput[];
  };

  export type ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type hr_managerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
  };

  export type job_applicantUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<job_applicantCreateWithoutUserInput, job_applicantUncheckedCreateWithoutUserInput>
      | job_applicantCreateWithoutUserInput[]
      | job_applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicantCreateOrConnectWithoutUserInput | job_applicantCreateOrConnectWithoutUserInput[];
    createMany?: job_applicantCreateManyUserInputEnvelope;
    connect?: job_applicantWhereUniqueInput | job_applicantWhereUniqueInput[];
  };

  export type ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type employeeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type hr_managerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    upsert?: hr_managerUpsertWithWhereUniqueWithoutUserInput | hr_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    set?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    disconnect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    delete?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    update?: hr_managerUpdateWithWhereUniqueWithoutUserInput | hr_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: hr_managerUpdateManyWithWhereWithoutUserInput | hr_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
  };

  export type job_applicantUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<job_applicantCreateWithoutUserInput, job_applicantUncheckedCreateWithoutUserInput>
      | job_applicantCreateWithoutUserInput[]
      | job_applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicantCreateOrConnectWithoutUserInput | job_applicantCreateOrConnectWithoutUserInput[];
    upsert?: job_applicantUpsertWithWhereUniqueWithoutUserInput | job_applicantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: job_applicantCreateManyUserInputEnvelope;
    set?: job_applicantWhereUniqueInput | job_applicantWhereUniqueInput[];
    disconnect?: job_applicantWhereUniqueInput | job_applicantWhereUniqueInput[];
    delete?: job_applicantWhereUniqueInput | job_applicantWhereUniqueInput[];
    connect?: job_applicantWhereUniqueInput | job_applicantWhereUniqueInput[];
    update?: job_applicantUpdateWithWhereUniqueWithoutUserInput | job_applicantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: job_applicantUpdateManyWithWhereWithoutUserInput | job_applicantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: job_applicantScalarWhereInput | job_applicantScalarWhereInput[];
  };

  export type ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutUserInput | ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutUserInput | ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutUserInput | ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type hr_managerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    upsert?: hr_managerUpsertWithWhereUniqueWithoutUserInput | hr_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    set?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    disconnect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    delete?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    update?: hr_managerUpdateWithWhereUniqueWithoutUserInput | hr_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: hr_managerUpdateManyWithWhereWithoutUserInput | hr_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
  };

  export type job_applicantUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<job_applicantCreateWithoutUserInput, job_applicantUncheckedCreateWithoutUserInput>
      | job_applicantCreateWithoutUserInput[]
      | job_applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicantCreateOrConnectWithoutUserInput | job_applicantCreateOrConnectWithoutUserInput[];
    upsert?: job_applicantUpsertWithWhereUniqueWithoutUserInput | job_applicantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: job_applicantCreateManyUserInputEnvelope;
    set?: job_applicantWhereUniqueInput | job_applicantWhereUniqueInput[];
    disconnect?: job_applicantWhereUniqueInput | job_applicantWhereUniqueInput[];
    delete?: job_applicantWhereUniqueInput | job_applicantWhereUniqueInput[];
    connect?: job_applicantWhereUniqueInput | job_applicantWhereUniqueInput[];
    update?: job_applicantUpdateWithWhereUniqueWithoutUserInput | job_applicantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: job_applicantUpdateManyWithWhereWithoutUserInput | job_applicantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: job_applicantScalarWhereInput | job_applicantScalarWhereInput[];
  };

  export type ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutUserInput | ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutUserInput | ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutUserInput | ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
    job_applicant?: job_applicantCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
    job_applicant?: job_applicantUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
    job_applicant?: job_applicantUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
    job_applicant?: job_applicantUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type employeeCreateWithoutOther_employeeInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutOther_employeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutOther_employeeInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    report_to: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateOrConnectWithoutOther_employeeInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutOther_employeeInput, employeeUncheckedCreateWithoutOther_employeeInput>;
  };

  export type employeeCreateWithoutEmployeeInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    other_employee?: employeeCreateNestedManyWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    other_employee?: employeeUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutEmployeeInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutEmployeeInput, employeeUncheckedCreateWithoutEmployeeInput>;
  };

  export type employeeCreateManyEmployeeInputEnvelope = {
    data: employeeCreateManyEmployeeInput | employeeCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
    job_applicant?: job_applicantCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
    job_applicant?: job_applicantUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEmployeeInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
  };

  export type employeeUpsertWithoutOther_employeeInput = {
    update: XOR<employeeUpdateWithoutOther_employeeInput, employeeUncheckedUpdateWithoutOther_employeeInput>;
    create: XOR<employeeCreateWithoutOther_employeeInput, employeeUncheckedCreateWithoutOther_employeeInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutOther_employeeInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutOther_employeeInput, employeeUncheckedUpdateWithoutOther_employeeInput>;
  };

  export type employeeUpdateWithoutOther_employeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutOther_employeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutOther_employeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    report_to?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutEmployeeInput, employeeUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<employeeCreateWithoutEmployeeInput, employeeUncheckedCreateWithoutEmployeeInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutEmployeeInput, employeeUncheckedUpdateWithoutEmployeeInput>;
  };

  export type employeeUpdateManyWithWhereWithoutEmployeeInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[];
    OR?: employeeScalarWhereInput[];
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[];
    id?: UuidFilter<'employee'> | string;
    hire_date?: DateTimeFilter<'employee'> | Date | string;
    job_title?: StringFilter<'employee'> | string;
    salary?: IntFilter<'employee'> | number;
    department?: StringFilter<'employee'> | string;
    report_to?: UuidFilter<'employee'> | string;
    user_id?: UuidFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
  };

  export type userUpsertWithoutEmployeeInput = {
    update: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
  };

  export type userUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
    job_applicant?: job_applicantUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
    job_applicant?: job_applicantUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutHr_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    job_applicant?: job_applicantCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutHr_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    job_applicant?: job_applicantUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutHr_managerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
  };

  export type userUpsertWithoutHr_managerInput = {
    update: XOR<userUpdateWithoutHr_managerInput, userUncheckedUpdateWithoutHr_managerInput>;
    create: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutHr_managerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutHr_managerInput, userUncheckedUpdateWithoutHr_managerInput>;
  };

  export type userUpdateWithoutHr_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    job_applicant?: job_applicantUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutHr_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    job_applicant?: job_applicantUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutJob_applicantInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutJob_applicantInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutJob_applicantInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutJob_applicantInput, userUncheckedCreateWithoutJob_applicantInput>;
  };

  export type userUpsertWithoutJob_applicantInput = {
    update: XOR<userUpdateWithoutJob_applicantInput, userUncheckedUpdateWithoutJob_applicantInput>;
    create: XOR<userCreateWithoutJob_applicantInput, userUncheckedCreateWithoutJob_applicantInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutJob_applicantInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutJob_applicantInput, userUncheckedUpdateWithoutJob_applicantInput>;
  };

  export type userUpdateWithoutJob_applicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutJob_applicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutOwnerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
    job_applicant?: job_applicantCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOwnerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
    job_applicant?: job_applicantUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOwnerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
  };

  export type userUpsertWithoutOwnerInput = {
    update: XOR<userUpdateWithoutOwnerInput, userUncheckedUpdateWithoutOwnerInput>;
    create: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOwnerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOwnerInput, userUncheckedUpdateWithoutOwnerInput>;
  };

  export type userUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
    job_applicant?: job_applicantUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
    job_applicant?: job_applicantUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type employeeCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutOther_employeeInput;
    other_employee?: employeeCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    report_to: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    other_employee?: employeeUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutUserInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeCreateManyUserInputEnvelope = {
    data: employeeCreateManyUserInput | employeeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type hr_managerCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerUncheckedCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerCreateOrConnectWithoutUserInput = {
    where: hr_managerWhereUniqueInput;
    create: XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>;
  };

  export type hr_managerCreateManyUserInputEnvelope = {
    data: hr_managerCreateManyUserInput | hr_managerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type job_applicantCreateWithoutUserInput = {
    id?: string;
    application_date: Date | string;
    position_applied: string;
    resume: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicantUncheckedCreateWithoutUserInput = {
    id?: string;
    application_date: Date | string;
    position_applied: string;
    resume: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicantCreateOrConnectWithoutUserInput = {
    where: job_applicantWhereUniqueInput;
    create: XOR<job_applicantCreateWithoutUserInput, job_applicantUncheckedCreateWithoutUserInput>;
  };

  export type job_applicantCreateManyUserInputEnvelope = {
    data: job_applicantCreateManyUserInput | job_applicantCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ownerCreateWithoutUserInput = {
    id?: string;
    ownership_percentage: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    ownership_percentage: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateOrConnectWithoutUserInput = {
    where: ownerWhereUniqueInput;
    create: XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>;
  };

  export type ownerCreateManyUserInputEnvelope = {
    data: ownerCreateManyUserInput | ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    industry?: StringNullableFilter<'company'> | string | null;
    size?: IntNullableFilter<'company'> | number | null;
    founded_year?: DateTimeNullableFilter<'company'> | Date | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type employeeUpsertWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
  };

  export type employeeUpdateManyWithWhereWithoutUserInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutUserInput>;
  };

  export type hr_managerUpsertWithWhereUniqueWithoutUserInput = {
    where: hr_managerWhereUniqueInput;
    update: XOR<hr_managerUpdateWithoutUserInput, hr_managerUncheckedUpdateWithoutUserInput>;
    create: XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>;
  };

  export type hr_managerUpdateWithWhereUniqueWithoutUserInput = {
    where: hr_managerWhereUniqueInput;
    data: XOR<hr_managerUpdateWithoutUserInput, hr_managerUncheckedUpdateWithoutUserInput>;
  };

  export type hr_managerUpdateManyWithWhereWithoutUserInput = {
    where: hr_managerScalarWhereInput;
    data: XOR<hr_managerUpdateManyMutationInput, hr_managerUncheckedUpdateManyWithoutUserInput>;
  };

  export type hr_managerScalarWhereInput = {
    AND?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
    OR?: hr_managerScalarWhereInput[];
    NOT?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
    id?: UuidFilter<'hr_manager'> | string;
    hire_date?: DateTimeFilter<'hr_manager'> | Date | string;
    department?: StringFilter<'hr_manager'> | string;
    user_id?: UuidFilter<'hr_manager'> | string;
    created_at?: DateTimeFilter<'hr_manager'> | Date | string;
    updated_at?: DateTimeFilter<'hr_manager'> | Date | string;
  };

  export type job_applicantUpsertWithWhereUniqueWithoutUserInput = {
    where: job_applicantWhereUniqueInput;
    update: XOR<job_applicantUpdateWithoutUserInput, job_applicantUncheckedUpdateWithoutUserInput>;
    create: XOR<job_applicantCreateWithoutUserInput, job_applicantUncheckedCreateWithoutUserInput>;
  };

  export type job_applicantUpdateWithWhereUniqueWithoutUserInput = {
    where: job_applicantWhereUniqueInput;
    data: XOR<job_applicantUpdateWithoutUserInput, job_applicantUncheckedUpdateWithoutUserInput>;
  };

  export type job_applicantUpdateManyWithWhereWithoutUserInput = {
    where: job_applicantScalarWhereInput;
    data: XOR<job_applicantUpdateManyMutationInput, job_applicantUncheckedUpdateManyWithoutUserInput>;
  };

  export type job_applicantScalarWhereInput = {
    AND?: job_applicantScalarWhereInput | job_applicantScalarWhereInput[];
    OR?: job_applicantScalarWhereInput[];
    NOT?: job_applicantScalarWhereInput | job_applicantScalarWhereInput[];
    id?: UuidFilter<'job_applicant'> | string;
    application_date?: DateTimeFilter<'job_applicant'> | Date | string;
    position_applied?: StringFilter<'job_applicant'> | string;
    resume?: StringFilter<'job_applicant'> | string;
    status?: StringFilter<'job_applicant'> | string;
    user_id?: UuidFilter<'job_applicant'> | string;
    created_at?: DateTimeFilter<'job_applicant'> | Date | string;
    updated_at?: DateTimeFilter<'job_applicant'> | Date | string;
  };

  export type ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: ownerWhereUniqueInput;
    update: XOR<ownerUpdateWithoutUserInput, ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>;
  };

  export type ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: ownerWhereUniqueInput;
    data: XOR<ownerUpdateWithoutUserInput, ownerUncheckedUpdateWithoutUserInput>;
  };

  export type ownerUpdateManyWithWhereWithoutUserInput = {
    where: ownerScalarWhereInput;
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type ownerScalarWhereInput = {
    AND?: ownerScalarWhereInput | ownerScalarWhereInput[];
    OR?: ownerScalarWhereInput[];
    NOT?: ownerScalarWhereInput | ownerScalarWhereInput[];
    id?: UuidFilter<'owner'> | string;
    ownership_percentage?: IntFilter<'owner'> | number;
    user_id?: UuidFilter<'owner'> | string;
    created_at?: DateTimeFilter<'owner'> | Date | string;
    updated_at?: DateTimeFilter<'owner'> | Date | string;
  };

  export type employeeCreateManyEmployeeInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    other_employee?: employeeUpdateManyWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    other_employee?: employeeUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type employeeCreateManyUserInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    department: string;
    report_to: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerCreateManyUserInput = {
    id?: string;
    hire_date: Date | string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicantCreateManyUserInput = {
    id?: string;
    application_date: Date | string;
    position_applied: string;
    resume: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateManyUserInput = {
    id?: string;
    ownership_percentage: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type employeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutOther_employeeNestedInput;
    other_employee?: employeeUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    report_to?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    other_employee?: employeeUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    department?: StringFieldUpdateOperationsInput | string;
    report_to?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position_applied?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position_applied?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position_applied?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
   */
  export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employeeDefaultArgs instead
   */
  export type employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employeeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use hr_managerDefaultArgs instead
   */
  export type hr_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    hr_managerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use job_applicantDefaultArgs instead
   */
  export type job_applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    job_applicantDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ownerDefaultArgs instead
   */
  export type ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
