// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class TokenExchange extends EthereumEvent {
  get params(): TokenExchange__Params {
    return new TokenExchange__Params(this);
  }
}

export class TokenExchange__Params {
  _event: TokenExchange;

  constructor(event: TokenExchange) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sold_id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokens_sold(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get bought_id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tokens_bought(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class TokenExchangeUnderlying extends EthereumEvent {
  get params(): TokenExchangeUnderlying__Params {
    return new TokenExchangeUnderlying__Params(this);
  }
}

export class TokenExchangeUnderlying__Params {
  _event: TokenExchangeUnderlying;

  constructor(event: TokenExchangeUnderlying) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sold_id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokens_sold(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get bought_id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tokens_bought(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class AddLiquidity extends EthereumEvent {
  get params(): AddLiquidity__Params {
    return new AddLiquidity__Params(this);
  }
}

export class AddLiquidity__Params {
  _event: AddLiquidity;

  constructor(event: AddLiquidity) {
    this._event = event;
  }

  get provider(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token_amounts(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get fees(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get invariant(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get token_supply(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class RemoveLiquidity extends EthereumEvent {
  get params(): RemoveLiquidity__Params {
    return new RemoveLiquidity__Params(this);
  }
}

export class RemoveLiquidity__Params {
  _event: RemoveLiquidity;

  constructor(event: RemoveLiquidity) {
    this._event = event;
  }

  get provider(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token_amounts(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get fees(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get token_supply(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RemoveLiquidityImbalance extends EthereumEvent {
  get params(): RemoveLiquidityImbalance__Params {
    return new RemoveLiquidityImbalance__Params(this);
  }
}

export class RemoveLiquidityImbalance__Params {
  _event: RemoveLiquidityImbalance;

  constructor(event: RemoveLiquidityImbalance) {
    this._event = event;
  }

  get provider(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token_amounts(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get fees(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get invariant(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get token_supply(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class CommitNewAdmin extends EthereumEvent {
  get params(): CommitNewAdmin__Params {
    return new CommitNewAdmin__Params(this);
  }
}

export class CommitNewAdmin__Params {
  _event: CommitNewAdmin;

  constructor(event: CommitNewAdmin) {
    this._event = event;
  }

  get deadline(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get admin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewAdmin extends EthereumEvent {
  get params(): NewAdmin__Params {
    return new NewAdmin__Params(this);
  }
}

export class NewAdmin__Params {
  _event: NewAdmin;

  constructor(event: NewAdmin) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CommitNewParameters extends EthereumEvent {
  get params(): CommitNewParameters__Params {
    return new CommitNewParameters__Params(this);
  }
}

export class CommitNewParameters__Params {
  _event: CommitNewParameters;

  constructor(event: CommitNewParameters) {
    this._event = event;
  }

  get deadline(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get A(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get fee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get admin_fee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NewParameters extends EthereumEvent {
  get params(): NewParameters__Params {
    return new NewParameters__Params(this);
  }
}

export class NewParameters__Params {
  _event: NewParameters;

  constructor(event: NewParameters) {
    this._event = event;
  }

  get A(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get fee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get admin_fee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CurveY extends SmartContract {
  static bind(address: Address): CurveY {
    return new CurveY("CurveY", address);
  }

  get_virtual_price(): BigInt {
    let result = super.call("get_virtual_price", []);

    return result[0].toBigInt();
  }

  try_get_virtual_price(): CallResult<BigInt> {
    let result = super.tryCall("get_virtual_price", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  calc_token_amount(amounts: Array<BigInt>, deposit: boolean): BigInt {
    let result = super.call("calc_token_amount", [
      EthereumValue.fromUnsignedBigIntArray(amounts),
      EthereumValue.fromBoolean(deposit)
    ]);

    return result[0].toBigInt();
  }

  try_calc_token_amount(
    amounts: Array<BigInt>,
    deposit: boolean
  ): CallResult<BigInt> {
    let result = super.tryCall("calc_token_amount", [
      EthereumValue.fromUnsignedBigIntArray(amounts),
      EthereumValue.fromBoolean(deposit)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  get_dy(i: BigInt, j: BigInt, dx: BigInt): BigInt {
    let result = super.call("get_dy", [
      EthereumValue.fromSignedBigInt(i),
      EthereumValue.fromSignedBigInt(j),
      EthereumValue.fromUnsignedBigInt(dx)
    ]);

    return result[0].toBigInt();
  }

  try_get_dy(i: BigInt, j: BigInt, dx: BigInt): CallResult<BigInt> {
    let result = super.tryCall("get_dy", [
      EthereumValue.fromSignedBigInt(i),
      EthereumValue.fromSignedBigInt(j),
      EthereumValue.fromUnsignedBigInt(dx)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  get_dx(i: BigInt, j: BigInt, dy: BigInt): BigInt {
    let result = super.call("get_dx", [
      EthereumValue.fromSignedBigInt(i),
      EthereumValue.fromSignedBigInt(j),
      EthereumValue.fromUnsignedBigInt(dy)
    ]);

    return result[0].toBigInt();
  }

  try_get_dx(i: BigInt, j: BigInt, dy: BigInt): CallResult<BigInt> {
    let result = super.tryCall("get_dx", [
      EthereumValue.fromSignedBigInt(i),
      EthereumValue.fromSignedBigInt(j),
      EthereumValue.fromUnsignedBigInt(dy)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  get_dy_underlying(i: BigInt, j: BigInt, dx: BigInt): BigInt {
    let result = super.call("get_dy_underlying", [
      EthereumValue.fromSignedBigInt(i),
      EthereumValue.fromSignedBigInt(j),
      EthereumValue.fromUnsignedBigInt(dx)
    ]);

    return result[0].toBigInt();
  }

  try_get_dy_underlying(i: BigInt, j: BigInt, dx: BigInt): CallResult<BigInt> {
    let result = super.tryCall("get_dy_underlying", [
      EthereumValue.fromSignedBigInt(i),
      EthereumValue.fromSignedBigInt(j),
      EthereumValue.fromUnsignedBigInt(dx)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  get_dx_underlying(i: BigInt, j: BigInt, dy: BigInt): BigInt {
    let result = super.call("get_dx_underlying", [
      EthereumValue.fromSignedBigInt(i),
      EthereumValue.fromSignedBigInt(j),
      EthereumValue.fromUnsignedBigInt(dy)
    ]);

    return result[0].toBigInt();
  }

  try_get_dx_underlying(i: BigInt, j: BigInt, dy: BigInt): CallResult<BigInt> {
    let result = super.tryCall("get_dx_underlying", [
      EthereumValue.fromSignedBigInt(i),
      EthereumValue.fromSignedBigInt(j),
      EthereumValue.fromUnsignedBigInt(dy)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  coins(arg0: BigInt): Address {
    let result = super.call("coins", [EthereumValue.fromSignedBigInt(arg0)]);

    return result[0].toAddress();
  }

  try_coins(arg0: BigInt): CallResult<Address> {
    let result = super.tryCall("coins", [EthereumValue.fromSignedBigInt(arg0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  underlying_coins(arg0: BigInt): Address {
    let result = super.call("underlying_coins", [
      EthereumValue.fromSignedBigInt(arg0)
    ]);

    return result[0].toAddress();
  }

  try_underlying_coins(arg0: BigInt): CallResult<Address> {
    let result = super.tryCall("underlying_coins", [
      EthereumValue.fromSignedBigInt(arg0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  balances(arg0: BigInt): BigInt {
    let result = super.call("balances", [EthereumValue.fromSignedBigInt(arg0)]);

    return result[0].toBigInt();
  }

  try_balances(arg0: BigInt): CallResult<BigInt> {
    let result = super.tryCall("balances", [
      EthereumValue.fromSignedBigInt(arg0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  A(): BigInt {
    let result = super.call("A", []);

    return result[0].toBigInt();
  }

  try_A(): CallResult<BigInt> {
    let result = super.tryCall("A", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  fee(): BigInt {
    let result = super.call("fee", []);

    return result[0].toBigInt();
  }

  try_fee(): CallResult<BigInt> {
    let result = super.tryCall("fee", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  admin_fee(): BigInt {
    let result = super.call("admin_fee", []);

    return result[0].toBigInt();
  }

  try_admin_fee(): CallResult<BigInt> {
    let result = super.tryCall("admin_fee", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  admin_actions_deadline(): BigInt {
    let result = super.call("admin_actions_deadline", []);

    return result[0].toBigInt();
  }

  try_admin_actions_deadline(): CallResult<BigInt> {
    let result = super.tryCall("admin_actions_deadline", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  transfer_ownership_deadline(): BigInt {
    let result = super.call("transfer_ownership_deadline", []);

    return result[0].toBigInt();
  }

  try_transfer_ownership_deadline(): CallResult<BigInt> {
    let result = super.tryCall("transfer_ownership_deadline", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  future_A(): BigInt {
    let result = super.call("future_A", []);

    return result[0].toBigInt();
  }

  try_future_A(): CallResult<BigInt> {
    let result = super.tryCall("future_A", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  future_fee(): BigInt {
    let result = super.call("future_fee", []);

    return result[0].toBigInt();
  }

  try_future_fee(): CallResult<BigInt> {
    let result = super.tryCall("future_fee", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  future_admin_fee(): BigInt {
    let result = super.call("future_admin_fee", []);

    return result[0].toBigInt();
  }

  try_future_admin_fee(): CallResult<BigInt> {
    let result = super.tryCall("future_admin_fee", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  future_owner(): Address {
    let result = super.call("future_owner", []);

    return result[0].toAddress();
  }

  try_future_owner(): CallResult<Address> {
    let result = super.tryCall("future_owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _coins(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _underlying_coins(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _pool_token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _A(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _fee(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class Add_liquidityCall extends EthereumCall {
  get inputs(): Add_liquidityCall__Inputs {
    return new Add_liquidityCall__Inputs(this);
  }

  get outputs(): Add_liquidityCall__Outputs {
    return new Add_liquidityCall__Outputs(this);
  }
}

export class Add_liquidityCall__Inputs {
  _call: Add_liquidityCall;

  constructor(call: Add_liquidityCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get min_mint_amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class Add_liquidityCall__Outputs {
  _call: Add_liquidityCall;

  constructor(call: Add_liquidityCall) {
    this._call = call;
  }
}

export class ExchangeCall extends EthereumCall {
  get inputs(): ExchangeCall__Inputs {
    return new ExchangeCall__Inputs(this);
  }

  get outputs(): ExchangeCall__Outputs {
    return new ExchangeCall__Outputs(this);
  }
}

export class ExchangeCall__Inputs {
  _call: ExchangeCall;

  constructor(call: ExchangeCall) {
    this._call = call;
  }

  get i(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get j(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get dx(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get min_dy(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ExchangeCall__Outputs {
  _call: ExchangeCall;

  constructor(call: ExchangeCall) {
    this._call = call;
  }
}

export class Exchange_underlyingCall extends EthereumCall {
  get inputs(): Exchange_underlyingCall__Inputs {
    return new Exchange_underlyingCall__Inputs(this);
  }

  get outputs(): Exchange_underlyingCall__Outputs {
    return new Exchange_underlyingCall__Outputs(this);
  }
}

export class Exchange_underlyingCall__Inputs {
  _call: Exchange_underlyingCall;

  constructor(call: Exchange_underlyingCall) {
    this._call = call;
  }

  get i(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get j(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get dx(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get min_dy(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class Exchange_underlyingCall__Outputs {
  _call: Exchange_underlyingCall;

  constructor(call: Exchange_underlyingCall) {
    this._call = call;
  }
}

export class Remove_liquidityCall extends EthereumCall {
  get inputs(): Remove_liquidityCall__Inputs {
    return new Remove_liquidityCall__Inputs(this);
  }

  get outputs(): Remove_liquidityCall__Outputs {
    return new Remove_liquidityCall__Outputs(this);
  }
}

export class Remove_liquidityCall__Inputs {
  _call: Remove_liquidityCall;

  constructor(call: Remove_liquidityCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get min_amounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class Remove_liquidityCall__Outputs {
  _call: Remove_liquidityCall;

  constructor(call: Remove_liquidityCall) {
    this._call = call;
  }
}

export class Remove_liquidity_imbalanceCall extends EthereumCall {
  get inputs(): Remove_liquidity_imbalanceCall__Inputs {
    return new Remove_liquidity_imbalanceCall__Inputs(this);
  }

  get outputs(): Remove_liquidity_imbalanceCall__Outputs {
    return new Remove_liquidity_imbalanceCall__Outputs(this);
  }
}

export class Remove_liquidity_imbalanceCall__Inputs {
  _call: Remove_liquidity_imbalanceCall;

  constructor(call: Remove_liquidity_imbalanceCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get max_burn_amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class Remove_liquidity_imbalanceCall__Outputs {
  _call: Remove_liquidity_imbalanceCall;

  constructor(call: Remove_liquidity_imbalanceCall) {
    this._call = call;
  }
}

export class Commit_new_parametersCall extends EthereumCall {
  get inputs(): Commit_new_parametersCall__Inputs {
    return new Commit_new_parametersCall__Inputs(this);
  }

  get outputs(): Commit_new_parametersCall__Outputs {
    return new Commit_new_parametersCall__Outputs(this);
  }
}

export class Commit_new_parametersCall__Inputs {
  _call: Commit_new_parametersCall;

  constructor(call: Commit_new_parametersCall) {
    this._call = call;
  }

  get amplification(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get new_fee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get new_admin_fee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class Commit_new_parametersCall__Outputs {
  _call: Commit_new_parametersCall;

  constructor(call: Commit_new_parametersCall) {
    this._call = call;
  }
}

export class Apply_new_parametersCall extends EthereumCall {
  get inputs(): Apply_new_parametersCall__Inputs {
    return new Apply_new_parametersCall__Inputs(this);
  }

  get outputs(): Apply_new_parametersCall__Outputs {
    return new Apply_new_parametersCall__Outputs(this);
  }
}

export class Apply_new_parametersCall__Inputs {
  _call: Apply_new_parametersCall;

  constructor(call: Apply_new_parametersCall) {
    this._call = call;
  }
}

export class Apply_new_parametersCall__Outputs {
  _call: Apply_new_parametersCall;

  constructor(call: Apply_new_parametersCall) {
    this._call = call;
  }
}

export class Revert_new_parametersCall extends EthereumCall {
  get inputs(): Revert_new_parametersCall__Inputs {
    return new Revert_new_parametersCall__Inputs(this);
  }

  get outputs(): Revert_new_parametersCall__Outputs {
    return new Revert_new_parametersCall__Outputs(this);
  }
}

export class Revert_new_parametersCall__Inputs {
  _call: Revert_new_parametersCall;

  constructor(call: Revert_new_parametersCall) {
    this._call = call;
  }
}

export class Revert_new_parametersCall__Outputs {
  _call: Revert_new_parametersCall;

  constructor(call: Revert_new_parametersCall) {
    this._call = call;
  }
}

export class Commit_transfer_ownershipCall extends EthereumCall {
  get inputs(): Commit_transfer_ownershipCall__Inputs {
    return new Commit_transfer_ownershipCall__Inputs(this);
  }

  get outputs(): Commit_transfer_ownershipCall__Outputs {
    return new Commit_transfer_ownershipCall__Outputs(this);
  }
}

export class Commit_transfer_ownershipCall__Inputs {
  _call: Commit_transfer_ownershipCall;

  constructor(call: Commit_transfer_ownershipCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Commit_transfer_ownershipCall__Outputs {
  _call: Commit_transfer_ownershipCall;

  constructor(call: Commit_transfer_ownershipCall) {
    this._call = call;
  }
}

export class Apply_transfer_ownershipCall extends EthereumCall {
  get inputs(): Apply_transfer_ownershipCall__Inputs {
    return new Apply_transfer_ownershipCall__Inputs(this);
  }

  get outputs(): Apply_transfer_ownershipCall__Outputs {
    return new Apply_transfer_ownershipCall__Outputs(this);
  }
}

export class Apply_transfer_ownershipCall__Inputs {
  _call: Apply_transfer_ownershipCall;

  constructor(call: Apply_transfer_ownershipCall) {
    this._call = call;
  }
}

export class Apply_transfer_ownershipCall__Outputs {
  _call: Apply_transfer_ownershipCall;

  constructor(call: Apply_transfer_ownershipCall) {
    this._call = call;
  }
}

export class Revert_transfer_ownershipCall extends EthereumCall {
  get inputs(): Revert_transfer_ownershipCall__Inputs {
    return new Revert_transfer_ownershipCall__Inputs(this);
  }

  get outputs(): Revert_transfer_ownershipCall__Outputs {
    return new Revert_transfer_ownershipCall__Outputs(this);
  }
}

export class Revert_transfer_ownershipCall__Inputs {
  _call: Revert_transfer_ownershipCall;

  constructor(call: Revert_transfer_ownershipCall) {
    this._call = call;
  }
}

export class Revert_transfer_ownershipCall__Outputs {
  _call: Revert_transfer_ownershipCall;

  constructor(call: Revert_transfer_ownershipCall) {
    this._call = call;
  }
}

export class Withdraw_admin_feesCall extends EthereumCall {
  get inputs(): Withdraw_admin_feesCall__Inputs {
    return new Withdraw_admin_feesCall__Inputs(this);
  }

  get outputs(): Withdraw_admin_feesCall__Outputs {
    return new Withdraw_admin_feesCall__Outputs(this);
  }
}

export class Withdraw_admin_feesCall__Inputs {
  _call: Withdraw_admin_feesCall;

  constructor(call: Withdraw_admin_feesCall) {
    this._call = call;
  }
}

export class Withdraw_admin_feesCall__Outputs {
  _call: Withdraw_admin_feesCall;

  constructor(call: Withdraw_admin_feesCall) {
    this._call = call;
  }
}

export class Kill_meCall extends EthereumCall {
  get inputs(): Kill_meCall__Inputs {
    return new Kill_meCall__Inputs(this);
  }

  get outputs(): Kill_meCall__Outputs {
    return new Kill_meCall__Outputs(this);
  }
}

export class Kill_meCall__Inputs {
  _call: Kill_meCall;

  constructor(call: Kill_meCall) {
    this._call = call;
  }
}

export class Kill_meCall__Outputs {
  _call: Kill_meCall;

  constructor(call: Kill_meCall) {
    this._call = call;
  }
}

export class Unkill_meCall extends EthereumCall {
  get inputs(): Unkill_meCall__Inputs {
    return new Unkill_meCall__Inputs(this);
  }

  get outputs(): Unkill_meCall__Outputs {
    return new Unkill_meCall__Outputs(this);
  }
}

export class Unkill_meCall__Inputs {
  _call: Unkill_meCall;

  constructor(call: Unkill_meCall) {
    this._call = call;
  }
}

export class Unkill_meCall__Outputs {
  _call: Unkill_meCall;

  constructor(call: Unkill_meCall) {
    this._call = call;
  }
}