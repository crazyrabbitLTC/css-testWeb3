import React, { useState, useEffect } from 'react';
import {
    Multicall,
    ContractCallResults,
    ContractCallContext,
} from 'ethereum-multicall';
import { Provider } from '@ethersproject/providers';


export function useMultiCall(provider: Provider) {


    const [state, setState] = useState<ContractCallResults | null>(null);

    const multicall = new Multicall({ ethersProvider: provider });
    const contractCallContext: ContractCallContext<{ extraContext: string, foo4: boolean }>[] = [
        {
            reference: 'testContract',
            contractAddress: '0x6795b15f3b16Cf8fB3E56499bbC07F6261e9b0C3',
            abi: [{ name: 'foo', type: 'function', inputs: [{ name: 'example', type: 'uint256' }], outputs: [{ name: 'amounts', type: 'uint256' }] }],
            calls: [{ reference: 'fooCall', methodName: 'foo', methodParameters: [42] }],
            context: {
                extraContext: 'extraContext',
                foo4: true
            }
        },
        {
            reference: 'testContract2',
            contractAddress: '0x66BF8e2E890eA0392e158e77C6381b34E0771318',
            abi: [{ name: 'fooTwo', type: 'function', inputs: [{ name: 'example', type: 'uint256' }], outputs: [{ name: 'amounts', type: 'uint256' }] }],
            calls: [{ reference: 'fooTwoCall', methodName: 'fooTwo', methodParameters: [42] }]
        }
    ];

    useEffect(() => {
        const checkBlockchain = async () => {
            const results: ContractCallResults = await multicall.call(contractCallContext);
            console.log("The Results: ", results);

            setState(results);
        }

        if (provider) {
            checkBlockchain();
        }

    }, [])
    return state;
}


// you can use any ethers provider context here this example is
// just shows passing in a default provider, ethers hold providers in
// other context like wallet, signer etc all can be passed in as well.

// // results:
// {
//     results: {
//         testContract: {
//             originalContractCallContext: {
//                 reference: 'testContract',
//                     contractAddress: '0x6795b15f3b16Cf8fB3E56499bbC07F6261e9b0C3',
//                         abi: [{ name: 'foo', type: 'function', inputs: [{ name: 'example', type: 'uint256' }], outputs: [{ name: 'amounts', type: 'uint256' }] }],
//                             calls: [{ reference: 'fooCall', methodName: 'foo', methodParameters: [42] }]
//             },
//             callsReturnContext: [{
//                 returnValues: [{ amounts: BigNumber }],
//                 decoded: true,
//                 reference: 'fooCall',
//                 methodName: 'foo',
//                 methodParameters: [42]
//             }]
//         },
//         testContract2: {
//             originalContractCallContext: {
//                 reference: 'testContract2',
//                     contractAddress: '0x66BF8e2E890eA0392e158e77C6381b34E0771318',
//                         abi: [{ name: 'fooTwo', type: 'function', inputs: [{ name: 'example', type: 'uint256' }], outputs: [{ name: 'amounts', type: 'uint256[]' ] }],
//                             calls: [{ reference: 'fooTwoCall', methodName: 'fooTwo', methodParameters: [42] }]
//             },
//             callsReturnContext: [{
//                 returnValues: [{ amounts: [BigNumber, BigNumber, BigNumber] }],
//                 decoded: true,
//                 reference: 'fooCall',
//                 methodName: 'foo',
//                 methodParameters: [42]
//             }]
//         }
//     },
//     blockNumber: 10994677
// }