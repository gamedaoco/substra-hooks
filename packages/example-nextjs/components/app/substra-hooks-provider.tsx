import { ReactNode } from 'react';
import { ApiProviderConfig, SubstraHooksProvider } from '@substra-hooks/core';

interface ISubstraHooksProviderProps {
  apiProviderConfig: ApiProviderConfig;
  children: ReactNode;
  defaultApiProviderId?: string;
}

const SubstraHooksProviderSSR = ({
  apiProviderConfig,
  children,
  defaultApiProviderId,
}: ISubstraHooksProviderProps) => {
  return (
    <SubstraHooksProvider
      apiProviderConfig={apiProviderConfig}
      defaultApiProviderId={defaultApiProviderId || 'kusama'}
      autoInitialiseExtension>
      {children}
    </SubstraHooksProvider>
  );
};

export default SubstraHooksProviderSSR;
