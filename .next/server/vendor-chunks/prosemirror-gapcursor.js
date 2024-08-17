"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/prosemirror-gapcursor";
exports.ids = ["vendor-chunks/prosemirror-gapcursor"];
exports.modules = {

/***/ "(ssr)/./node_modules/prosemirror-gapcursor/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/prosemirror-gapcursor/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GapCursor: () => (/* binding */ GapCursor),\n/* harmony export */   gapCursor: () => (/* binding */ gapCursor)\n/* harmony export */ });\n/* harmony import */ var prosemirror_keymap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-keymap */ \"(ssr)/./node_modules/prosemirror-keymap/dist/index.js\");\n/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-state */ \"(ssr)/./node_modules/prosemirror-state/dist/index.js\");\n/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-model */ \"(ssr)/./node_modules/prosemirror-model/dist/index.js\");\n/* harmony import */ var prosemirror_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-view */ \"(ssr)/./node_modules/prosemirror-view/dist/index.js\");\n\n\n\n\n\n/**\nGap cursor selections are represented using this class. Its\n`$anchor` and `$head` properties both point at the cursor position.\n*/\nclass GapCursor extends prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection {\n    /**\n    Create a gap cursor.\n    */\n    constructor($pos) {\n        super($pos, $pos);\n    }\n    map(doc, mapping) {\n        let $pos = doc.resolve(mapping.map(this.head));\n        return GapCursor.valid($pos) ? new GapCursor($pos) : prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection.near($pos);\n    }\n    content() { return prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.Slice.empty; }\n    eq(other) {\n        return other instanceof GapCursor && other.head == this.head;\n    }\n    toJSON() {\n        return { type: \"gapcursor\", pos: this.head };\n    }\n    /**\n    @internal\n    */\n    static fromJSON(doc, json) {\n        if (typeof json.pos != \"number\")\n            throw new RangeError(\"Invalid input for GapCursor.fromJSON\");\n        return new GapCursor(doc.resolve(json.pos));\n    }\n    /**\n    @internal\n    */\n    getBookmark() { return new GapBookmark(this.anchor); }\n    /**\n    @internal\n    */\n    static valid($pos) {\n        let parent = $pos.parent;\n        if (parent.isTextblock || !closedBefore($pos) || !closedAfter($pos))\n            return false;\n        let override = parent.type.spec.allowGapCursor;\n        if (override != null)\n            return override;\n        let deflt = parent.contentMatchAt($pos.index()).defaultType;\n        return deflt && deflt.isTextblock;\n    }\n    /**\n    @internal\n    */\n    static findGapCursorFrom($pos, dir, mustMove = false) {\n        search: for (;;) {\n            if (!mustMove && GapCursor.valid($pos))\n                return $pos;\n            let pos = $pos.pos, next = null;\n            // Scan up from this position\n            for (let d = $pos.depth;; d--) {\n                let parent = $pos.node(d);\n                if (dir > 0 ? $pos.indexAfter(d) < parent.childCount : $pos.index(d) > 0) {\n                    next = parent.child(dir > 0 ? $pos.indexAfter(d) : $pos.index(d) - 1);\n                    break;\n                }\n                else if (d == 0) {\n                    return null;\n                }\n                pos += dir;\n                let $cur = $pos.doc.resolve(pos);\n                if (GapCursor.valid($cur))\n                    return $cur;\n            }\n            // And then down into the next node\n            for (;;) {\n                let inside = dir > 0 ? next.firstChild : next.lastChild;\n                if (!inside) {\n                    if (next.isAtom && !next.isText && !prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.isSelectable(next)) {\n                        $pos = $pos.doc.resolve(pos + next.nodeSize * dir);\n                        mustMove = false;\n                        continue search;\n                    }\n                    break;\n                }\n                next = inside;\n                pos += dir;\n                let $cur = $pos.doc.resolve(pos);\n                if (GapCursor.valid($cur))\n                    return $cur;\n            }\n            return null;\n        }\n    }\n}\nGapCursor.prototype.visible = false;\nGapCursor.findFrom = GapCursor.findGapCursorFrom;\nprosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection.jsonID(\"gapcursor\", GapCursor);\nclass GapBookmark {\n    constructor(pos) {\n        this.pos = pos;\n    }\n    map(mapping) {\n        return new GapBookmark(mapping.map(this.pos));\n    }\n    resolve(doc) {\n        let $pos = doc.resolve(this.pos);\n        return GapCursor.valid($pos) ? new GapCursor($pos) : prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection.near($pos);\n    }\n}\nfunction closedBefore($pos) {\n    for (let d = $pos.depth; d >= 0; d--) {\n        let index = $pos.index(d), parent = $pos.node(d);\n        // At the start of this parent, look at next one\n        if (index == 0) {\n            if (parent.type.spec.isolating)\n                return true;\n            continue;\n        }\n        // See if the node before (or its first ancestor) is closed\n        for (let before = parent.child(index - 1);; before = before.lastChild) {\n            if ((before.childCount == 0 && !before.inlineContent) || before.isAtom || before.type.spec.isolating)\n                return true;\n            if (before.inlineContent)\n                return false;\n        }\n    }\n    // Hit start of document\n    return true;\n}\nfunction closedAfter($pos) {\n    for (let d = $pos.depth; d >= 0; d--) {\n        let index = $pos.indexAfter(d), parent = $pos.node(d);\n        if (index == parent.childCount) {\n            if (parent.type.spec.isolating)\n                return true;\n            continue;\n        }\n        for (let after = parent.child(index);; after = after.firstChild) {\n            if ((after.childCount == 0 && !after.inlineContent) || after.isAtom || after.type.spec.isolating)\n                return true;\n            if (after.inlineContent)\n                return false;\n        }\n    }\n    return true;\n}\n\n/**\nCreate a gap cursor plugin. When enabled, this will capture clicks\nnear and arrow-key-motion past places that don't have a normally\nselectable position nearby, and create a gap cursor selection for\nthem. The cursor is drawn as an element with class\n`ProseMirror-gapcursor`. You can either include\n`style/gapcursor.css` from the package's directory or add your own\nstyles to make it visible.\n*/\nfunction gapCursor() {\n    return new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Plugin({\n        props: {\n            decorations: drawGapCursor,\n            createSelectionBetween(_view, $anchor, $head) {\n                return $anchor.pos == $head.pos && GapCursor.valid($head) ? new GapCursor($head) : null;\n            },\n            handleClick,\n            handleKeyDown,\n            handleDOMEvents: { beforeinput: beforeinput }\n        }\n    });\n}\nconst handleKeyDown = (0,prosemirror_keymap__WEBPACK_IMPORTED_MODULE_2__.keydownHandler)({\n    \"ArrowLeft\": arrow(\"horiz\", -1),\n    \"ArrowRight\": arrow(\"horiz\", 1),\n    \"ArrowUp\": arrow(\"vert\", -1),\n    \"ArrowDown\": arrow(\"vert\", 1)\n});\nfunction arrow(axis, dir) {\n    const dirStr = axis == \"vert\" ? (dir > 0 ? \"down\" : \"up\") : (dir > 0 ? \"right\" : \"left\");\n    return function (state, dispatch, view) {\n        let sel = state.selection;\n        let $start = dir > 0 ? sel.$to : sel.$from, mustMove = sel.empty;\n        if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection) {\n            if (!view.endOfTextblock(dirStr) || $start.depth == 0)\n                return false;\n            mustMove = false;\n            $start = state.doc.resolve(dir > 0 ? $start.after() : $start.before());\n        }\n        let $found = GapCursor.findGapCursorFrom($start, dir, mustMove);\n        if (!$found)\n            return false;\n        if (dispatch)\n            dispatch(state.tr.setSelection(new GapCursor($found)));\n        return true;\n    };\n}\nfunction handleClick(view, pos, event) {\n    if (!view || !view.editable)\n        return false;\n    let $pos = view.state.doc.resolve(pos);\n    if (!GapCursor.valid($pos))\n        return false;\n    let clickPos = view.posAtCoords({ left: event.clientX, top: event.clientY });\n    if (clickPos && clickPos.inside > -1 && prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.isSelectable(view.state.doc.nodeAt(clickPos.inside)))\n        return false;\n    view.dispatch(view.state.tr.setSelection(new GapCursor($pos)));\n    return true;\n}\n// This is a hack that, when a composition starts while a gap cursor\n// is active, quickly creates an inline context for the composition to\n// happen in, to avoid it being aborted by the DOM selection being\n// moved into a valid position.\nfunction beforeinput(view, event) {\n    if (event.inputType != \"insertCompositionText\" || !(view.state.selection instanceof GapCursor))\n        return false;\n    let { $from } = view.state.selection;\n    let insert = $from.parent.contentMatchAt($from.index()).findWrapping(view.state.schema.nodes.text);\n    if (!insert)\n        return false;\n    let frag = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.Fragment.empty;\n    for (let i = insert.length - 1; i >= 0; i--)\n        frag = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.Fragment.from(insert[i].createAndFill(null, frag));\n    let tr = view.state.tr.replace($from.pos, $from.pos, new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.Slice(frag, 0, 0));\n    tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection.near(tr.doc.resolve($from.pos + 1)));\n    view.dispatch(tr);\n    return false;\n}\nfunction drawGapCursor(state) {\n    if (!(state.selection instanceof GapCursor))\n        return null;\n    let node = document.createElement(\"div\");\n    node.className = \"ProseMirror-gapcursor\";\n    return prosemirror_view__WEBPACK_IMPORTED_MODULE_3__.DecorationSet.create(state.doc, [prosemirror_view__WEBPACK_IMPORTED_MODULE_3__.Decoration.widget(state.selection.head, node, { key: \"gapcursor\" })]);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItZ2FwY3Vyc29yL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9EO0FBQ2dDO0FBQ2hDO0FBQ1M7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsd0RBQVM7QUFDdEU7QUFDQSxnQkFBZ0IsT0FBTyxvREFBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSx3REFBd0QsNERBQWE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsd0RBQVM7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxREFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0JBQXNCLGtFQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MseUNBQXlDO0FBQy9FLDRDQUE0Qyw0REFBYTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVE7QUFDdkIsb0NBQW9DLFFBQVE7QUFDNUMsZUFBZSx1REFBUTtBQUN2Qiw2REFBNkQsb0RBQUs7QUFDbEUsb0JBQW9CLDREQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJEQUFhLG9CQUFvQix3REFBVSxzQ0FBc0Msa0JBQWtCO0FBQzlHOztBQUVnQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy0xNS1zb2NpYWwtbWVkaWEtYXBwLy4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLWdhcGN1cnNvci9kaXN0L2luZGV4LmpzP2YzNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsga2V5ZG93bkhhbmRsZXIgfSBmcm9tICdwcm9zZW1pcnJvci1rZXltYXAnO1xuaW1wb3J0IHsgU2VsZWN0aW9uLCBOb2RlU2VsZWN0aW9uLCBUZXh0U2VsZWN0aW9uLCBQbHVnaW4gfSBmcm9tICdwcm9zZW1pcnJvci1zdGF0ZSc7XG5pbXBvcnQgeyBTbGljZSwgRnJhZ21lbnQgfSBmcm9tICdwcm9zZW1pcnJvci1tb2RlbCc7XG5pbXBvcnQgeyBEZWNvcmF0aW9uU2V0LCBEZWNvcmF0aW9uIH0gZnJvbSAncHJvc2VtaXJyb3Itdmlldyc7XG5cbi8qKlxuR2FwIGN1cnNvciBzZWxlY3Rpb25zIGFyZSByZXByZXNlbnRlZCB1c2luZyB0aGlzIGNsYXNzLiBJdHNcbmAkYW5jaG9yYCBhbmQgYCRoZWFkYCBwcm9wZXJ0aWVzIGJvdGggcG9pbnQgYXQgdGhlIGN1cnNvciBwb3NpdGlvbi5cbiovXG5jbGFzcyBHYXBDdXJzb3IgZXh0ZW5kcyBTZWxlY3Rpb24ge1xuICAgIC8qKlxuICAgIENyZWF0ZSBhIGdhcCBjdXJzb3IuXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcigkcG9zKSB7XG4gICAgICAgIHN1cGVyKCRwb3MsICRwb3MpO1xuICAgIH1cbiAgICBtYXAoZG9jLCBtYXBwaW5nKSB7XG4gICAgICAgIGxldCAkcG9zID0gZG9jLnJlc29sdmUobWFwcGluZy5tYXAodGhpcy5oZWFkKSk7XG4gICAgICAgIHJldHVybiBHYXBDdXJzb3IudmFsaWQoJHBvcykgPyBuZXcgR2FwQ3Vyc29yKCRwb3MpIDogU2VsZWN0aW9uLm5lYXIoJHBvcyk7XG4gICAgfVxuICAgIGNvbnRlbnQoKSB7IHJldHVybiBTbGljZS5lbXB0eTsgfVxuICAgIGVxKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBvdGhlciBpbnN0YW5jZW9mIEdhcEN1cnNvciAmJiBvdGhlci5oZWFkID09IHRoaXMuaGVhZDtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4geyB0eXBlOiBcImdhcGN1cnNvclwiLCBwb3M6IHRoaXMuaGVhZCB9O1xuICAgIH1cbiAgICAvKipcbiAgICBAaW50ZXJuYWxcbiAgICAqL1xuICAgIHN0YXRpYyBmcm9tSlNPTihkb2MsIGpzb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBqc29uLnBvcyAhPSBcIm51bWJlclwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIGlucHV0IGZvciBHYXBDdXJzb3IuZnJvbUpTT05cIik7XG4gICAgICAgIHJldHVybiBuZXcgR2FwQ3Vyc29yKGRvYy5yZXNvbHZlKGpzb24ucG9zKSk7XG4gICAgfVxuICAgIC8qKlxuICAgIEBpbnRlcm5hbFxuICAgICovXG4gICAgZ2V0Qm9va21hcmsoKSB7IHJldHVybiBuZXcgR2FwQm9va21hcmsodGhpcy5hbmNob3IpOyB9XG4gICAgLyoqXG4gICAgQGludGVybmFsXG4gICAgKi9cbiAgICBzdGF0aWMgdmFsaWQoJHBvcykge1xuICAgICAgICBsZXQgcGFyZW50ID0gJHBvcy5wYXJlbnQ7XG4gICAgICAgIGlmIChwYXJlbnQuaXNUZXh0YmxvY2sgfHwgIWNsb3NlZEJlZm9yZSgkcG9zKSB8fCAhY2xvc2VkQWZ0ZXIoJHBvcykpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBvdmVycmlkZSA9IHBhcmVudC50eXBlLnNwZWMuYWxsb3dHYXBDdXJzb3I7XG4gICAgICAgIGlmIChvdmVycmlkZSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIG92ZXJyaWRlO1xuICAgICAgICBsZXQgZGVmbHQgPSBwYXJlbnQuY29udGVudE1hdGNoQXQoJHBvcy5pbmRleCgpKS5kZWZhdWx0VHlwZTtcbiAgICAgICAgcmV0dXJuIGRlZmx0ICYmIGRlZmx0LmlzVGV4dGJsb2NrO1xuICAgIH1cbiAgICAvKipcbiAgICBAaW50ZXJuYWxcbiAgICAqL1xuICAgIHN0YXRpYyBmaW5kR2FwQ3Vyc29yRnJvbSgkcG9zLCBkaXIsIG11c3RNb3ZlID0gZmFsc2UpIHtcbiAgICAgICAgc2VhcmNoOiBmb3IgKDs7KSB7XG4gICAgICAgICAgICBpZiAoIW11c3RNb3ZlICYmIEdhcEN1cnNvci52YWxpZCgkcG9zKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gJHBvcztcbiAgICAgICAgICAgIGxldCBwb3MgPSAkcG9zLnBvcywgbmV4dCA9IG51bGw7XG4gICAgICAgICAgICAvLyBTY2FuIHVwIGZyb20gdGhpcyBwb3NpdGlvblxuICAgICAgICAgICAgZm9yIChsZXQgZCA9ICRwb3MuZGVwdGg7OyBkLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gJHBvcy5ub2RlKGQpO1xuICAgICAgICAgICAgICAgIGlmIChkaXIgPiAwID8gJHBvcy5pbmRleEFmdGVyKGQpIDwgcGFyZW50LmNoaWxkQ291bnQgOiAkcG9zLmluZGV4KGQpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gcGFyZW50LmNoaWxkKGRpciA+IDAgPyAkcG9zLmluZGV4QWZ0ZXIoZCkgOiAkcG9zLmluZGV4KGQpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvcyArPSBkaXI7XG4gICAgICAgICAgICAgICAgbGV0ICRjdXIgPSAkcG9zLmRvYy5yZXNvbHZlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKEdhcEN1cnNvci52YWxpZCgkY3VyKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRjdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBbmQgdGhlbiBkb3duIGludG8gdGhlIG5leHQgbm9kZVxuICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICAgIGxldCBpbnNpZGUgPSBkaXIgPiAwID8gbmV4dC5maXJzdENoaWxkIDogbmV4dC5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQuaXNBdG9tICYmICFuZXh0LmlzVGV4dCAmJiAhTm9kZVNlbGVjdGlvbi5pc1NlbGVjdGFibGUobmV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRwb3MgPSAkcG9zLmRvYy5yZXNvbHZlKHBvcyArIG5leHQubm9kZVNpemUgKiBkaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXVzdE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHNlYXJjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dCA9IGluc2lkZTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gZGlyO1xuICAgICAgICAgICAgICAgIGxldCAkY3VyID0gJHBvcy5kb2MucmVzb2x2ZShwb3MpO1xuICAgICAgICAgICAgICAgIGlmIChHYXBDdXJzb3IudmFsaWQoJGN1cikpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkY3VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5HYXBDdXJzb3IucHJvdG90eXBlLnZpc2libGUgPSBmYWxzZTtcbkdhcEN1cnNvci5maW5kRnJvbSA9IEdhcEN1cnNvci5maW5kR2FwQ3Vyc29yRnJvbTtcblNlbGVjdGlvbi5qc29uSUQoXCJnYXBjdXJzb3JcIiwgR2FwQ3Vyc29yKTtcbmNsYXNzIEdhcEJvb2ttYXJrIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgfVxuICAgIG1hcChtYXBwaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgR2FwQm9va21hcmsobWFwcGluZy5tYXAodGhpcy5wb3MpKTtcbiAgICB9XG4gICAgcmVzb2x2ZShkb2MpIHtcbiAgICAgICAgbGV0ICRwb3MgPSBkb2MucmVzb2x2ZSh0aGlzLnBvcyk7XG4gICAgICAgIHJldHVybiBHYXBDdXJzb3IudmFsaWQoJHBvcykgPyBuZXcgR2FwQ3Vyc29yKCRwb3MpIDogU2VsZWN0aW9uLm5lYXIoJHBvcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xvc2VkQmVmb3JlKCRwb3MpIHtcbiAgICBmb3IgKGxldCBkID0gJHBvcy5kZXB0aDsgZCA+PSAwOyBkLS0pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gJHBvcy5pbmRleChkKSwgcGFyZW50ID0gJHBvcy5ub2RlKGQpO1xuICAgICAgICAvLyBBdCB0aGUgc3RhcnQgb2YgdGhpcyBwYXJlbnQsIGxvb2sgYXQgbmV4dCBvbmVcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQudHlwZS5zcGVjLmlzb2xhdGluZylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlZSBpZiB0aGUgbm9kZSBiZWZvcmUgKG9yIGl0cyBmaXJzdCBhbmNlc3RvcikgaXMgY2xvc2VkXG4gICAgICAgIGZvciAobGV0IGJlZm9yZSA9IHBhcmVudC5jaGlsZChpbmRleCAtIDEpOzsgYmVmb3JlID0gYmVmb3JlLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgaWYgKChiZWZvcmUuY2hpbGRDb3VudCA9PSAwICYmICFiZWZvcmUuaW5saW5lQ29udGVudCkgfHwgYmVmb3JlLmlzQXRvbSB8fCBiZWZvcmUudHlwZS5zcGVjLmlzb2xhdGluZylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChiZWZvcmUuaW5saW5lQ29udGVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGl0IHN0YXJ0IG9mIGRvY3VtZW50XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBjbG9zZWRBZnRlcigkcG9zKSB7XG4gICAgZm9yIChsZXQgZCA9ICRwb3MuZGVwdGg7IGQgPj0gMDsgZC0tKSB7XG4gICAgICAgIGxldCBpbmRleCA9ICRwb3MuaW5kZXhBZnRlcihkKSwgcGFyZW50ID0gJHBvcy5ub2RlKGQpO1xuICAgICAgICBpZiAoaW5kZXggPT0gcGFyZW50LmNoaWxkQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQudHlwZS5zcGVjLmlzb2xhdGluZylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGFmdGVyID0gcGFyZW50LmNoaWxkKGluZGV4KTs7IGFmdGVyID0gYWZ0ZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgaWYgKChhZnRlci5jaGlsZENvdW50ID09IDAgJiYgIWFmdGVyLmlubGluZUNvbnRlbnQpIHx8IGFmdGVyLmlzQXRvbSB8fCBhZnRlci50eXBlLnNwZWMuaXNvbGF0aW5nKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKGFmdGVyLmlubGluZUNvbnRlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbkNyZWF0ZSBhIGdhcCBjdXJzb3IgcGx1Z2luLiBXaGVuIGVuYWJsZWQsIHRoaXMgd2lsbCBjYXB0dXJlIGNsaWNrc1xubmVhciBhbmQgYXJyb3cta2V5LW1vdGlvbiBwYXN0IHBsYWNlcyB0aGF0IGRvbid0IGhhdmUgYSBub3JtYWxseVxuc2VsZWN0YWJsZSBwb3NpdGlvbiBuZWFyYnksIGFuZCBjcmVhdGUgYSBnYXAgY3Vyc29yIHNlbGVjdGlvbiBmb3JcbnRoZW0uIFRoZSBjdXJzb3IgaXMgZHJhd24gYXMgYW4gZWxlbWVudCB3aXRoIGNsYXNzXG5gUHJvc2VNaXJyb3ItZ2FwY3Vyc29yYC4gWW91IGNhbiBlaXRoZXIgaW5jbHVkZVxuYHN0eWxlL2dhcGN1cnNvci5jc3NgIGZyb20gdGhlIHBhY2thZ2UncyBkaXJlY3Rvcnkgb3IgYWRkIHlvdXIgb3duXG5zdHlsZXMgdG8gbWFrZSBpdCB2aXNpYmxlLlxuKi9cbmZ1bmN0aW9uIGdhcEN1cnNvcigpIHtcbiAgICByZXR1cm4gbmV3IFBsdWdpbih7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkZWNvcmF0aW9uczogZHJhd0dhcEN1cnNvcixcbiAgICAgICAgICAgIGNyZWF0ZVNlbGVjdGlvbkJldHdlZW4oX3ZpZXcsICRhbmNob3IsICRoZWFkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRhbmNob3IucG9zID09ICRoZWFkLnBvcyAmJiBHYXBDdXJzb3IudmFsaWQoJGhlYWQpID8gbmV3IEdhcEN1cnNvcigkaGVhZCkgOiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrLFxuICAgICAgICAgICAgaGFuZGxlS2V5RG93bixcbiAgICAgICAgICAgIGhhbmRsZURPTUV2ZW50czogeyBiZWZvcmVpbnB1dDogYmVmb3JlaW5wdXQgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5jb25zdCBoYW5kbGVLZXlEb3duID0ga2V5ZG93bkhhbmRsZXIoe1xuICAgIFwiQXJyb3dMZWZ0XCI6IGFycm93KFwiaG9yaXpcIiwgLTEpLFxuICAgIFwiQXJyb3dSaWdodFwiOiBhcnJvdyhcImhvcml6XCIsIDEpLFxuICAgIFwiQXJyb3dVcFwiOiBhcnJvdyhcInZlcnRcIiwgLTEpLFxuICAgIFwiQXJyb3dEb3duXCI6IGFycm93KFwidmVydFwiLCAxKVxufSk7XG5mdW5jdGlvbiBhcnJvdyhheGlzLCBkaXIpIHtcbiAgICBjb25zdCBkaXJTdHIgPSBheGlzID09IFwidmVydFwiID8gKGRpciA+IDAgPyBcImRvd25cIiA6IFwidXBcIikgOiAoZGlyID4gMCA/IFwicmlnaHRcIiA6IFwibGVmdFwiKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBkaXNwYXRjaCwgdmlldykge1xuICAgICAgICBsZXQgc2VsID0gc3RhdGUuc2VsZWN0aW9uO1xuICAgICAgICBsZXQgJHN0YXJ0ID0gZGlyID4gMCA/IHNlbC4kdG8gOiBzZWwuJGZyb20sIG11c3RNb3ZlID0gc2VsLmVtcHR5O1xuICAgICAgICBpZiAoc2VsIGluc3RhbmNlb2YgVGV4dFNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKCF2aWV3LmVuZE9mVGV4dGJsb2NrKGRpclN0cikgfHwgJHN0YXJ0LmRlcHRoID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbXVzdE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICRzdGFydCA9IHN0YXRlLmRvYy5yZXNvbHZlKGRpciA+IDAgPyAkc3RhcnQuYWZ0ZXIoKSA6ICRzdGFydC5iZWZvcmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0ICRmb3VuZCA9IEdhcEN1cnNvci5maW5kR2FwQ3Vyc29yRnJvbSgkc3RhcnQsIGRpciwgbXVzdE1vdmUpO1xuICAgICAgICBpZiAoISRmb3VuZClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGRpc3BhdGNoKVxuICAgICAgICAgICAgZGlzcGF0Y2goc3RhdGUudHIuc2V0U2VsZWN0aW9uKG5ldyBHYXBDdXJzb3IoJGZvdW5kKSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuZnVuY3Rpb24gaGFuZGxlQ2xpY2sodmlldywgcG9zLCBldmVudCkge1xuICAgIGlmICghdmlldyB8fCAhdmlldy5lZGl0YWJsZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCAkcG9zID0gdmlldy5zdGF0ZS5kb2MucmVzb2x2ZShwb3MpO1xuICAgIGlmICghR2FwQ3Vyc29yLnZhbGlkKCRwb3MpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGNsaWNrUG9zID0gdmlldy5wb3NBdENvb3Jkcyh7IGxlZnQ6IGV2ZW50LmNsaWVudFgsIHRvcDogZXZlbnQuY2xpZW50WSB9KTtcbiAgICBpZiAoY2xpY2tQb3MgJiYgY2xpY2tQb3MuaW5zaWRlID4gLTEgJiYgTm9kZVNlbGVjdGlvbi5pc1NlbGVjdGFibGUodmlldy5zdGF0ZS5kb2Mubm9kZUF0KGNsaWNrUG9zLmluc2lkZSkpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdmlldy5kaXNwYXRjaCh2aWV3LnN0YXRlLnRyLnNldFNlbGVjdGlvbihuZXcgR2FwQ3Vyc29yKCRwb3MpKSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vLyBUaGlzIGlzIGEgaGFjayB0aGF0LCB3aGVuIGEgY29tcG9zaXRpb24gc3RhcnRzIHdoaWxlIGEgZ2FwIGN1cnNvclxuLy8gaXMgYWN0aXZlLCBxdWlja2x5IGNyZWF0ZXMgYW4gaW5saW5lIGNvbnRleHQgZm9yIHRoZSBjb21wb3NpdGlvbiB0b1xuLy8gaGFwcGVuIGluLCB0byBhdm9pZCBpdCBiZWluZyBhYm9ydGVkIGJ5IHRoZSBET00gc2VsZWN0aW9uIGJlaW5nXG4vLyBtb3ZlZCBpbnRvIGEgdmFsaWQgcG9zaXRpb24uXG5mdW5jdGlvbiBiZWZvcmVpbnB1dCh2aWV3LCBldmVudCkge1xuICAgIGlmIChldmVudC5pbnB1dFR5cGUgIT0gXCJpbnNlcnRDb21wb3NpdGlvblRleHRcIiB8fCAhKHZpZXcuc3RhdGUuc2VsZWN0aW9uIGluc3RhbmNlb2YgR2FwQ3Vyc29yKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCB7ICRmcm9tIH0gPSB2aWV3LnN0YXRlLnNlbGVjdGlvbjtcbiAgICBsZXQgaW5zZXJ0ID0gJGZyb20ucGFyZW50LmNvbnRlbnRNYXRjaEF0KCRmcm9tLmluZGV4KCkpLmZpbmRXcmFwcGluZyh2aWV3LnN0YXRlLnNjaGVtYS5ub2Rlcy50ZXh0KTtcbiAgICBpZiAoIWluc2VydClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBmcmFnID0gRnJhZ21lbnQuZW1wdHk7XG4gICAgZm9yIChsZXQgaSA9IGluc2VydC5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICAgICAgZnJhZyA9IEZyYWdtZW50LmZyb20oaW5zZXJ0W2ldLmNyZWF0ZUFuZEZpbGwobnVsbCwgZnJhZykpO1xuICAgIGxldCB0ciA9IHZpZXcuc3RhdGUudHIucmVwbGFjZSgkZnJvbS5wb3MsICRmcm9tLnBvcywgbmV3IFNsaWNlKGZyYWcsIDAsIDApKTtcbiAgICB0ci5zZXRTZWxlY3Rpb24oVGV4dFNlbGVjdGlvbi5uZWFyKHRyLmRvYy5yZXNvbHZlKCRmcm9tLnBvcyArIDEpKSk7XG4gICAgdmlldy5kaXNwYXRjaCh0cik7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZHJhd0dhcEN1cnNvcihzdGF0ZSkge1xuICAgIGlmICghKHN0YXRlLnNlbGVjdGlvbiBpbnN0YW5jZW9mIEdhcEN1cnNvcikpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9IFwiUHJvc2VNaXJyb3ItZ2FwY3Vyc29yXCI7XG4gICAgcmV0dXJuIERlY29yYXRpb25TZXQuY3JlYXRlKHN0YXRlLmRvYywgW0RlY29yYXRpb24ud2lkZ2V0KHN0YXRlLnNlbGVjdGlvbi5oZWFkLCBub2RlLCB7IGtleTogXCJnYXBjdXJzb3JcIiB9KV0pO1xufVxuXG5leHBvcnQgeyBHYXBDdXJzb3IsIGdhcEN1cnNvciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/prosemirror-gapcursor/dist/index.js\n");

/***/ })

};
;