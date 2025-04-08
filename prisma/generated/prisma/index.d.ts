
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model RegisteredRunner
 * 
 */
export type RegisteredRunner = $Result.DefaultSelection<Prisma.$RegisteredRunnerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RegisteredRunners
 * const registeredRunners = await prisma.registeredRunner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more RegisteredRunners
   * const registeredRunners = await prisma.registeredRunner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.registeredRunner`: Exposes CRUD operations for the **RegisteredRunner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegisteredRunners
    * const registeredRunners = await prisma.registeredRunner.findMany()
    * ```
    */
  get registeredRunner(): Prisma.RegisteredRunnerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    RegisteredRunner: 'RegisteredRunner'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "registeredRunner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RegisteredRunner: {
        payload: Prisma.$RegisteredRunnerPayload<ExtArgs>
        fields: Prisma.RegisteredRunnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegisteredRunnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegisteredRunnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload>
          }
          findFirst: {
            args: Prisma.RegisteredRunnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegisteredRunnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload>
          }
          findMany: {
            args: Prisma.RegisteredRunnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload>[]
          }
          create: {
            args: Prisma.RegisteredRunnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload>
          }
          createMany: {
            args: Prisma.RegisteredRunnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegisteredRunnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload>[]
          }
          delete: {
            args: Prisma.RegisteredRunnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload>
          }
          update: {
            args: Prisma.RegisteredRunnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload>
          }
          deleteMany: {
            args: Prisma.RegisteredRunnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegisteredRunnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegisteredRunnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload>[]
          }
          upsert: {
            args: Prisma.RegisteredRunnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredRunnerPayload>
          }
          aggregate: {
            args: Prisma.RegisteredRunnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegisteredRunner>
          }
          groupBy: {
            args: Prisma.RegisteredRunnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegisteredRunnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegisteredRunnerCountArgs<ExtArgs>
            result: $Utils.Optional<RegisteredRunnerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    registeredRunner?: RegisteredRunnerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model RegisteredRunner
   */

  export type AggregateRegisteredRunner = {
    _count: RegisteredRunnerCountAggregateOutputType | null
    _avg: RegisteredRunnerAvgAggregateOutputType | null
    _sum: RegisteredRunnerSumAggregateOutputType | null
    _min: RegisteredRunnerMinAggregateOutputType | null
    _max: RegisteredRunnerMaxAggregateOutputType | null
  }

  export type RegisteredRunnerAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type RegisteredRunnerSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type RegisteredRunnerMinAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    age: number | null
    trail: string | null
    country: string | null
    createdAt: Date | null
  }

  export type RegisteredRunnerMaxAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    age: number | null
    trail: string | null
    country: string | null
    createdAt: Date | null
  }

  export type RegisteredRunnerCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    age: number
    trail: number
    country: number
    createdAt: number
    _all: number
  }


  export type RegisteredRunnerAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type RegisteredRunnerSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type RegisteredRunnerMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    age?: true
    trail?: true
    country?: true
    createdAt?: true
  }

  export type RegisteredRunnerMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    age?: true
    trail?: true
    country?: true
    createdAt?: true
  }

  export type RegisteredRunnerCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    age?: true
    trail?: true
    country?: true
    createdAt?: true
    _all?: true
  }

  export type RegisteredRunnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegisteredRunner to aggregate.
     */
    where?: RegisteredRunnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredRunners to fetch.
     */
    orderBy?: RegisteredRunnerOrderByWithRelationInput | RegisteredRunnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegisteredRunnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredRunners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredRunners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegisteredRunners
    **/
    _count?: true | RegisteredRunnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegisteredRunnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegisteredRunnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegisteredRunnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegisteredRunnerMaxAggregateInputType
  }

  export type GetRegisteredRunnerAggregateType<T extends RegisteredRunnerAggregateArgs> = {
        [P in keyof T & keyof AggregateRegisteredRunner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegisteredRunner[P]>
      : GetScalarType<T[P], AggregateRegisteredRunner[P]>
  }




  export type RegisteredRunnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisteredRunnerWhereInput
    orderBy?: RegisteredRunnerOrderByWithAggregationInput | RegisteredRunnerOrderByWithAggregationInput[]
    by: RegisteredRunnerScalarFieldEnum[] | RegisteredRunnerScalarFieldEnum
    having?: RegisteredRunnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegisteredRunnerCountAggregateInputType | true
    _avg?: RegisteredRunnerAvgAggregateInputType
    _sum?: RegisteredRunnerSumAggregateInputType
    _min?: RegisteredRunnerMinAggregateInputType
    _max?: RegisteredRunnerMaxAggregateInputType
  }

  export type RegisteredRunnerGroupByOutputType = {
    id: number
    email: string
    fullName: string
    age: number
    trail: string
    country: string
    createdAt: Date
    _count: RegisteredRunnerCountAggregateOutputType | null
    _avg: RegisteredRunnerAvgAggregateOutputType | null
    _sum: RegisteredRunnerSumAggregateOutputType | null
    _min: RegisteredRunnerMinAggregateOutputType | null
    _max: RegisteredRunnerMaxAggregateOutputType | null
  }

  type GetRegisteredRunnerGroupByPayload<T extends RegisteredRunnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegisteredRunnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegisteredRunnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegisteredRunnerGroupByOutputType[P]>
            : GetScalarType<T[P], RegisteredRunnerGroupByOutputType[P]>
        }
      >
    >


  export type RegisteredRunnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    age?: boolean
    trail?: boolean
    country?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["registeredRunner"]>

  export type RegisteredRunnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    age?: boolean
    trail?: boolean
    country?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["registeredRunner"]>

  export type RegisteredRunnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    age?: boolean
    trail?: boolean
    country?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["registeredRunner"]>

  export type RegisteredRunnerSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    age?: boolean
    trail?: boolean
    country?: boolean
    createdAt?: boolean
  }

  export type RegisteredRunnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "age" | "trail" | "country" | "createdAt", ExtArgs["result"]["registeredRunner"]>

  export type $RegisteredRunnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegisteredRunner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      fullName: string
      age: number
      trail: string
      country: string
      createdAt: Date
    }, ExtArgs["result"]["registeredRunner"]>
    composites: {}
  }

  type RegisteredRunnerGetPayload<S extends boolean | null | undefined | RegisteredRunnerDefaultArgs> = $Result.GetResult<Prisma.$RegisteredRunnerPayload, S>

  type RegisteredRunnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegisteredRunnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegisteredRunnerCountAggregateInputType | true
    }

  export interface RegisteredRunnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegisteredRunner'], meta: { name: 'RegisteredRunner' } }
    /**
     * Find zero or one RegisteredRunner that matches the filter.
     * @param {RegisteredRunnerFindUniqueArgs} args - Arguments to find a RegisteredRunner
     * @example
     * // Get one RegisteredRunner
     * const registeredRunner = await prisma.registeredRunner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegisteredRunnerFindUniqueArgs>(args: SelectSubset<T, RegisteredRunnerFindUniqueArgs<ExtArgs>>): Prisma__RegisteredRunnerClient<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegisteredRunner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegisteredRunnerFindUniqueOrThrowArgs} args - Arguments to find a RegisteredRunner
     * @example
     * // Get one RegisteredRunner
     * const registeredRunner = await prisma.registeredRunner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegisteredRunnerFindUniqueOrThrowArgs>(args: SelectSubset<T, RegisteredRunnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegisteredRunnerClient<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegisteredRunner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredRunnerFindFirstArgs} args - Arguments to find a RegisteredRunner
     * @example
     * // Get one RegisteredRunner
     * const registeredRunner = await prisma.registeredRunner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegisteredRunnerFindFirstArgs>(args?: SelectSubset<T, RegisteredRunnerFindFirstArgs<ExtArgs>>): Prisma__RegisteredRunnerClient<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegisteredRunner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredRunnerFindFirstOrThrowArgs} args - Arguments to find a RegisteredRunner
     * @example
     * // Get one RegisteredRunner
     * const registeredRunner = await prisma.registeredRunner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegisteredRunnerFindFirstOrThrowArgs>(args?: SelectSubset<T, RegisteredRunnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegisteredRunnerClient<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegisteredRunners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredRunnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegisteredRunners
     * const registeredRunners = await prisma.registeredRunner.findMany()
     * 
     * // Get first 10 RegisteredRunners
     * const registeredRunners = await prisma.registeredRunner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registeredRunnerWithIdOnly = await prisma.registeredRunner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegisteredRunnerFindManyArgs>(args?: SelectSubset<T, RegisteredRunnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegisteredRunner.
     * @param {RegisteredRunnerCreateArgs} args - Arguments to create a RegisteredRunner.
     * @example
     * // Create one RegisteredRunner
     * const RegisteredRunner = await prisma.registeredRunner.create({
     *   data: {
     *     // ... data to create a RegisteredRunner
     *   }
     * })
     * 
     */
    create<T extends RegisteredRunnerCreateArgs>(args: SelectSubset<T, RegisteredRunnerCreateArgs<ExtArgs>>): Prisma__RegisteredRunnerClient<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegisteredRunners.
     * @param {RegisteredRunnerCreateManyArgs} args - Arguments to create many RegisteredRunners.
     * @example
     * // Create many RegisteredRunners
     * const registeredRunner = await prisma.registeredRunner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegisteredRunnerCreateManyArgs>(args?: SelectSubset<T, RegisteredRunnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegisteredRunners and returns the data saved in the database.
     * @param {RegisteredRunnerCreateManyAndReturnArgs} args - Arguments to create many RegisteredRunners.
     * @example
     * // Create many RegisteredRunners
     * const registeredRunner = await prisma.registeredRunner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegisteredRunners and only return the `id`
     * const registeredRunnerWithIdOnly = await prisma.registeredRunner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegisteredRunnerCreateManyAndReturnArgs>(args?: SelectSubset<T, RegisteredRunnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegisteredRunner.
     * @param {RegisteredRunnerDeleteArgs} args - Arguments to delete one RegisteredRunner.
     * @example
     * // Delete one RegisteredRunner
     * const RegisteredRunner = await prisma.registeredRunner.delete({
     *   where: {
     *     // ... filter to delete one RegisteredRunner
     *   }
     * })
     * 
     */
    delete<T extends RegisteredRunnerDeleteArgs>(args: SelectSubset<T, RegisteredRunnerDeleteArgs<ExtArgs>>): Prisma__RegisteredRunnerClient<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegisteredRunner.
     * @param {RegisteredRunnerUpdateArgs} args - Arguments to update one RegisteredRunner.
     * @example
     * // Update one RegisteredRunner
     * const registeredRunner = await prisma.registeredRunner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegisteredRunnerUpdateArgs>(args: SelectSubset<T, RegisteredRunnerUpdateArgs<ExtArgs>>): Prisma__RegisteredRunnerClient<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegisteredRunners.
     * @param {RegisteredRunnerDeleteManyArgs} args - Arguments to filter RegisteredRunners to delete.
     * @example
     * // Delete a few RegisteredRunners
     * const { count } = await prisma.registeredRunner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegisteredRunnerDeleteManyArgs>(args?: SelectSubset<T, RegisteredRunnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegisteredRunners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredRunnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegisteredRunners
     * const registeredRunner = await prisma.registeredRunner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegisteredRunnerUpdateManyArgs>(args: SelectSubset<T, RegisteredRunnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegisteredRunners and returns the data updated in the database.
     * @param {RegisteredRunnerUpdateManyAndReturnArgs} args - Arguments to update many RegisteredRunners.
     * @example
     * // Update many RegisteredRunners
     * const registeredRunner = await prisma.registeredRunner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegisteredRunners and only return the `id`
     * const registeredRunnerWithIdOnly = await prisma.registeredRunner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegisteredRunnerUpdateManyAndReturnArgs>(args: SelectSubset<T, RegisteredRunnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegisteredRunner.
     * @param {RegisteredRunnerUpsertArgs} args - Arguments to update or create a RegisteredRunner.
     * @example
     * // Update or create a RegisteredRunner
     * const registeredRunner = await prisma.registeredRunner.upsert({
     *   create: {
     *     // ... data to create a RegisteredRunner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegisteredRunner we want to update
     *   }
     * })
     */
    upsert<T extends RegisteredRunnerUpsertArgs>(args: SelectSubset<T, RegisteredRunnerUpsertArgs<ExtArgs>>): Prisma__RegisteredRunnerClient<$Result.GetResult<Prisma.$RegisteredRunnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegisteredRunners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredRunnerCountArgs} args - Arguments to filter RegisteredRunners to count.
     * @example
     * // Count the number of RegisteredRunners
     * const count = await prisma.registeredRunner.count({
     *   where: {
     *     // ... the filter for the RegisteredRunners we want to count
     *   }
     * })
    **/
    count<T extends RegisteredRunnerCountArgs>(
      args?: Subset<T, RegisteredRunnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegisteredRunnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegisteredRunner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredRunnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegisteredRunnerAggregateArgs>(args: Subset<T, RegisteredRunnerAggregateArgs>): Prisma.PrismaPromise<GetRegisteredRunnerAggregateType<T>>

    /**
     * Group by RegisteredRunner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredRunnerGroupByArgs} args - Group by arguments.
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
      T extends RegisteredRunnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegisteredRunnerGroupByArgs['orderBy'] }
        : { orderBy?: RegisteredRunnerGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegisteredRunnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisteredRunnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegisteredRunner model
   */
  readonly fields: RegisteredRunnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegisteredRunner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegisteredRunnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegisteredRunner model
   */ 
  interface RegisteredRunnerFieldRefs {
    readonly id: FieldRef<"RegisteredRunner", 'Int'>
    readonly email: FieldRef<"RegisteredRunner", 'String'>
    readonly fullName: FieldRef<"RegisteredRunner", 'String'>
    readonly age: FieldRef<"RegisteredRunner", 'Int'>
    readonly trail: FieldRef<"RegisteredRunner", 'String'>
    readonly country: FieldRef<"RegisteredRunner", 'String'>
    readonly createdAt: FieldRef<"RegisteredRunner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegisteredRunner findUnique
   */
  export type RegisteredRunnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * Filter, which RegisteredRunner to fetch.
     */
    where: RegisteredRunnerWhereUniqueInput
  }

  /**
   * RegisteredRunner findUniqueOrThrow
   */
  export type RegisteredRunnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * Filter, which RegisteredRunner to fetch.
     */
    where: RegisteredRunnerWhereUniqueInput
  }

  /**
   * RegisteredRunner findFirst
   */
  export type RegisteredRunnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * Filter, which RegisteredRunner to fetch.
     */
    where?: RegisteredRunnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredRunners to fetch.
     */
    orderBy?: RegisteredRunnerOrderByWithRelationInput | RegisteredRunnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegisteredRunners.
     */
    cursor?: RegisteredRunnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredRunners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredRunners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegisteredRunners.
     */
    distinct?: RegisteredRunnerScalarFieldEnum | RegisteredRunnerScalarFieldEnum[]
  }

  /**
   * RegisteredRunner findFirstOrThrow
   */
  export type RegisteredRunnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * Filter, which RegisteredRunner to fetch.
     */
    where?: RegisteredRunnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredRunners to fetch.
     */
    orderBy?: RegisteredRunnerOrderByWithRelationInput | RegisteredRunnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegisteredRunners.
     */
    cursor?: RegisteredRunnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredRunners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredRunners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegisteredRunners.
     */
    distinct?: RegisteredRunnerScalarFieldEnum | RegisteredRunnerScalarFieldEnum[]
  }

  /**
   * RegisteredRunner findMany
   */
  export type RegisteredRunnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * Filter, which RegisteredRunners to fetch.
     */
    where?: RegisteredRunnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredRunners to fetch.
     */
    orderBy?: RegisteredRunnerOrderByWithRelationInput | RegisteredRunnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegisteredRunners.
     */
    cursor?: RegisteredRunnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredRunners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredRunners.
     */
    skip?: number
    distinct?: RegisteredRunnerScalarFieldEnum | RegisteredRunnerScalarFieldEnum[]
  }

  /**
   * RegisteredRunner create
   */
  export type RegisteredRunnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * The data needed to create a RegisteredRunner.
     */
    data: XOR<RegisteredRunnerCreateInput, RegisteredRunnerUncheckedCreateInput>
  }

  /**
   * RegisteredRunner createMany
   */
  export type RegisteredRunnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegisteredRunners.
     */
    data: RegisteredRunnerCreateManyInput | RegisteredRunnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegisteredRunner createManyAndReturn
   */
  export type RegisteredRunnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * The data used to create many RegisteredRunners.
     */
    data: RegisteredRunnerCreateManyInput | RegisteredRunnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegisteredRunner update
   */
  export type RegisteredRunnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * The data needed to update a RegisteredRunner.
     */
    data: XOR<RegisteredRunnerUpdateInput, RegisteredRunnerUncheckedUpdateInput>
    /**
     * Choose, which RegisteredRunner to update.
     */
    where: RegisteredRunnerWhereUniqueInput
  }

  /**
   * RegisteredRunner updateMany
   */
  export type RegisteredRunnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegisteredRunners.
     */
    data: XOR<RegisteredRunnerUpdateManyMutationInput, RegisteredRunnerUncheckedUpdateManyInput>
    /**
     * Filter which RegisteredRunners to update
     */
    where?: RegisteredRunnerWhereInput
    /**
     * Limit how many RegisteredRunners to update.
     */
    limit?: number
  }

  /**
   * RegisteredRunner updateManyAndReturn
   */
  export type RegisteredRunnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * The data used to update RegisteredRunners.
     */
    data: XOR<RegisteredRunnerUpdateManyMutationInput, RegisteredRunnerUncheckedUpdateManyInput>
    /**
     * Filter which RegisteredRunners to update
     */
    where?: RegisteredRunnerWhereInput
    /**
     * Limit how many RegisteredRunners to update.
     */
    limit?: number
  }

  /**
   * RegisteredRunner upsert
   */
  export type RegisteredRunnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * The filter to search for the RegisteredRunner to update in case it exists.
     */
    where: RegisteredRunnerWhereUniqueInput
    /**
     * In case the RegisteredRunner found by the `where` argument doesn't exist, create a new RegisteredRunner with this data.
     */
    create: XOR<RegisteredRunnerCreateInput, RegisteredRunnerUncheckedCreateInput>
    /**
     * In case the RegisteredRunner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegisteredRunnerUpdateInput, RegisteredRunnerUncheckedUpdateInput>
  }

  /**
   * RegisteredRunner delete
   */
  export type RegisteredRunnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
    /**
     * Filter which RegisteredRunner to delete.
     */
    where: RegisteredRunnerWhereUniqueInput
  }

  /**
   * RegisteredRunner deleteMany
   */
  export type RegisteredRunnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegisteredRunners to delete
     */
    where?: RegisteredRunnerWhereInput
    /**
     * Limit how many RegisteredRunners to delete.
     */
    limit?: number
  }

  /**
   * RegisteredRunner without action
   */
  export type RegisteredRunnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredRunner
     */
    select?: RegisteredRunnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredRunner
     */
    omit?: RegisteredRunnerOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RegisteredRunnerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    age: 'age',
    trail: 'trail',
    country: 'country',
    createdAt: 'createdAt'
  };

  export type RegisteredRunnerScalarFieldEnum = (typeof RegisteredRunnerScalarFieldEnum)[keyof typeof RegisteredRunnerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RegisteredRunnerWhereInput = {
    AND?: RegisteredRunnerWhereInput | RegisteredRunnerWhereInput[]
    OR?: RegisteredRunnerWhereInput[]
    NOT?: RegisteredRunnerWhereInput | RegisteredRunnerWhereInput[]
    id?: IntFilter<"RegisteredRunner"> | number
    email?: StringFilter<"RegisteredRunner"> | string
    fullName?: StringFilter<"RegisteredRunner"> | string
    age?: IntFilter<"RegisteredRunner"> | number
    trail?: StringFilter<"RegisteredRunner"> | string
    country?: StringFilter<"RegisteredRunner"> | string
    createdAt?: DateTimeFilter<"RegisteredRunner"> | Date | string
  }

  export type RegisteredRunnerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    trail?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type RegisteredRunnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: RegisteredRunnerWhereInput | RegisteredRunnerWhereInput[]
    OR?: RegisteredRunnerWhereInput[]
    NOT?: RegisteredRunnerWhereInput | RegisteredRunnerWhereInput[]
    fullName?: StringFilter<"RegisteredRunner"> | string
    age?: IntFilter<"RegisteredRunner"> | number
    trail?: StringFilter<"RegisteredRunner"> | string
    country?: StringFilter<"RegisteredRunner"> | string
    createdAt?: DateTimeFilter<"RegisteredRunner"> | Date | string
  }, "id" | "email">

  export type RegisteredRunnerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    trail?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    _count?: RegisteredRunnerCountOrderByAggregateInput
    _avg?: RegisteredRunnerAvgOrderByAggregateInput
    _max?: RegisteredRunnerMaxOrderByAggregateInput
    _min?: RegisteredRunnerMinOrderByAggregateInput
    _sum?: RegisteredRunnerSumOrderByAggregateInput
  }

  export type RegisteredRunnerScalarWhereWithAggregatesInput = {
    AND?: RegisteredRunnerScalarWhereWithAggregatesInput | RegisteredRunnerScalarWhereWithAggregatesInput[]
    OR?: RegisteredRunnerScalarWhereWithAggregatesInput[]
    NOT?: RegisteredRunnerScalarWhereWithAggregatesInput | RegisteredRunnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RegisteredRunner"> | number
    email?: StringWithAggregatesFilter<"RegisteredRunner"> | string
    fullName?: StringWithAggregatesFilter<"RegisteredRunner"> | string
    age?: IntWithAggregatesFilter<"RegisteredRunner"> | number
    trail?: StringWithAggregatesFilter<"RegisteredRunner"> | string
    country?: StringWithAggregatesFilter<"RegisteredRunner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RegisteredRunner"> | Date | string
  }

  export type RegisteredRunnerCreateInput = {
    email: string
    fullName: string
    age: number
    trail: string
    country: string
    createdAt?: Date | string
  }

  export type RegisteredRunnerUncheckedCreateInput = {
    id?: number
    email: string
    fullName: string
    age: number
    trail: string
    country: string
    createdAt?: Date | string
  }

  export type RegisteredRunnerUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    trail?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisteredRunnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    trail?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisteredRunnerCreateManyInput = {
    id?: number
    email: string
    fullName: string
    age: number
    trail: string
    country: string
    createdAt?: Date | string
  }

  export type RegisteredRunnerUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    trail?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisteredRunnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    trail?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RegisteredRunnerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    trail?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type RegisteredRunnerAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type RegisteredRunnerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    trail?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type RegisteredRunnerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    trail?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type RegisteredRunnerSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}