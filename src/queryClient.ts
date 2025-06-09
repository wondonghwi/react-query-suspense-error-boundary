import { QueryClient } from '@tanstack/react-query';
import { queryClientConfig } from './constants/queryOptions';

export const queryClient = new QueryClient(queryClientConfig);
