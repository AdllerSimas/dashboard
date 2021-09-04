import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, ReactNode } from 'react';
import { useContext, useEffect } from 'react';

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

type SidebarDrawerContextData = UseDisclosureReturn;

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
   
    const disclosure = useDisclosure();

    const router = useRouter();

    //quando a rota mudar, fechamos a sidebar (menu mobile)
    useEffect(() => {
        disclosure.onClose()
    },[router.asPath])


    return (

       <SidebarDrawerContext.Provider value={disclosure}>
           {children}
       </SidebarDrawerContext.Provider>
   ) 
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)