window.SIDEBAR_ITEMS = {"struct":[["BlockImportNotification","Summary of an imported block"],["ClientInfo","Client info"],["FinalityNotification","Summary of a finalized block."],["IoInfo","I/O statistics for client instance."],["MemoryInfo","Memory statistics for client instance."],["MemorySize","A wrapper to store the size of some memory."],["StateDbMemoryInfo","Memory statistics for state db."],["UsageInfo","Usage statistics for running client instance."]],"trait":[["BlockBackend","Interface for fetching block data."],["BlockOf","Figure out the block type for a given type (for now, just a `Client`)."],["BlockchainEvents","A source of blockchain events."],["PreCommitActions","Interface to perform auxiliary actions before committing a block import or finality operation."],["ProvideUncles","Provide a list of potential uncle headers for a given block."]],"type":[["AuxDataOperations","List of operations to be performed on storage aux data. First tuple element is the encoded data key. Second tuple element is the encoded optional data to write. If `None`, the key and the associated data are deleted from storage."],["BadBlocks","Known bad block hashes."],["FinalityNotifications","A stream of block finality notifications."],["ForkBlocks","Expected hashes of blocks at given heights."],["ImportNotifications","Type that implements `futures::Stream` of block import events."],["OnFinalityAction","Callback invoked before committing the operations created during block finalization. This gives the opportunity to perform auxiliary pre-commit actions and optionally enqueue further storage write operations to be atomically performed on commit."],["OnImportAction","Callback invoked before committing the operations created during block import. This gives the opportunity to perform auxiliary pre-commit actions and optionally enqueue further storage write operations to be atomically performed on commit."]]};