import { getCookie } from 'cookies-next';
import type { GetServerSidePropsResult } from 'next';

import type { GSSPCallback, GSSPContext } from './types';

export const gssp =
  <P extends {} = any>(callback?: GSSPCallback<P>) =>
  async (context: GSSPContext): Promise<GetServerSidePropsResult<P>> => {
    const { req, res } = context;

    const lang = getCookie('lang', { req, res }) ?? 'en';
    context.lang = lang as string;

    const pageResponse = callback && (await callback(context));

    const pageProps = (pageResponse as any)?.props || {};

    return {
      ...pageResponse,
      props: {
        lang,
        ...pageProps
      }
    };
  };
