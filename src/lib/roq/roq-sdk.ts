/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl, RoqPlatformClient, BrowserCookieAuth } from '@roq/client';
import { Fetcher, SWRConfiguration } from 'swr';
import type { Prisma, company, employee, hr_manager, job_applicant, owner, user } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;
export type SWRRequestOptions<Result, Error = any> = {
  disabled?: boolean;
  initialData?: Result;
} & SWRConfiguration<Result, Error, Fetcher<Result>>;

export const defaultEndpoint = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

interface CompanySDK {
  create: <T extends Prisma.companyCreateArgs, R extends CheckSelect<T, company, Prisma.companyGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.companyCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.companyCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.companyUpdateArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.companyUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.companyUpsertArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.companyDeleteArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.companyDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.companyFindManyArgs, R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.companyCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.companyFindManyArgs,
    R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.companyFindFirstArgs, R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface EmployeeSDK {
  create: <T extends Prisma.employeeCreateArgs, R extends CheckSelect<T, employee, Prisma.employeeGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.employeeCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.employeeCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.employeeCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.employeeUpdateArgs, R extends Prisma.employeeGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.employeeUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.employeeUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.employeeUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.employeeUpsertArgs, R extends Prisma.employeeGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.employeeUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.employeeDeleteArgs, R extends Prisma.employeeGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.employeeDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.employeeDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.employeeDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.employeeFindManyArgs, R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.employeeFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.employeeCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.employeeCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.employeeFindManyArgs,
    R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.employeeFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.employeeFindFirstArgs, R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.employeeFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Hr_managerSDK {
  create: <T extends Prisma.hr_managerCreateArgs, R extends CheckSelect<T, hr_manager, Prisma.hr_managerGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.hr_managerCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.hr_managerCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.hr_managerCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.hr_managerUpdateArgs, R extends Prisma.hr_managerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.hr_managerUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.hr_managerUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.hr_managerUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.hr_managerUpsertArgs, R extends Prisma.hr_managerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.hr_managerUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.hr_managerDeleteArgs, R extends Prisma.hr_managerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.hr_managerDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.hr_managerDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.hr_managerDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.hr_managerFindManyArgs,
    R extends GetFindResult<Prisma.$hr_managerPayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.hr_managerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.hr_managerCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.hr_managerCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.hr_managerFindManyArgs,
    R extends GetFindResult<Prisma.$hr_managerPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.hr_managerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.hr_managerFindFirstArgs,
    R extends GetFindResult<Prisma.$hr_managerPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.hr_managerFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Job_applicantSDK {
  create: <
    T extends Prisma.job_applicantCreateArgs,
    R extends CheckSelect<T, job_applicant, Prisma.job_applicantGetPayload<T>>,
  >(
    data: Prisma.SelectSubset<T, Prisma.job_applicantCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.job_applicantCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.job_applicantCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.job_applicantUpdateArgs, R extends Prisma.job_applicantGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.job_applicantUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.job_applicantUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.job_applicantUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.job_applicantUpsertArgs, R extends Prisma.job_applicantGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.job_applicantUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.job_applicantDeleteArgs, R extends Prisma.job_applicantGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.job_applicantDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.job_applicantDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.job_applicantDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.job_applicantFindManyArgs,
    R extends GetFindResult<Prisma.$job_applicantPayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.job_applicantFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.job_applicantCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.job_applicantCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.job_applicantFindManyArgs,
    R extends GetFindResult<Prisma.$job_applicantPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.job_applicantFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.job_applicantFindFirstArgs,
    R extends GetFindResult<Prisma.$job_applicantPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.job_applicantFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface OwnerSDK {
  create: <T extends Prisma.ownerCreateArgs, R extends CheckSelect<T, owner, Prisma.ownerGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.ownerCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.ownerCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.ownerCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.ownerUpdateArgs, R extends Prisma.ownerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.ownerUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.ownerUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.ownerUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.ownerUpsertArgs, R extends Prisma.ownerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.ownerUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.ownerDeleteArgs, R extends Prisma.ownerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.ownerDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.ownerDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.ownerDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.ownerFindManyArgs, R extends GetFindResult<Prisma.$ownerPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.ownerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.ownerCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.ownerCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.ownerFindManyArgs,
    R extends GetFindResult<Prisma.$ownerPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.ownerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.ownerFindFirstArgs, R extends GetFindResult<Prisma.$ownerPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.ownerFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <T extends Prisma.userCreateArgs, R extends CheckSelect<T, user, Prisma.userGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.userCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqClient extends RoqPlatformClient {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public company: CompanySDK;

  public employee: EmployeeSDK;

  public hr_manager: Hr_managerSDK;

  public job_applicant: Job_applicantSDK;

  public owner: OwnerSDK;

  public user: UserSDK;

  constructor(backendHost: string, platformHost: string, baseOptions: RequestOptions = {}) {
    super({
      host: platformHost,
      auth: new BrowserCookieAuth(),
    });
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.company = {
      create: async function createCompany<
        T extends Prisma.companyCreateArgs,
        R extends CheckSelect<T, company, Prisma.companyGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.companyCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyCompany<
        T extends Prisma.companyCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/company/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateCompany<T extends Prisma.companyUpdateArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyCompany<
        T extends Prisma.companyUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/company/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertCompany<T extends Prisma.companyUpsertArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteCompany<T extends Prisma.companyDeleteArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/company/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyCompany<
        T extends Prisma.companyDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyCompany<
        T extends Prisma.companyFindManyArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countCompany<T extends Prisma.companyCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/company/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountCompany<
        T extends Prisma.companyFindManyArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.company.findMany(args, options),
          ctx.company.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstCompany<
        T extends Prisma.companyFindFirstArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.employee = {
      create: async function createEmployee<
        T extends Prisma.employeeCreateArgs,
        R extends CheckSelect<T, employee, Prisma.employeeGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.employeeCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/employee/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyEmployee<
        T extends Prisma.employeeCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.employeeCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/employee/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateEmployee<
        T extends Prisma.employeeUpdateArgs,
        R extends Prisma.employeeGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.employeeUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/employee/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyEmployee<
        T extends Prisma.employeeUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.employeeUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/employee/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertEmployee<
        T extends Prisma.employeeUpsertArgs,
        R extends Prisma.employeeGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.employeeUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/employee/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteEmployee<
        T extends Prisma.employeeDeleteArgs,
        R extends Prisma.employeeGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.employeeDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/employee/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyEmployee<
        T extends Prisma.employeeDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.employeeDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/employee/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyEmployee<
        T extends Prisma.employeeFindManyArgs,
        R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.employeeFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/employee/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countEmployee<T extends Prisma.employeeCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.employeeCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/employee/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountEmployee<
        T extends Prisma.employeeFindManyArgs,
        R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.employeeFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.employee.findMany(args, options),
          ctx.employee.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstEmployee<
        T extends Prisma.employeeFindFirstArgs,
        R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.employeeFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/employee/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.hr_manager = {
      create: async function createHr_manager<
        T extends Prisma.hr_managerCreateArgs,
        R extends CheckSelect<T, hr_manager, Prisma.hr_managerGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.hr_managerCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/hr_manager/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyHr_manager<
        T extends Prisma.hr_managerCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.hr_managerCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/hr_manager/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateHr_manager<
        T extends Prisma.hr_managerUpdateArgs,
        R extends Prisma.hr_managerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.hr_managerUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/hr_manager/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyHr_manager<
        T extends Prisma.hr_managerUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.hr_managerUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/hr_manager/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertHr_manager<
        T extends Prisma.hr_managerUpsertArgs,
        R extends Prisma.hr_managerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.hr_managerUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/hr_manager/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteHr_manager<
        T extends Prisma.hr_managerDeleteArgs,
        R extends Prisma.hr_managerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.hr_managerDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/hr_manager/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyHr_manager<
        T extends Prisma.hr_managerDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.hr_managerDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/hr_manager/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyHr_manager<
        T extends Prisma.hr_managerFindManyArgs,
        R extends GetFindResult<Prisma.$hr_managerPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.hr_managerFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/hr_manager/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countHr_manager<T extends Prisma.hr_managerCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.hr_managerCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/hr_manager/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountHr_manager<
        T extends Prisma.hr_managerFindManyArgs,
        R extends GetFindResult<Prisma.$hr_managerPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.hr_managerFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.hr_manager.findMany(args, options),
          ctx.hr_manager.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstHr_manager<
        T extends Prisma.hr_managerFindFirstArgs,
        R extends GetFindResult<Prisma.$hr_managerPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.hr_managerFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/hr_manager/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.job_applicant = {
      create: async function createJob_applicant<
        T extends Prisma.job_applicantCreateArgs,
        R extends CheckSelect<T, job_applicant, Prisma.job_applicantGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.job_applicantCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/job_applicant/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyJob_applicant<
        T extends Prisma.job_applicantCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.job_applicantCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/job_applicant/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateJob_applicant<
        T extends Prisma.job_applicantUpdateArgs,
        R extends Prisma.job_applicantGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.job_applicantUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/job_applicant/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyJob_applicant<
        T extends Prisma.job_applicantUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.job_applicantUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/job_applicant/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertJob_applicant<
        T extends Prisma.job_applicantUpsertArgs,
        R extends Prisma.job_applicantGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.job_applicantUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/job_applicant/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteJob_applicant<
        T extends Prisma.job_applicantDeleteArgs,
        R extends Prisma.job_applicantGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.job_applicantDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_applicant/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyJob_applicant<
        T extends Prisma.job_applicantDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.job_applicantDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_applicant/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyJob_applicant<
        T extends Prisma.job_applicantFindManyArgs,
        R extends GetFindResult<Prisma.$job_applicantPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.job_applicantFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_applicant/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countJob_applicant<T extends Prisma.job_applicantCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.job_applicantCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/job_applicant/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountJob_applicant<
        T extends Prisma.job_applicantFindManyArgs,
        R extends GetFindResult<Prisma.$job_applicantPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.job_applicantFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.job_applicant.findMany(args, options),
          ctx.job_applicant.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstJob_applicant<
        T extends Prisma.job_applicantFindFirstArgs,
        R extends GetFindResult<Prisma.$job_applicantPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.job_applicantFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_applicant/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.owner = {
      create: async function createOwner<
        T extends Prisma.ownerCreateArgs,
        R extends CheckSelect<T, owner, Prisma.ownerGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.ownerCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/owner/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyOwner<T extends Prisma.ownerCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.ownerCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/owner/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateOwner<T extends Prisma.ownerUpdateArgs, R extends Prisma.ownerGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.ownerUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/owner/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyOwner<T extends Prisma.ownerUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.ownerUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/owner/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertOwner<T extends Prisma.ownerUpsertArgs, R extends Prisma.ownerGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.ownerUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/owner/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteOwner<T extends Prisma.ownerDeleteArgs, R extends Prisma.ownerGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.ownerDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/owner/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyOwner<T extends Prisma.ownerDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.ownerDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/owner/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyOwner<
        T extends Prisma.ownerFindManyArgs,
        R extends GetFindResult<Prisma.$ownerPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.ownerFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/owner/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countOwner<T extends Prisma.ownerCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.ownerCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/owner/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountOwner<
        T extends Prisma.ownerFindManyArgs,
        R extends GetFindResult<Prisma.$ownerPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.ownerFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.owner.findMany(args, options),
          ctx.owner.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstOwner<
        T extends Prisma.ownerFindFirstArgs,
        R extends GetFindResult<Prisma.$ownerPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.ownerFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/owner/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.userCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
