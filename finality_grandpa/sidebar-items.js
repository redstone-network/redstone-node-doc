window.SIDEBAR_ITEMS = {"enum":[["Error","Top-level error type used by this crate."],["Message","A protocol message or vote."]],"fn":[["process_commit_validation_result","Runs the callback with the appropriate `CommitProcessingOutcome` based on the given `CommitValidationResult`. Outcome is bad if ghost is undefined, good otherwise."],["validate_commit","Validates a GRANDPA commit message and returns the ghost calculated using the precommits in the commit message and using the commit target as a base."]],"mod":[["round","Logic for a single round of GRANDPA."],["vote_graph","Maintains the vote-graph of the blockchain."],["voter","A voter in GRANDPA. This transitions between rounds and casts votes."],["voter_set","Implementation of a `VoterSet`, representing the complete set of voters and their weights in the context of a round of the protocol."]],"struct":[["CatchUp","A catch-up message, which is an aggregate of prevotes and precommits necessary to complete a round."],["Commit","A commit message which is an aggregate of precommits."],["CommitValidationResult","Struct returned from `validate_commit` function with information about the validation result."],["CompactCommit","A commit message with compact representation of authentication data."],["Equivocation","An equivocation (double-vote) in a given round."],["HistoricalVotes","Historical votes seen in a round."],["Precommit","A precommit for a block and its ancestors."],["Prevote","A prevote for a block and its ancestors."],["PrimaryPropose","A primary proposed block, this is a broadcast of the last round’s estimate."],["SignedMessage","A signed message."],["SignedPrecommit","A signed precommit message."],["SignedPrevote","A signed prevote message."]],"trait":[["BlockNumberOps","Arithmetic necessary for a block number."],["Chain","Chain context necessary for implementation of the finality gadget."]],"type":[["MultiAuthData","Authentication data for a set of many messages, currently a set of precommit signatures but in the future could be optimized with BLS signature aggregation."]]};