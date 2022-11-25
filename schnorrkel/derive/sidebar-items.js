window.SIDEBAR_ITEMS = {"constant":[["CHAIN_CODE_LENGTH","Length in bytes of our chain codes."]],"struct":[["ChainCode","We cannot assume the original public key is secret and additional inputs might have low entropy, like `i` in BIP32.  As in BIP32, chain codes fill this gap by being a high entropy secret shared between public and private key holders.  These are produced by key derivations and can be incorporated into subsequence key derivations.  See https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#extended-keys"],["ExtendedKey","A convenience wraper that combines derivable key and a chain code."]],"trait":[["Derivation","Key types that support “hierarchical deterministic” key derivation"]]};