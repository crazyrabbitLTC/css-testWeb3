import React, { ReactElement } from 'react'
import { Flex, Button, Text, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { useWeb3 } from '../common/hooks/useWeb3';
interface Props {

}

export const shortAddress = (address: string, initialLength = 6, endLength = -4): string =>
  `${address.slice(0, initialLength)}...${address.slice(endLength)}`;

export default function Footer({ }: Props): ReactElement {


    const { isWeb3Ready, signerAddress } = useWeb3();
    return (
        <>
            <Flex color="blue" justifyContent="flex-end" alignItems="center" >
                <HStack spacing="20px">
                    <Text fontSize="s" color="gray.500"> {isWeb3Ready && signerAddress ? signerAddress : null}</Text>
                </HStack>
            </Flex>

        </>
    )
}


// chainId: 1
// contractInstance: undefined
// currentBlock: undefined
// isWeb3Ready: false
// openMetamask: async () => {…}
// signer: JsonRpcSigner {_isSigner: true, provider: Web3Provider, _index: 0, _address: null}
// signerAddress: ""