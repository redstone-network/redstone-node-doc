window.SIDEBAR_ITEMS = {"enum":[["ReturnValue","Typed value that can be returned from a function."],["Value","Values supported by Substrate on the boundary between host/Wasm."],["ValueType","Value types supported by Substrate on the boundary between host/Wasm."]],"macro":[["if_wasmtime_is_enabled",""]],"mod":[["wasmtime","Wasmtime’s embedding API"]],"struct":[["ExtendedHostFunctions","A wrapper which merges two sets of host functions, and allows the second set to override the host functions from the first set."],["Pointer","Type to represent a pointer in wasm at the host."],["Signature","The Signature of a function"]],"trait":[["Function","Something that provides a function implementation on the host for a wasm function."],["FunctionContext","Context used by `Function` to interact with the allocator and the memory of the wasm instance."],["HostFunctionRegistry","A trait used to statically register host callbacks with the WASM executor, so that they call be called from within the runtime with minimal overhead."],["HostFunctions","Something that provides implementations for host functions."],["IntoValue","Something that can be converted into a wasm compatible `Value`."],["MaybeRefUnwindSafe","A trait that requires `RefUnwindSafe` when `feature = std`."],["PointerType","Something that can be wrapped in a wasm `Pointer`."],["ReadPrimitive","Something that can read a primitive from a wasm memory location."],["Sandbox","Something that provides access to the sandbox."],["TryFromValue","Something that can may be created from a wasm `Value`."],["WasmTy","A trait for types directly usable at the WASM FFI boundary without any conversion at all."],["WritePrimitive","Something that can write a primitive to wasm memory location."]],"type":[["MemoryId","Sandbox memory identifier."],["Result","Result type used by traits in this crate."],["WordSize","The word size used in wasm. Normally known as `usize` in Rust."]]};