(function() {var implementors = {
"hash_db":[],
"memory_db":[["impl&lt;H, KF, T, M&gt; <a class=\"trait\" href=\"hash_db/trait.AsHashDB.html\" title=\"trait hash_db::AsHashDB\">AsHashDB</a>&lt;H, T&gt; for <a class=\"struct\" href=\"memory_db/struct.MemoryDB.html\" title=\"struct memory_db::MemoryDB\">MemoryDB</a>&lt;H, KF, T, M&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">KeyHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; + for&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;KF: <a class=\"trait\" href=\"memory_db/trait.KeyFunction.html\" title=\"trait memory_db::KeyFunction\">KeyFunction</a>&lt;H&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"memory_db/trait.MemTracker.html\" title=\"trait memory_db::MemTracker\">MemTracker</a>&lt;T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"node_bench":[["impl&lt;'a&gt; <a class=\"trait\" href=\"hash_db/trait.AsHashDB.html\" title=\"trait hash_db::AsHashDB\">AsHashDB</a>&lt;<a class=\"struct\" href=\"sp_core/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct sp_core::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"node_bench/simple_trie/struct.SimpleTrie.html\" title=\"struct node_bench::simple_trie::SimpleTrie\">SimpleTrie</a>&lt;'a&gt;"]],
"sp_trie":[["impl&lt;'a, DB, H, T&gt; <a class=\"trait\" href=\"hash_db/trait.AsHashDB.html\" title=\"trait hash_db::AsHashDB\">AsHashDB</a>&lt;H, T&gt; for <a class=\"struct\" href=\"sp_trie/struct.KeySpacedDBMut.html\" title=\"struct sp_trie::KeySpacedDBMut\">KeySpacedDBMut</a>&lt;'a, DB, H&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"sp_trie/trait.HashDBT.html\" title=\"trait sp_trie::HashDBT\">HashDB</a>&lt;H, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;T&gt; + for&lt;'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'b [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()