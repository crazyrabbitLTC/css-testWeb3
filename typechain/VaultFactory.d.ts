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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface VaultFactoryInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "closeExpiredVault(uint256)": FunctionFragment;
    "closeOwnVault(uint256)": FunctionFragment;
    "createVault(uint256)": FunctionFragment;
    "currentEpochExpiry()": FunctionFragment;
    "epochSize()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "governorAlpha()": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "sourceToken()": FunctionFragment;
    "vaultMapping(uint256)": FunctionFragment;
    "vaultNFT()": FunctionFragment;
    "vaultToExpiryEpochs(uint256)": FunctionFragment;
    "vaultToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "closeExpiredVault",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closeOwnVault",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createVault",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentEpochExpiry",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "epochSize", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "governorAlpha",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "sourceToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vaultMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vaultNFT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vaultToExpiryEpochs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultToken",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeExpiredVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeOwnVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentEpochExpiry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "epochSize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governorAlpha",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sourceToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vaultMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vaultNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultToExpiryEpochs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vaultToken", data: BytesLike): Result;

  events: {
    "ExpiredVaultClosed(address,uint256,address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "VaultClosedByOwner(address,uint256,address)": EventFragment;
    "VaultCreated(address,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExpiredVaultClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultClosedByOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultCreated"): EventFragment;
}

export class VaultFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VaultFactoryInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

    closeExpiredVault(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "closeExpiredVault(uint256)"(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    closeOwnVault(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "closeOwnVault(uint256)"(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createVault(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createVault(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    currentEpochExpiry(overrides?: CallOverrides): Promise<[BigNumber]>;

    "currentEpochExpiry()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    epochSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    "epochSize()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    governorAlpha(overrides?: CallOverrides): Promise<[string]>;

    "governorAlpha()"(overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sourceToken(overrides?: CallOverrides): Promise<[string]>;

    "sourceToken()"(overrides?: CallOverrides): Promise<[string]>;

    vaultMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "vaultMapping(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    vaultNFT(overrides?: CallOverrides): Promise<[string]>;

    "vaultNFT()"(overrides?: CallOverrides): Promise<[string]>;

    vaultToExpiryEpochs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "vaultToExpiryEpochs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    vaultToken(overrides?: CallOverrides): Promise<[string]>;

    "vaultToken()"(overrides?: CallOverrides): Promise<[string]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

  closeExpiredVault(
    vaultId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "closeExpiredVault(uint256)"(
    vaultId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  closeOwnVault(
    vaultId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "closeOwnVault(uint256)"(
    vaultId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createVault(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createVault(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  currentEpochExpiry(overrides?: CallOverrides): Promise<BigNumber>;

  "currentEpochExpiry()"(overrides?: CallOverrides): Promise<BigNumber>;

  epochSize(overrides?: CallOverrides): Promise<BigNumber>;

  "epochSize()"(overrides?: CallOverrides): Promise<BigNumber>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getRoleAdmin(bytes32)"(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRoleMember(bytes32,uint256)"(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRoleMemberCount(bytes32)"(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  governorAlpha(overrides?: CallOverrides): Promise<string>;

  "governorAlpha()"(overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "grantRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "renounceRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "revokeRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sourceToken(overrides?: CallOverrides): Promise<string>;

  "sourceToken()"(overrides?: CallOverrides): Promise<string>;

  vaultMapping(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "vaultMapping(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  vaultNFT(overrides?: CallOverrides): Promise<string>;

  "vaultNFT()"(overrides?: CallOverrides): Promise<string>;

  vaultToExpiryEpochs(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "vaultToExpiryEpochs(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  vaultToken(overrides?: CallOverrides): Promise<string>;

  "vaultToken()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

    closeExpiredVault(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "closeExpiredVault(uint256)"(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    closeOwnVault(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "closeOwnVault(uint256)"(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createVault(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "createVault(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    currentEpochExpiry(overrides?: CallOverrides): Promise<BigNumber>;

    "currentEpochExpiry()"(overrides?: CallOverrides): Promise<BigNumber>;

    epochSize(overrides?: CallOverrides): Promise<BigNumber>;

    "epochSize()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governorAlpha(overrides?: CallOverrides): Promise<string>;

    "governorAlpha()"(overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sourceToken(overrides?: CallOverrides): Promise<string>;

    "sourceToken()"(overrides?: CallOverrides): Promise<string>;

    vaultMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "vaultMapping(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    vaultNFT(overrides?: CallOverrides): Promise<string>;

    "vaultNFT()"(overrides?: CallOverrides): Promise<string>;

    vaultToExpiryEpochs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vaultToExpiryEpochs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultToken(overrides?: CallOverrides): Promise<string>;

    "vaultToken()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ExpiredVaultClosed(
      closer: null,
      vaultId: null,
      vaultAddress: null
    ): EventFilter;

    RoleAdminChanged(
      role: BytesLike | null,
      previousAdminRole: BytesLike | null,
      newAdminRole: BytesLike | null
    ): EventFilter;

    RoleGranted(
      role: BytesLike | null,
      account: string | null,
      sender: string | null
    ): EventFilter;

    RoleRevoked(
      role: BytesLike | null,
      account: string | null,
      sender: string | null
    ): EventFilter;

    VaultClosedByOwner(
      owner: null,
      vaultId: null,
      vaultAddress: null
    ): EventFilter;

    VaultCreated(
      creator: null,
      amount: null,
      vaultId: null,
      vaultAddress: null
    ): EventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    closeExpiredVault(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "closeExpiredVault(uint256)"(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    closeOwnVault(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "closeOwnVault(uint256)"(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createVault(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createVault(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    currentEpochExpiry(overrides?: CallOverrides): Promise<BigNumber>;

    "currentEpochExpiry()"(overrides?: CallOverrides): Promise<BigNumber>;

    epochSize(overrides?: CallOverrides): Promise<BigNumber>;

    "epochSize()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governorAlpha(overrides?: CallOverrides): Promise<BigNumber>;

    "governorAlpha()"(overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sourceToken(overrides?: CallOverrides): Promise<BigNumber>;

    "sourceToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    vaultMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vaultMapping(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultNFT(overrides?: CallOverrides): Promise<BigNumber>;

    "vaultNFT()"(overrides?: CallOverrides): Promise<BigNumber>;

    vaultToExpiryEpochs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vaultToExpiryEpochs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultToken(overrides?: CallOverrides): Promise<BigNumber>;

    "vaultToken()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "DEFAULT_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closeExpiredVault(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "closeExpiredVault(uint256)"(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    closeOwnVault(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "closeOwnVault(uint256)"(
      vaultId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createVault(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createVault(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    currentEpochExpiry(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "currentEpochExpiry()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "epochSize()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governorAlpha(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governorAlpha()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sourceToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "sourceToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vaultMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vaultMapping(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaultNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vaultNFT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vaultToExpiryEpochs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vaultToExpiryEpochs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaultToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vaultToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
