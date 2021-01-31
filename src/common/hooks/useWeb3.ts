// @ts-nocheck
import { useState, useEffect, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import { Contract, ethers } from 'ethers';
import { JsonRpcSigner } from '@ethersproject/providers/lib/json-rpc-provider';
import { Provider } from '@ethersproject/providers';

import {
    Multicall,
    ContractCallResults,
    ContractCallContext,
} from 'ethereum-multicall';


import constate from 'constate';

type Values = {
    web3: ethers.providers.Web3Provider;
    isWeb3Ready: boolean;
    openMetamask: () => Promise<void>;
    signer: JsonRpcSigner;
    chainId: number;
    signerAddress: string;
    contractInstance?: Contract;
    currentBlock?: number;
    etherBalance?: string;
    multiCall?: ContractCallResults;
};

const contract = {
    address: "",
    abi: ""
}

const useWeb3Constate = (): Values => {

    // chakra hooks
    const toast = useToast();
    // providers
    // react hooks
    const [web3Provider, setWeb3Provider] = useState<Provider | null>(null);
    const [chainId, setChainId] = useState<number>(1);
    const [currentBlock, setCurrentBlock] = useState<number | undefined>(undefined);
    const [etherBalance, setEtherBalance] = useState<string | undefined>(undefined);
    const [contractInstance, setcontractInstance] = useState<Contract | undefined>(undefined);
    const [signerAddress, setSignerAddress] = useState<string>('');
    const [isWeb3Ready, setIsWeb3Ready] = useState<boolean>(false);
    const [multiCall, setmultiCall] = useState<ContractCallResults | null>(null);

    // variables
    const signer = useMemo(() => {
        if (web3Provider) return web3Provider.getSigner();
    }, [web3Provider]);

    // constants
    const isDomReady = window?.ethereum;

    // methods
    const openMetamask = async () => {
        try {
            await window.ethereum.enable();

            setProvider();
        } catch (error) {
            toast({
                status: 'warning',
                isClosable: true,
                description: 'Install Metamask to use this feature',
            });

            console.error('Error opening Metamask =>', error.message);
        }
    };

    const setProvider = async () => {
        try {
            const provider = isDomReady ? new ethers.providers.Web3Provider(window?.ethereum) : null;

            setWeb3Provider(provider);
        } catch (error) {
            console.error('Error setting the web3 provider =>', error.message);
        }
    };

    // effects
    useEffect(() => {
        setProvider();
    }, []);

    useEffect(() => {
        if (web3Provider) {
            web3Provider?.getNetwork().then((network) => {
                const { chainId } = network;

                setChainId(chainId);
            });
        }
    }, [web3Provider]);

    useEffect(() => {
        window?.ethereum?.on('accountsChanged', (accounts: string[]) => {
            const hasConnectedAnAccount = accounts?.length > 0;

            if (!hasConnectedAnAccount) {
                setSignerAddress('');
            }

            const signerAddress = accounts[0];

            setSignerAddress(signerAddress);
        });

        window?.ethereum?.on('chainChanged', (chainIdResponse) => {
            const chainIdIdentifier = chainIdResponse?.split('x')[1];

            const NETWORKS_IDS = {
                1: 1,
                3: 3,
                '2a': 42,
                4: 4,
                5: 5,
            };

            const chainId = NETWORKS_IDS[chainIdIdentifier];

            if (chainId) {
                setChainId(chainId);
            }
        });
    });

    useEffect(() => {
        if (signer) {
            signer
                ?.getAddress()
                .then((address: string) => {
                    setSignerAddress(address);
                    setIsWeb3Ready(true);
                })
                .catch(() => setIsWeb3Ready(false));
        }
    }, [signer]);

    useEffect(() => {
        if (isWeb3Ready) {
            web3Provider.getBlockNumber().then((block: number) => setCurrentBlock(block));
            web3Provider.getBalance(signerAddress).then((balance: string) => setEtherBalance(ethers.utils.formatUnits(balance, "ether")));


            if (contract.address) {
                const contractInstance = new Contract(contract.address, contract.abi, signer);

                setcontractInstance(contractInstance);
            }
        }
    }, [isWeb3Ready]);

    useEffect(() => {
        if (isDomReady) {
            window.ethereum.autoRefreshOnNetworkChange = false;
        }
    }, []);


    useEffect(() => {
        if (isWeb3Ready) {

            const multicall = new Multicall({ ethersProvider: web3Provider });

            const contractCallContext: ContractCallContext<{ extraContext: string, foo4: boolean }>[] = [
                {
                    reference: 'Weth',
                    contractAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                    abi: [{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}, {"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}],
                    calls: [{ reference: 'Approval', methodName: 'allowance', methodParameters: ["0x32a5bbE726C7b2e8746E5A508A08870f0Ad3d1f2", "0x32a5bbE726C7b2e8746E5A508A08870f0Ad3d1f2"] },{ reference: 'WethName', methodName: 'name', methodParameters: [] }],
                    context: {
                        extraContext: 'extraContext',
                        foo4: true
                    }
                }
            ];

            const checkBlockchain = async () => {
                const results: ContractCallResults = await multicall.call(contractCallContext);
                console.log("The Results: ", results);
    
                setmultiCall(results);
            }

            checkBlockchain()

        }

    }, [isWeb3Ready])

    return {
        web3: web3Provider,
        isWeb3Ready,
        openMetamask,
        chainId,
        signer,
        signerAddress,
        currentBlock,
        contractInstance,
        etherBalance
    };
};

const [Web3Provider, useWeb3] = constate(useWeb3Constate);

export { Web3Provider, useWeb3 };