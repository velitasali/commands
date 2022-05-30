/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.ts":
/*!*********************!*\
  !*** ./js/index.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var libcommands_libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libcommands/libcommands_bg.wasm */ \"./pkg/libcommands_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([libcommands_libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\nlibcommands_libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n(0,libcommands_libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.commands_init)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://@tasali/commands/./js/index.ts?");

/***/ }),

/***/ "./pkg/libcommands_bg.js":
/*!*******************************!*\
  !*** ./pkg/libcommands_bg.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__wbg_alert_a4fc7cdbc6158529\": () => (/* binding */ __wbg_alert_a4fc7cdbc6158529),\n/* harmony export */   \"__wbg_body_2a1ff14b05042a51\": () => (/* binding */ __wbg_body_2a1ff14b05042a51),\n/* harmony export */   \"__wbg_call_ae78342adc33730a\": () => (/* binding */ __wbg_call_ae78342adc33730a),\n/* harmony export */   \"__wbg_clientHeight_205d93d6eadff351\": () => (/* binding */ __wbg_clientHeight_205d93d6eadff351),\n/* harmony export */   \"__wbg_clientWidth_11f72beceb108bff\": () => (/* binding */ __wbg_clientWidth_11f72beceb108bff),\n/* harmony export */   \"__wbg_document_99eddbbc11ec831e\": () => (/* binding */ __wbg_document_99eddbbc11ec831e),\n/* harmony export */   \"__wbg_error_09919627ac0992f5\": () => (/* binding */ __wbg_error_09919627ac0992f5),\n/* harmony export */   \"__wbg_fillText_a9da23f2c00b2b51\": () => (/* binding */ __wbg_fillText_a9da23f2c00b2b51),\n/* harmony export */   \"__wbg_getContext_0c19ba5c037e057f\": () => (/* binding */ __wbg_getContext_0c19ba5c037e057f),\n/* harmony export */   \"__wbg_getElementById_f83c5de20dc455d6\": () => (/* binding */ __wbg_getElementById_f83c5de20dc455d6),\n/* harmony export */   \"__wbg_globalThis_8e275ef40caea3a3\": () => (/* binding */ __wbg_globalThis_8e275ef40caea3a3),\n/* harmony export */   \"__wbg_global_5de1e0f82bddcd27\": () => (/* binding */ __wbg_global_5de1e0f82bddcd27),\n/* harmony export */   \"__wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f\": () => (/* binding */ __wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f),\n/* harmony export */   \"__wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef\": () => (/* binding */ __wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef),\n/* harmony export */   \"__wbg_instanceof_Window_0e6c0f1096d66c3c\": () => (/* binding */ __wbg_instanceof_Window_0e6c0f1096d66c3c),\n/* harmony export */   \"__wbg_log_e8ba7b992c7ad0eb\": () => (/* binding */ __wbg_log_e8ba7b992c7ad0eb),\n/* harmony export */   \"__wbg_measureText_7137f00ee7bb9969\": () => (/* binding */ __wbg_measureText_7137f00ee7bb9969),\n/* harmony export */   \"__wbg_new_693216e109162396\": () => (/* binding */ __wbg_new_693216e109162396),\n/* harmony export */   \"__wbg_newnoargs_e23b458e372830de\": () => (/* binding */ __wbg_newnoargs_e23b458e372830de),\n/* harmony export */   \"__wbg_restore_56c80343ddc70aeb\": () => (/* binding */ __wbg_restore_56c80343ddc70aeb),\n/* harmony export */   \"__wbg_save_faa4566184f134f6\": () => (/* binding */ __wbg_save_faa4566184f134f6),\n/* harmony export */   \"__wbg_self_99737b4dcdf6f0d8\": () => (/* binding */ __wbg_self_99737b4dcdf6f0d8),\n/* harmony export */   \"__wbg_setfillStyle_1d391c4891a6ec4d\": () => (/* binding */ __wbg_setfillStyle_1d391c4891a6ec4d),\n/* harmony export */   \"__wbg_setfont_7152cc4657609a93\": () => (/* binding */ __wbg_setfont_7152cc4657609a93),\n/* harmony export */   \"__wbg_setheight_2b662384bfacb65c\": () => (/* binding */ __wbg_setheight_2b662384bfacb65c),\n/* harmony export */   \"__wbg_settextBaseline_38fba0bc777dfc84\": () => (/* binding */ __wbg_settextBaseline_38fba0bc777dfc84),\n/* harmony export */   \"__wbg_setwidth_654d8adcd4979eed\": () => (/* binding */ __wbg_setwidth_654d8adcd4979eed),\n/* harmony export */   \"__wbg_stack_0ddaca5d1abfb52f\": () => (/* binding */ __wbg_stack_0ddaca5d1abfb52f),\n/* harmony export */   \"__wbg_width_1d637c56a808b6a2\": () => (/* binding */ __wbg_width_1d637c56a808b6a2),\n/* harmony export */   \"__wbg_window_9b61fbbf3564c4fb\": () => (/* binding */ __wbg_window_9b61fbbf3564c4fb),\n/* harmony export */   \"__wbindgen_debug_string\": () => (/* binding */ __wbindgen_debug_string),\n/* harmony export */   \"__wbindgen_is_undefined\": () => (/* binding */ __wbindgen_is_undefined),\n/* harmony export */   \"__wbindgen_object_clone_ref\": () => (/* binding */ __wbindgen_object_clone_ref),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"commands_init\": () => (/* binding */ commands_init),\n/* harmony export */   \"get_number\": () => (/* binding */ get_number),\n/* harmony export */   \"greet\": () => (/* binding */ greet),\n/* harmony export */   \"test_fn\": () => (/* binding */ test_fn)\n/* harmony export */ });\n/* harmony import */ var _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libcommands_bg.wasm */ \"./pkg/libcommands_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetInt32Memory0 = new Int32Array(_libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n*/\nfunction greet() {\n    _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.greet();\n}\n\n/**\n*/\nfunction test_fn() {\n    _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.test_fn();\n}\n\n/**\n* @returns {number}\n*/\nfunction get_number() {\n    const ret = _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.get_number();\n    return ret;\n}\n\n/**\n*/\nfunction commands_init() {\n    _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.commands_init();\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_alert_a4fc7cdbc6158529(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_log_e8ba7b992c7ad0eb(arg0) {\n    console.log(getObject(arg0));\n};\n\nfunction __wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef(arg0) {\n    const ret = getObject(arg0) instanceof HTMLCanvasElement;\n    return ret;\n};\n\nfunction __wbg_setwidth_654d8adcd4979eed(arg0, arg1) {\n    getObject(arg0).width = arg1 >>> 0;\n};\n\nfunction __wbg_setheight_2b662384bfacb65c(arg0, arg1) {\n    getObject(arg0).height = arg1 >>> 0;\n};\n\nfunction __wbg_getContext_0c19ba5c037e057f() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f(arg0) {\n    const ret = getObject(arg0) instanceof CanvasRenderingContext2D;\n    return ret;\n};\n\nfunction __wbg_setfillStyle_1d391c4891a6ec4d(arg0, arg1) {\n    getObject(arg0).fillStyle = getObject(arg1);\n};\n\nfunction __wbg_setfont_7152cc4657609a93(arg0, arg1, arg2) {\n    getObject(arg0).font = getStringFromWasm0(arg1, arg2);\n};\n\nfunction __wbg_settextBaseline_38fba0bc777dfc84(arg0, arg1, arg2) {\n    getObject(arg0).textBaseline = getStringFromWasm0(arg1, arg2);\n};\n\nfunction __wbg_restore_56c80343ddc70aeb(arg0) {\n    getObject(arg0).restore();\n};\n\nfunction __wbg_save_faa4566184f134f6(arg0) {\n    getObject(arg0).save();\n};\n\nfunction __wbg_fillText_a9da23f2c00b2b51() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);\n}, arguments) };\n\nfunction __wbg_measureText_7137f00ee7bb9969() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).measureText(getStringFromWasm0(arg1, arg2));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_width_1d637c56a808b6a2(arg0) {\n    const ret = getObject(arg0).width;\n    return ret;\n};\n\nfunction __wbg_body_2a1ff14b05042a51(arg0) {\n    const ret = getObject(arg0).body;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nfunction __wbg_getElementById_f83c5de20dc455d6(arg0, arg1, arg2) {\n    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nfunction __wbg_instanceof_Window_0e6c0f1096d66c3c(arg0) {\n    const ret = getObject(arg0) instanceof Window;\n    return ret;\n};\n\nfunction __wbg_document_99eddbbc11ec831e(arg0) {\n    const ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nfunction __wbg_clientWidth_11f72beceb108bff(arg0) {\n    const ret = getObject(arg0).clientWidth;\n    return ret;\n};\n\nfunction __wbg_clientHeight_205d93d6eadff351(arg0) {\n    const ret = getObject(arg0).clientHeight;\n    return ret;\n};\n\nfunction __wbg_newnoargs_e23b458e372830de(arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_call_ae78342adc33730a() { return handleError(function (arg0, arg1) {\n    const ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_self_99737b4dcdf6f0d8() { return handleError(function () {\n    const ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_9b61fbbf3564c4fb() { return handleError(function () {\n    const ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_8e275ef40caea3a3() { return handleError(function () {\n    const ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_5de1e0f82bddcd27() { return handleError(function () {\n    const ret = __webpack_require__.g.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_693216e109162396() {\n    const ret = new Error();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_stack_0ddaca5d1abfb52f(arg0, arg1) {\n    const ret = getObject(arg1).stack;\n    const ptr0 = passStringToWasm0(ret, _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbg_error_09919627ac0992f5(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(arg0, arg1);\n    }\n};\n\nfunction __wbindgen_debug_string(arg0, arg1) {\n    const ret = debugString(getObject(arg1));\n    const ptr0 = passStringToWasm0(ret, _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _libcommands_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://@tasali/commands/./pkg/libcommands_bg.js?");

