import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

export type GSSPContext = GetServerSidePropsContext & {
  lang: string;
};

export type GSSPCallback<P extends {} = any> = (
  context: GSSPContext
) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>;
