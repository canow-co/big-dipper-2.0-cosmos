import chainJson from '@/chain.json';
import type { ChainConfig } from '@/chainConfig/types';

function chainConfig() {
  /* Setting the basePath, chainType, chains, and settings variables. */
  let chainType = process.env.NEXT_PUBLIC_CHAIN_TYPE;
  if (!chainType) chainType = 'mainnet';
  chainType = chainType.toLowerCase();
  const { chains, ...settings } = chainJson;
  let chain = chains.find((c) => c.chainType?.toLowerCase() === chainType);
  if (!chain && chainType !== 'testnet') {
    chain = chains.find((c) => c.chainType?.toLowerCase() === 'testnet');
  }

  /* If the chainType is not found, it will use the first chain in the array. */
  if (!chain) [chain] = chains;
  if (!chain) throw new Error(`Config not found for CHAIN_NAME ${chainJson.chainName}`);

  const basePath = (process.env.BASE_PATH || `${`/${settings.chainName}`}`).replace(
    /^(\/|\/base)$/,
    ''
  );

  /* Merging the settings and chain objects. */
  return {
    ...settings,
    basePath,
    ...chain,
  } as unknown as ChainConfig;
}

export default chainConfig;
