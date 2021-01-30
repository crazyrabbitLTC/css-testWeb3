import React, { ReactElement } from 'react'
import { Flex, Button, Text, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { useWeb3 } from '../common/hooks/useWeb3';
interface Props {

}

export const shortAddress = (address: string, initialLength = 6, endLength = -4): string =>
  `${address.slice(0, initialLength)}...${address.slice(endLength)}`;

export default function Header({ }: Props): ReactElement {


    const { chainId, currentBlock, etherBalance ,isWeb3Ready, openMetamask, signerAddress } = useWeb3();
    console.log("🚀 ~ file: Header.tsx ~ line 15 ~ Header ~ signerAddress", signerAddress)
    return (
        <>
            <Flex color="blue" justifyContent="flex-end" alignItems="center" margin="15px">
                <HStack spacing="20px">
                    <Text fontSize="m" color="gray.500">{isWeb3Ready && signerAddress ? shortAddress(signerAddress) : null}</Text>
                    <Text>{etherBalance ? Number(etherBalance).toFixed(2) : "0.0"}ETH</Text>
                    <Button onClick={() => openMetamask()}>{isWeb3Ready ? "Connected" : "Connect Metamask"}</Button>
                    <ColorModeSwitcher />
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