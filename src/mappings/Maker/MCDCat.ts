import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_MCDCat/MCDCat'
import { Spell } from '../../../generated/schema'
import { updateSpellFromLogNote } from './helpers'

/** Handles anonymous event for `setDelay(address)`
 * 
 * @dev TODO - See See https://github.com/blocklytics/spells-subgraph/issues/5
 */
export function handleLogNoteSetDelay(event: LogNote): void {
    let debug_id = event.transaction.hash.toHexString()
    let arg1 = event.params.arg1.toHexString() // ??
    let arg2 = event.params.arg2.toHexString() // ??
    let usr = event.params.usr.toHexString()   // Spell contract address
    let sig = event.params.sig.toHexString()   // Signature // Lift = 0x3c278bd5
    let data = event.params.data.toHexString() // Value

    log.debug("MCDCat  setDelay for spell {} in tx {}", [usr, debug_id])

    let tx = Spell.load(usr)
    if (tx === null) {
        log.debug("MCDCat setDelay. Spell is null in tx {}. {} {} {} {} {}", [debug_id, arg1, arg2, usr, sig, data])
        // TODO - check assumption that only etched spells can be lifted?
    } else {
        log.debug("MCDCat setDelay. Spell found in tx {}. {} {} {} {} {}", [debug_id, arg1, arg2, usr, sig, data])
        // TODO - check that spells are being found
    }
}