/***/ }),

/***/ "./pkg/libcommands_bg.wasm":
/*!*********************************!*\
  !*** ./pkg/libcommands_bg.wasm ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"df177a8a670d988d2a72\", {\n\t\t\"./libcommands_bg.js\": {\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbg_alert_a4fc7cdbc6158529\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_a4fc7cdbc6158529,\n\t\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\t\"__wbg_log_e8ba7b992c7ad0eb\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_e8ba7b992c7ad0eb,\n\t\t\t\"__wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef,\n\t\t\t\"__wbg_setwidth_654d8adcd4979eed\": WEBPACK_IMPORTED_MODULE_0.__wbg_setwidth_654d8adcd4979eed,\n\t\t\t\"__wbg_setheight_2b662384bfacb65c\": WEBPACK_IMPORTED_MODULE_0.__wbg_setheight_2b662384bfacb65c,\n\t\t\t\"__wbg_getContext_0c19ba5c037e057f\": WEBPACK_IMPORTED_MODULE_0.__wbg_getContext_0c19ba5c037e057f,\n\t\t\t\"__wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f,\n\t\t\t\"__wbg_setfillStyle_1d391c4891a6ec4d\": WEBPACK_IMPORTED_MODULE_0.__wbg_setfillStyle_1d391c4891a6ec4d,\n\t\t\t\"__wbg_setfont_7152cc4657609a93\": WEBPACK_IMPORTED_MODULE_0.__wbg_setfont_7152cc4657609a93,\n\t\t\t\"__wbg_settextBaseline_38fba0bc777dfc84\": WEBPACK_IMPORTED_MODULE_0.__wbg_settextBaseline_38fba0bc777dfc84,\n\t\t\t\"__wbg_restore_56c80343ddc70aeb\": WEBPACK_IMPORTED_MODULE_0.__wbg_restore_56c80343ddc70aeb,\n\t\t\t\"__wbg_save_faa4566184f134f6\": WEBPACK_IMPORTED_MODULE_0.__wbg_save_faa4566184f134f6,\n\t\t\t\"__wbg_fillText_a9da23f2c00b2b51\": WEBPACK_IMPORTED_MODULE_0.__wbg_fillText_a9da23f2c00b2b51,\n\t\t\t\"__wbg_measureText_7137f00ee7bb9969\": WEBPACK_IMPORTED_MODULE_0.__wbg_measureText_7137f00ee7bb9969,\n\t\t\t\"__wbg_width_1d637c56a808b6a2\": WEBPACK_IMPORTED_MODULE_0.__wbg_width_1d637c56a808b6a2,\n\t\t\t\"__wbg_body_2a1ff14b05042a51\": WEBPACK_IMPORTED_MODULE_0.__wbg_body_2a1ff14b05042a51,\n\t\t\t\"__wbg_getElementById_f83c5de20dc455d6\": WEBPACK_IMPORTED_MODULE_0.__wbg_getElementById_f83c5de20dc455d6,\n\t\t\t\"__wbg_instanceof_Window_0e6c0f1096d66c3c\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_Window_0e6c0f1096d66c3c,\n\t\t\t\"__wbg_document_99eddbbc11ec831e\": WEBPACK_IMPORTED_MODULE_0.__wbg_document_99eddbbc11ec831e,\n\t\t\t\"__wbg_clientWidth_11f72beceb108bff\": WEBPACK_IMPORTED_MODULE_0.__wbg_clientWidth_11f72beceb108bff,\n\t\t\t\"__wbg_clientHeight_205d93d6eadff351\": WEBPACK_IMPORTED_MODULE_0.__wbg_clientHeight_205d93d6eadff351,\n\t\t\t\"__wbg_newnoargs_e23b458e372830de\": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_e23b458e372830de,\n\t\t\t\"__wbg_call_ae78342adc33730a\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_ae78342adc33730a,\n\t\t\t\"__wbg_self_99737b4dcdf6f0d8\": WEBPACK_IMPORTED_MODULE_0.__wbg_self_99737b4dcdf6f0d8,\n\t\t\t\"__wbg_window_9b61fbbf3564c4fb\": WEBPACK_IMPORTED_MODULE_0.__wbg_window_9b61fbbf3564c4fb,\n\t\t\t\"__wbg_globalThis_8e275ef40caea3a3\": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_8e275ef40caea3a3,\n\t\t\t\"__wbg_global_5de1e0f82bddcd27\": WEBPACK_IMPORTED_MODULE_0.__wbg_global_5de1e0f82bddcd27,\n\t\t\t\"__wbindgen_is_undefined\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,\n\t\t\t\"__wbindgen_object_clone_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,\n\t\t\t\"__wbg_new_693216e109162396\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_693216e109162396,\n\t\t\t\"__wbg_stack_0ddaca5d1abfb52f\": WEBPACK_IMPORTED_MODULE_0.__wbg_stack_0ddaca5d1abfb52f,\n\t\t\t\"__wbg_error_09919627ac0992f5\": WEBPACK_IMPORTED_MODULE_0.__wbg_error_09919627ac0992f5,\n\t\t\t\"__wbindgen_debug_string\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_debug_string,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n}\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {\n\ttry {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./libcommands_bg.js */ \"./pkg/libcommands_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\tvar [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;\n\tawait __webpack_require__.v(exports, module.id, \"df177a8a670d988d2a72\", {\n\t\t\"./libcommands_bg.js\": {\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbg_alert_a4fc7cdbc6158529\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_a4fc7cdbc6158529,\n\t\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\t\"__wbg_log_e8ba7b992c7ad0eb\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_e8ba7b992c7ad0eb,\n\t\t\t\"__wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef,\n\t\t\t\"__wbg_setwidth_654d8adcd4979eed\": WEBPACK_IMPORTED_MODULE_0.__wbg_setwidth_654d8adcd4979eed,\n\t\t\t\"__wbg_setheight_2b662384bfacb65c\": WEBPACK_IMPORTED_MODULE_0.__wbg_setheight_2b662384bfacb65c,\n\t\t\t\"__wbg_getContext_0c19ba5c037e057f\": WEBPACK_IMPORTED_MODULE_0.__wbg_getContext_0c19ba5c037e057f,\n\t\t\t\"__wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f,\n\t\t\t\"__wbg_setfillStyle_1d391c4891a6ec4d\": WEBPACK_IMPORTED_MODULE_0.__wbg_setfillStyle_1d391c4891a6ec4d,\n\t\t\t\"__wbg_setfont_7152cc4657609a93\": WEBPACK_IMPORTED_MODULE_0.__wbg_setfont_7152cc4657609a93,\n\t\t\t\"__wbg_settextBaseline_38fba0bc777dfc84\": WEBPACK_IMPORTED_MODULE_0.__wbg_settextBaseline_38fba0bc777dfc84,\n\t\t\t\"__wbg_restore_56c80343ddc70aeb\": WEBPACK_IMPORTED_MODULE_0.__wbg_restore_56c80343ddc70aeb,\n\t\t\t\"__wbg_save_faa4566184f134f6\": WEBPACK_IMPORTED_MODULE_0.__wbg_save_faa4566184f134f6,\n\t\t\t\"__wbg_fillText_a9da23f2c00b2b51\": WEBPACK_IMPORTED_MODULE_0.__wbg_fillText_a9da23f2c00b2b51,\n\t\t\t\"__wbg_measureText_7137f00ee7bb9969\": WEBPACK_IMPORTED_MODULE_0.__wbg_measureText_7137f00ee7bb9969,\n\t\t\t\"__wbg_width_1d637c56a808b6a2\": WEBPACK_IMPORTED_MODULE_0.__wbg_width_1d637c56a808b6a2,\n\t\t\t\"__wbg_body_2a1ff14b05042a51\": WEBPACK_IMPORTED_MODULE_0.__wbg_body_2a1ff14b05042a51,\n\t\t\t\"__wbg_getElementById_f83c5de20dc455d6\": WEBPACK_IMPORTED_MODULE_0.__wbg_getElementById_f83c5de20dc455d6,\n\t\t\t\"__wbg_instanceof_Window_0e6c0f1096d66c3c\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_Window_0e6c0f1096d66c3c,\n\t\t\t\"__wbg_document_99eddbbc11ec831e\": WEBPACK_IMPORTED_MODULE_0.__wbg_document_99eddbbc11ec831e,\n\t\t\t\"__wbg_clientWidth_11f72beceb108bff\": WEBPACK_IMPORTED_MODULE_0.__wbg_clientWidth_11f72beceb108bff,\n\t\t\t\"__wbg_clientHeight_205d93d6eadff351\": WEBPACK_IMPORTED_MODULE_0.__wbg_clientHeight_205d93d6eadff351,\n\t\t\t\"__wbg_newnoargs_e23b458e372830de\": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_e23b458e372830de,\n\t\t\t\"__wbg_call_ae78342adc33730a\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_ae78342adc33730a,\n\t\t\t\"__wbg_self_99737b4dcdf6f0d8\": WEBPACK_IMPORTED_MODULE_0.__wbg_self_99737b4dcdf6f0d8,\n\t\t\t\"__wbg_window_9b61fbbf3564c4fb\": WEBPACK_IMPORTED_MODULE_0.__wbg_window_9b61fbbf3564c4fb,\n\t\t\t\"__wbg_globalThis_8e275ef40caea3a3\": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_8e275ef40caea3a3,\n\t\t\t\"__wbg_global_5de1e0f82bddcd27\": WEBPACK_IMPORTED_MODULE_0.__wbg_global_5de1e0f82bddcd27,\n\t\t\t\"__wbindgen_is_undefined\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,\n\t\t\t\"__wbindgen_object_clone_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,\n\t\t\t\"__wbg_new_693216e109162396\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_693216e109162396,\n\t\t\t\"__wbg_stack_0ddaca5d1abfb52f\": WEBPACK_IMPORTED_MODULE_0.__wbg_stack_0ddaca5d1abfb52f,\n\t\t\t\"__wbg_error_09919627ac0992f5\": WEBPACK_IMPORTED_MODULE_0.__wbg_error_09919627ac0992f5,\n\t\t\t\"__wbindgen_debug_string\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_debug_string,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n\t__webpack_async_result__();\n\t} catch(e) { __webpack_async_result__(e); }\n}, 1);\n\n//# sourceURL=webpack://@tasali/commands/./pkg/libcommands_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.ts");
/******/ 	
/******/ })()
;