import { AppProps} from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SideBarDrawerContex';

function MyApp({ Component, pageProps }: AppProps) {
  //resetCSS remove estilizações padrão
  //envolcendo o theme por toda a aplicação
  return ( 
    <ChakraProvider  theme={theme}>
      <SidebarDrawerProvider>  
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
