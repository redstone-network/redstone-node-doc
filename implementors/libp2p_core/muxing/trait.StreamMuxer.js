(function() {var implementors = {
"libp2p":[],
"libp2p_core":[],
"libp2p_mplex":[["impl&lt;C&gt; <a class=\"trait\" href=\"libp2p_core/muxing/trait.StreamMuxer.html\" title=\"trait libp2p_core::muxing::StreamMuxer\">StreamMuxer</a> for <a class=\"struct\" href=\"libp2p_mplex/struct.Multiplex.html\" title=\"struct libp2p_mplex::Multiplex\">Multiplex</a>&lt;C&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"]],
"libp2p_yamux":[["impl&lt;S&gt; <a class=\"trait\" href=\"libp2p_core/muxing/trait.StreamMuxer.html\" title=\"trait libp2p_core::muxing::StreamMuxer\">StreamMuxer</a> for <a class=\"struct\" href=\"libp2p_yamux/struct.Yamux.html\" title=\"struct libp2p_yamux::Yamux\">Yamux</a>&lt;S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"yamux/connection/stream/struct.Stream.html\" title=\"struct yamux::connection::stream::Stream\">Stream</a>, <a class=\"struct\" href=\"libp2p_yamux/struct.YamuxError.html\" title=\"struct libp2p_yamux::YamuxError\">YamuxError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()