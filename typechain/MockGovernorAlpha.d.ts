/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MockGovernorAlphaInterface extends ethers.utils.Interface {
  functions: {
    "proposalCount()": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "proposalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "proposalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;

  events: {};
}

export class MockGovernorAlpha extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockGovernorAlphaInterface;

  functions: {
    proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "proposalCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
      }
    >;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
      }
    >;
  };

  proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

  "proposalCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
    }
  >;

  "proposals(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
    }
  >;

  callStatic: {
    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    "proposalCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
      }
    >;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    "proposalCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "proposalCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
