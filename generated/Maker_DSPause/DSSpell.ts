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

export class DSSpell extends SmartContract {
  static bind(address: Address): DSSpell {
    return new DSSpell("DSSpell", address);
  }

  MILLION(): BigInt {
    let result = super.call("MILLION", []);

    return result[0].toBigInt();
  }

  try_MILLION(): CallResult<BigInt> {
    let result = super.tryCall("MILLION", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  SAI_MOM(): Address {
    let result = super.call("SAI_MOM", []);

    return result[0].toAddress();
  }

  try_SAI_MOM(): CallResult<Address> {
    let result = super.tryCall("SAI_MOM", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  WAD(): BigInt {
    let result = super.call("WAD", []);

    return result[0].toBigInt();
  }

  try_WAD(): CallResult<BigInt> {
    let result = super.tryCall("WAD", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  action(): Address {
    let result = super.call("action", []);

    return result[0].toAddress();
  }

  try_action(): CallResult<Address> {
    let result = super.tryCall("action", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  description(): string {
    let result = super.call("description", []);

    return result[0].toString();
  }

  try_description(): CallResult<string> {
    let result = super.tryCall("description", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  done(): boolean {
    let result = super.call("done", []);

    return result[0].toBoolean();
  }

  try_done(): CallResult<boolean> {
    let result = super.tryCall("done", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  eta(): BigInt {
    let result = super.call("eta", []);

    return result[0].toBigInt();
  }

  try_eta(): CallResult<BigInt> {
    let result = super.tryCall("eta", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  pause(): Address {
    let result = super.call("pause", []);

    return result[0].toAddress();
  }

  try_pause(): CallResult<Address> {
    let result = super.tryCall("pause", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  sig(): Bytes {
    let result = super.call("sig", []);

    return result[0].toBytes();
  }

  try_sig(): CallResult<Bytes> {
    let result = super.tryCall("sig", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  tag(): Bytes {
    let result = super.call("tag", []);

    return result[0].toBytes();
  }

  try_tag(): CallResult<Bytes> {
    let result = super.tryCall("tag", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CastCall extends EthereumCall {
  get inputs(): CastCall__Inputs {
    return new CastCall__Inputs(this);
  }

  get outputs(): CastCall__Outputs {
    return new CastCall__Outputs(this);
  }
}

export class CastCall__Inputs {
  _call: CastCall;

  constructor(call: CastCall) {
    this._call = call;
  }
}

export class CastCall__Outputs {
  _call: CastCall;

  constructor(call: CastCall) {
    this._call = call;
  }
}

export class ScheduleCall extends EthereumCall {
  get inputs(): ScheduleCall__Inputs {
    return new ScheduleCall__Inputs(this);
  }

  get outputs(): ScheduleCall__Outputs {
    return new ScheduleCall__Outputs(this);
  }
}

export class ScheduleCall__Inputs {
  _call: ScheduleCall;

  constructor(call: ScheduleCall) {
    this._call = call;
  }
}

export class ScheduleCall__Outputs {
  _call: ScheduleCall;

  constructor(call: ScheduleCall) {
    this._call = call;
  }
}