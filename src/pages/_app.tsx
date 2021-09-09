import { AppProps} from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SideBarDrawerContex';
import { makeServer } from '../services/mirage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../services/queryClient';


// Em Desenvolvimento o servidor miragejs é inicializado
if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  //resetCSS remove estilizações padrão
  //envolcendo o theme por toda a aplicação
  return ( 
    <QueryClientProvider client={queryClient}>
      <ChakraProvider  theme={theme}>
        <SidebarDrawerProvider>  
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default MyApp
