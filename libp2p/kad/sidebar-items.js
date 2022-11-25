window.SIDEBAR_ITEMS = {"constant":[["ALPHA_VALUE","The `α` parameter of the Kademlia specification."],["K_VALUE","The `k` parameter of the Kademlia specification."]],"enum":[["AddProviderContext","The context of a [`QueryInfo::AddProvider`] query."],["AddProviderError","The possible errors when publishing a provider record."],["AddProviderPhase","The phases of a [`QueryInfo::AddProvider`] query."],["BootstrapError","The error result of [`Kademlia::bootstrap`]."],["GetClosestPeersError","The error result of [`Kademlia::get_closest_peers`]."],["GetProvidersError","The error result of [`Kademlia::get_providers`]."],["GetRecordError","The error result of [`Kademlia::get_record`]."],["InboundRequest","Information about a received and handled inbound request."],["KadConnectionType","Status of our connection to a node reported by the Kademlia protocol."],["KademliaBucketInserts","The configurable strategies for the insertion of peers and their addresses into the k-buckets of the Kademlia routing table."],["KademliaCaching","The configuration for Kademlia “write-back” caching after successful lookups via [`Kademlia::get_record`]."],["KademliaEvent","The events produced by the `Kademlia` behaviour."],["KademliaStoreInserts","The configurable filtering strategies for the acceptance of incoming records."],["PutRecordContext","The context of a [`QueryInfo::PutRecord`] query."],["PutRecordError","The error result of [`Kademlia::put_record`]."],["PutRecordPhase","The phases of a [`QueryInfo::PutRecord`] query."],["QueryInfo","Information about a running query."],["QueryResult","The results of Kademlia queries."],["Quorum","A quorum w.r.t. the configured replication factor specifies the minimum number of distinct nodes that must be successfully contacted in order for a query to succeed."]],"mod":[["handler",""],["kbucket","Implementation of a Kademlia routing table as used by a single peer participating in a Kademlia DHT."],["protocol","The Kademlia connection protocol upgrade and associated message types."],["record","Records and record storage abstraction of the libp2p Kademlia DHT."]],"struct":[["AddProviderOk","The successful result of publishing a provider record."],["Addresses","A non-empty list of (unique) addresses of a peer in the routing table."],["BootstrapOk","The successful result of [`Kademlia::bootstrap`]."],["GetClosestPeersOk","The successful result of [`Kademlia::get_closest_peers`]."],["GetProvidersOk","The successful result of [`Kademlia::get_providers`]."],["GetRecordOk","The successful result of [`Kademlia::get_record`]."],["Kademlia","`Kademlia` is a `NetworkBehaviour` that implements the libp2p Kademlia protocol."],["KademliaConfig","The configuration for the `Kademlia` behaviour."],["PeerRecord","A record either received by the given peer or retrieved from the local record store."],["ProviderRecord","A record stored in the DHT whose value is the ID of a peer who can provide the value on-demand."],["PutRecordOk","The successful result of [`Kademlia::put_record`]."],["QueryId","Unique identifier for an active query."],["QueryMut","A mutable reference to a running query."],["QueryRef","An immutable reference to a running query."],["QueryStats","Execution statistics of a query."],["Record","A record stored in the DHT."]],"type":[["AddProviderResult","The result of publishing a provider record."],["BootstrapResult","The result of [`Kademlia::bootstrap`]."],["GetClosestPeersResult","The result of [`Kademlia::get_closest_peers`]."],["GetProvidersResult","The result of [`Kademlia::get_providers`]."],["GetRecordResult","The result of [`Kademlia::get_record`]."],["PutRecordResult","The result of [`Kademlia::put_record`]."]]};