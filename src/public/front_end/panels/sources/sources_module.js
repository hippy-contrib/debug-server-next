import*as RootModule from'../../core/root/root.js';RootModule.Runtime.cachedResources.set("panels/sources/breakpointEditDialog.css","/*\n * Copyright 2018 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  z-index: 30;\n  padding: 4px;\n  background-color: var(--color-background-elevation-1);\n  border-radius: 7px;\n  border: 2px solid var(--color-details-hairline);\n  width: 90%;\n  pointer-events: auto;\n}\n\n:host(.sources-edit-breakpoint-dialog) {\n  border-radius: 0;\n  z-index: 30;\n  background-color: var(--color-background-elevation-1);\n  width: 555px;\n  pointer-events: auto;\n  margin: 2px 0 2px -1px;\n  padding: 0 10px 10px 5px;\n  border: 1px solid var(--color-details-hairline);\n}\n\n:host-context(.sources-edit-breakpoint-dialog) .condition-editor {\n  background-color: var(--color-background);\n  margin-left: 3px;\n}\n\n:host-context(.sources-edit-breakpoint-dialog) .source-frame-breakpoint-toolbar {\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n/*# sourceURL=panels/sources/breakpointEditDialog.css */");RootModule.Runtime.cachedResources.set("panels/sources/callStackSidebarPane.css","/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.ignore-listed-message {\n  --override-ignore-message-background-color: #ffffc2;\n\n  text-align: center;\n  font-style: italic;\n  padding: 4px;\n  color: var(--color-text-secondary);\n  background-color: var(--override-ignore-message-background-color);\n}\n\n.-theme-with-dark-background .ignore-listed-message,\n:host-context(.-theme-with-dark-background) .ignore-listed-message {\n  --override-ignore-message-background-color: rgb(72 72 0);\n}\n\n.show-more-message > .link {\n  margin-left: 5px;\n}\n\n.ignore-listed-message > .link {\n  margin-left: 5px;\n}\n\n.ignore-listed-message > .link:focus {\n  outline-width: unset;\n}\n\n.show-more-message {\n  text-align: center;\n  font-style: italic;\n  padding: 4px;\n  border-top: 1px solid var(--color-details-hairline);\n}\n\n.call-frame-item {\n  padding: 3px 8px 3px 20px;\n  position: relative;\n  min-height: 18px;\n  line-height: 15px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.call-frame-title-text {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.async-header + .call-frame-item {\n  border-top: 0;\n}\n\n.call-frame-item:not(.async-header) {\n  border-top: 1px solid var(--color-details-hairline);\n}\n\n.call-frame-item-title,\n.call-frame-location {\n  display: flex;\n  white-space: nowrap;\n}\n\n.async-header .call-frame-item-title {\n  font-weight: bold;\n  color: var(--color-text-primary);\n  background-color: var(--color-background);\n  margin-left: -5px;\n  padding: 0 5px;\n  z-index: 1;\n}\n\n.call-frame-item:focus-visible,\n.call-frame-item.async-header:focus-visible .call-frame-item-title {\n  background-color: var(--legacy-focus-bg-color);\n}\n\n.call-frame-item:not(.async-header):hover {\n  background-color: var(--color-background-elevation-1);\n}\n\n.call-frame-location {\n  color: var(--color-text-secondary);\n  margin-left: auto;\n  padding: 0 10px 0 10px;\n}\n\n.async-header::before {\n  content: \" \";\n  width: 100%;\n  border-top: 1px solid var(--color-details-hairline);\n  margin-top: 8px;\n  position: absolute;\n  left: 0;\n}\n\n.ignore-listed-call-frame {\n  opacity: 60%;\n  font-style: italic;\n}\n\n.selected-call-frame-icon {\n  display: none;\n  position: absolute;\n  top: 5px;\n  left: 4px;\n}\n\n.call-frame-item.selected .selected-call-frame-icon {\n  display: block;\n}\n\n@media (forced-colors: active) {\n  .call-frame-item:focus-visible,\n  .call-frame-item:not(.async-header):hover {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .call-frame-item:focus-visible *,\n  .call-frame-item:not(.async-header):hover * {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=panels/sources/callStackSidebarPane.css */");RootModule.Runtime.cachedResources.set("panels/sources/debuggerPausedMessage.css","/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.paused-status {\n  --override-paused-status-background-color: hsl(50deg 100% 95%);\n  --override-paused-status-color: rgb(107 97 48);\n\n  padding: 6px;\n  border-bottom: 1px solid transparent;\n  border-top: 1px solid var(--color-details-hairline);\n  background-color: var(--override-paused-status-background-color);\n  color: var(--override-paused-status-color);\n}\n\n.-theme-with-dark-background .paused-status,\n:host-context(.-theme-with-dark-background) .paused-status {\n  --override-paused-status-background-color: hsl(46deg 98% 22%);\n  --override-paused-status-color: #ccc;\n}\n\n.paused-status.error-reason {\n  --override-error-reason-background-color: hsl(0deg 100% 97%);\n  --override-error-reason-color: rgb(107 59 59);\n\n  background-color: var(--override-error-reason-background-color);\n  color: var(--override-error-reason-color);\n}\n\n.-theme-with-dark-background .paused-status.error-reason,\n:host-context(.-theme-with-dark-background) .paused-status.error-reason {\n  --override-error-reason-background-color: rgb(79 0 0);\n  --override-error-reason-color: rgb(196 148 148);\n}\n\n.status-main {\n  font-weight: bold;\n  padding-left: 15px;\n  position: relative;\n}\n\n.status-sub:not(:empty) {\n  padding-left: 15px;\n  padding-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.paused-status.error-reason .status-sub {\n  color: var(--color-red);\n  line-height: 11px;\n  max-height: 27px;\n  user-select: text;\n}\n\n.status-icon {\n  filter: hue-rotate(190deg);\n  position: absolute;\n  left: 0;\n  top: calc(50% - 5px);\n}\n\n.paused-status.error-reason .status-icon {\n  filter: none;\n}\n\n/*# sourceURL=panels/sources/debuggerPausedMessage.css */");RootModule.Runtime.cachedResources.set("panels/sources/javaScriptBreakpointsSidebarPane.css","/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.breakpoint-entry {\n  padding: 3px 8px 3px 8px;\n  min-height: 18px;\n  line-height: 15px;\n  border-top: 1px solid var(--color-details-hairline-light);\n}\n\n.breakpoint-entry:focus {\n  background-color: var(--legacy-focus-bg-color);\n}\n\n.breakpoint-entry [is=dt-checkbox] {\n  max-width: 100%;\n  white-space: nowrap;\n}\n\n:not(.breakpoints-list-deactivated) > .breakpoint-entry:hover {\n  background-color: var(--color-background-elevation-1);\n}\n\n.breakpoint-entry > .source-text {\n  cursor: pointer;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-left: 22px;\n}\n\n.breakpoints-list-deactivated {\n  background-color: var(--color-background-elevation-1);\n  opacity: 30%;\n}\n\n.breakpoint-hit {\n  --override-breakpoint-hit-background: rgb(255 255 194);\n  --override-breakpoint-hit-border-color: rgb(107 97 48);\n\n  background-color: var(--override-breakpoint-hit-background);\n  border-right: 3px solid var(--override-breakpoint-hit-border-color);\n}\n\n:host-context(.-theme-with-dark-background) .breakpoint-hit {\n  background-color: hsl(46deg 98% 22%);\n  color: var(--color-text-primary);\n}\n\n@media (forced-colors: active) {\n  .breakpoint-entry:focus,\n  :not(.breakpoints-list-deactivated) > .breakpoint-entry:hover {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .breakpoint-entry:focus > *,\n  :not(.breakpoints-list-deactivated) > .breakpoint-entry:hover > * {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=panels/sources/javaScriptBreakpointsSidebarPane.css */");RootModule.Runtime.cachedResources.set("panels/sources/navigatorTree.css","/*\n * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.\n * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions\n * are met:\n *\n * 1.  Redistributions of source code must retain the above copyright\n *     notice, this list of conditions and the following disclaimer.\n * 2.  Redistributions in binary form must reproduce the above copyright\n *     notice, this list of conditions and the following disclaimer in the\n *     documentation and/or other materials provided with the distribution.\n * 3.  Neither the name of Apple Computer, Inc. (\"Apple\") nor the names of\n *     its contributors may be used to endorse or promote products derived\n *     from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS \"AS IS\" AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF\n * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n:host {\n  overflow-y: auto;\n}\n\n.icon,\n.icon-badge {\n  margin: -3px -5px -3px -5px;\n}\n\n.icon-stack {\n  position: relative;\n  display: inline-flex;\n}\n\n.icon-stack > [is=ui-icon]:not(:first-child) {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.tree-outline {\n  --override-folder-tree-item-color: #555;\n  --override-file-tree-item-color: hsl(0deg 0% 50%);\n  --override-sm-folder-fs-tree-fs-folder-item-color: hsl(28deg 75% 50%);\n  --override-nw-folder-tree-item-color: hsl(210deg 82% 62%);\n  --override-script-snippet-tree-item-color: hsl(48deg 70% 50%);\n  --override-stylesheet-tree-item-color: hsl(256deg 50% 50%);\n  --override-image-font-tree-item-color: hsl(109deg 33% 50%);\n}\n\n.-theme-with-dark-background .tree-outline,\n:host-context(.-theme-with-dark-background) .tree-outline {\n  --override-folder-tree-item-color: rgb(170 170 170);\n  --override-file-tree-item-color: rgb(127 127 127);\n  --override-sm-folder-fs-tree-fs-folder-item-color: rgb(223 121 32);\n  --override-nw-folder-tree-item-color: rgb(17 96 176);\n  --override-script-snippet-tree-item-color: rgb(217 181 38);\n  --override-stylesheet-tree-item-color: rgb(98 64 191);\n  --override-image-font-tree-item-color: rgb(101 170 85);\n}\n\n.navigator-file-tree-item .icon {\n  background: var(--override-file-tree-item-color);\n}\n\n.navigator-fs-tree-item:not(.has-mapped-files):not(.selected) > :not(.selection),\n.navigator-fs-folder-tree-item:not(.has-mapped-files):not(.selected) > :not(.selection) {\n  filter: grayscale(50%);\n  opacity: 50%;\n}\n\n.tree-outline li {\n  min-height: 20px;\n}\n\n.tree-outline li:hover:not(.selected) .selection {\n  display: block;\n  background-color: var(--item-hover-color);\n}\n\n.navigator-folder-tree-item .icon {\n  background-color: var(--override-folder-tree-item-color);\n}\n\n.navigator-sm-folder-tree-item .icon,\n.navigator-fs-tree-item .icon,\n.navigator-fs-folder-tree-item .icon {\n  background: var(--override-sm-folder-fs-tree-fs-folder-item-color);\n}\n\n.navigator-nw-folder-tree-item .icon {\n  background: var(--override-nw-folder-tree-item-color);\n}\n\n.navigator-sm-script-tree-item .icon,\n.navigator-script-tree-item .icon,\n.navigator-snippet-tree-item .icon {\n  background: var(--override-script-snippet-tree-item-color);\n}\n\n.navigator-sm-stylesheet-tree-item .icon,\n.navigator-stylesheet-tree-item .icon {\n  background: var(--override-stylesheet-tree-item-color);\n}\n\n.navigator-image-tree-item .icon,\n.navigator-font-tree-item .icon {\n  background: var(--override-image-font-tree-item-color);\n}\n\n.navigator-sm-folder-tree-item .tree-element-title,\n.navigator-sm-script-tree-item .tree-element-title,\n.navigator-sm-stylesheet-tree-item .tree-element-title {\n  font-style: italic;\n}\n\n@media (forced-colors: active) {\n  .tree-outline li .leading-icons [is=ui-icon].icon-mask {\n    background: ButtonText;\n  }\n\n  .tree-outline li:hover:not(.selected) .selection {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .tree-outline:not(.hide-selection-when-blurred) li.parent:hover:not(.selected)::before,\n  .tree-outline:not(.hide-selection-when-blurred) li:hover:not(.selected) [is=ui-icon].icon-mask {\n    background-color: HighlightText;\n  }\n\n  .tree-outline li:not(.selected):hover .tree-element-title {\n    forced-color-adjust: none;\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=panels/sources/navigatorTree.css */");RootModule.Runtime.cachedResources.set("panels/sources/navigatorView.css","/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.navigator-toolbar {\n  border-bottom: 1px solid var(--color-details-hairline);\n  padding-left: 8px;\n}\n\n/*# sourceURL=panels/sources/navigatorView.css */");RootModule.Runtime.cachedResources.set("panels/sources/scopeChainSidebarPane.css","/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.scope-chain-sidebar-pane-section-header {\n  flex: auto;\n}\n\n.scope-chain-sidebar-pane-section-icon {\n  float: left;\n  margin-right: 5px;\n}\n\n.scope-chain-sidebar-pane-section-subtitle {\n  float: right;\n  margin-left: 5px;\n  max-width: 55%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.scope-chain-sidebar-pane-section-title {\n  font-weight: normal;\n  word-wrap: break-word;\n  white-space: normal;\n}\n\n.scope-chain-sidebar-pane-section {\n  padding: 2px 4px;\n  flex: none;\n}\n\n/*# sourceURL=panels/sources/scopeChainSidebarPane.css */");RootModule.Runtime.cachedResources.set("panels/sources/sourcesPanel.css","/*\n * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.\n * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions\n * are met:\n *\n * 1.  Redistributions of source code must retain the above copyright\n *     notice, this list of conditions and the following disclaimer.\n * 2.  Redistributions in binary form must reproduce the above copyright\n *     notice, this list of conditions and the following disclaimer in the\n *     documentation and/or other materials provided with the distribution.\n * 3.  Neither the name of Apple Computer, Inc. (\"Apple\") nor the names of\n *     its contributors may be used to endorse or promote products derived\n *     from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS \"AS IS\" AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF\n * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n.scripts-debug-toolbar {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background-color: var(--color-background-elevation-1);\n  border-bottom: 1px solid var(--color-details-hairline);\n  overflow: hidden;\n  z-index: 1;\n}\n\n.scripts-debug-toolbar-drawer {\n  flex: 0 0 52px;\n  transition: margin-top 0.1s ease-in-out;\n  margin-top: -26px;\n  padding-top: 25px;\n  background-color: var(--color-background);\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.scripts-debug-toolbar-drawer.expanded {\n  margin-top: 0;\n}\n\n.scripts-debug-toolbar-drawer > [is=dt-checkbox] {\n  display: none;\n  padding-left: 3px;\n  height: 28px;\n}\n\n.scripts-debug-toolbar-drawer.expanded > [is=dt-checkbox] {\n  display: flex;\n}\n\n.cursor-auto {\n  cursor: auto;\n}\n\n.navigator-tabbed-pane {\n  background-color: var(--color-background-elevation-1);\n}\n\n/*# sourceURL=panels/sources/sourcesPanel.css */");RootModule.Runtime.cachedResources.set("panels/sources/sourcesView.css","/*\n * Copyright (C) 2013 Google Inc. All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are\n * met:\n *\n *     * Redistributions of source code must retain the above copyright\n * notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above\n * copyright notice, this list of conditions and the following disclaimer\n * in the documentation and/or other materials provided with the\n * distribution.\n *     * Neither the name of Google Inc. nor the names of its\n * contributors may be used to endorse or promote products derived from\n * this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n * \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#sources-panel-sources-view {\n  --override-highlight-animation-10pc-background-color: rgb(158 54 153);\n  --override-highlight-animation-10pc-foreground-color: rgb(255 255 255);\n\n  flex: auto;\n  position: relative;\n}\n\n#sources-panel-sources-view .sources-toolbar {\n  display: flex;\n  flex: 0 0 27px;\n  background-color: var(--color-background-elevation-1);\n  border-top: var(--legacy-divider-border);\n  overflow: hidden;\n  z-index: 0;\n}\n\n.sources-toolbar .toolbar {\n  cursor: default;\n}\n\n.source-frame-debugger-script {\n  --override-debugger-background-tint: rgb(255 255 194 / 50%);\n\n  background-color: var(--override-debugger-background-tint);\n}\n\n.-theme-with-dark-background .source-frame-debugger-script {\n  --override-debugger-background-tint: rgb(61 61 0 / 50%);\n}\n\n@keyframes source-frame-value-update-highlight-animation {\n  from {\n    background-color: inherit;\n    color: inherit;\n  }\n\n  10% {\n    background-color: var(--override-highlight-animation-10pc-background-color);\n    color: var(--override-highlight-animation-10pc-foreground-color);\n  }\n\n  to {\n    background-color: inherit;\n    color: inherit;\n  }\n}\n\n.source-frame-value-update-highlight {\n  animation: source-frame-value-update-highlight-animation 0.8s 1 cubic-bezier(0, 0, 0.2, 1);\n  border-radius: 2px;\n}\n\n.diff-entry-insert {\n  --override-diff-line-number-background-color: hsl(144deg 55% 49% / 20%);\n}\n\n.-theme-with-dark-background .diff-entry-insert,\n:host-context(.-theme-with-dark-background) .diff-entry-insert {\n  --override-diff-line-number-background-color: rgb(61 199 116 / 20%);\n}\n\n.diff-entry-insert .diff-marker {\n  border-left: 4px solid var(--color-accent-green);\n}\n\n.diff-entry-insert .CodeMirror-gutter-background {\n  background-color: var(--override-diff-line-number-background-color);\n}\n\n.diff-entry-modify {\n  --override-diff-line-number-background-color: rgb(186 104 200 / 20%);\n  --override-diff-line-number-border-color: #9c27b0;\n}\n\n.-theme-with-dark-background .diff-entry-modify,\n:host-context(.-theme-with-dark-background) .diff-entry-modify {\n  --override-diff-line-number-background-color: rgb(137 55 151 / 20%);\n  --override-diff-line-number-border-color: rgb(196 79 216);\n}\n\n.diff-entry-modify .diff-marker {\n  border-left: 4px solid var(--override-diff-line-number-border-color);\n}\n\n.diff-entry-modify .CodeMirror-gutter-background {\n  background-color: var(--override-diff-line-number-background-color);\n}\n\n.diff-entry-delete {\n  --override-diff-deletion-color: #d32f2f;\n}\n\n.-theme-with-dark-background .diff-entry-delete,\n:host-context(.-theme-with-dark-background) .diff-entry-delete {\n  --override-diff-deletion-color: rgb(208 44 44);\n}\n\n.diff-entry-delete .diff-marker {\n  width: 0;\n  height: 0;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  border-left: 6px solid var(--override-diff-deletion-color);\n  position: relative;\n  top: 6px;\n  cursor: pointer;\n  left: 0;\n}\n\n.diff-entry-delete .CodeMirror-gutter-background {\n  border-bottom: 2px solid var(--override-diff-deletion-color);\n}\n\n.CodeMirror-gutter-diff {\n  width: 4px;\n}\n\n.highlight-line-modification {\n  --override-modification-background-fadeout-from: rgb(158 54 153 / 50%);\n  --override-modification-background-fadeout-90pc: rgb(158 54 153 / 0%);\n  --override-modification-foreground-fadeout-from: #fff;\n\n  animation: source-line-modification-background-fadeout 0.4s 0s;\n  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.highlight-line-modification span {\n  animation: source-line-modification-foreground-fadeout 0.4s 0s;\n  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n@keyframes source-line-modification-background-fadeout {\n  from {\n    background-color: var(--override-modification-background-fadeout-from);\n  }\n\n  50% {\n    /* Purposefully uses the `from` color to delay the animation from 0-50% */\n    background-color: var(--override-modification-background-fadeout-from);\n  }\n\n  90% {\n    background-color: var(--override-modification-background-fadeout-90pc);\n  }\n  to { background-color: transparent; }\n}\n\n@keyframes source-line-modification-foreground-fadeout {\n  from {\n    color: var(--override-modification-foreground-fadeout-from);\n  }\n\n  50% {\n    /* Purposefully uses the `from` color to delay the animation from 0-50% */\n    color: var(--override-modification-foreground-fadeout-from);\n  }\n  90% { color: initial; }\n  to { color: initial; }\n}\n\n/*# sourceURL=panels/sources/sourcesView.css */");RootModule.Runtime.cachedResources.set("panels/sources/threadsSidebarPane.css","/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.thread-item {\n  padding: 3px 8px 3px 20px;\n  position: relative;\n  min-height: 18px;\n  line-height: 15px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.thread-item + .thread-item {\n  border-top: 1px solid var(--color-details-hairline-light);\n}\n\n.thread-item:hover {\n  background-color: var(--color-background-elevation-1);\n}\n\n.thread-item:focus-visible {\n  background-color: var(--legacy-focus-bg-color);\n}\n\n.thread-item-title,\n.thread-item-paused-state {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.thread-item-paused-state {\n  color: var(--color-text-disabled);\n  margin-left: auto;\n  padding: 0 10px 0 10px;\n}\n\n.selected-thread-icon {\n  display: none;\n  position: absolute;\n  top: 5px;\n  left: 4px;\n}\n\n.thread-item.selected .selected-thread-icon {\n  display: block;\n}\n\n@media (forced-colors: active) {\n  .thread-item:hover,\n  .thread-item:focus-visible {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .thread-item:hover > div,\n  .thread-item:focus-visible > div {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=panels/sources/threadsSidebarPane.css */");RootModule.Runtime.cachedResources.set("panels/sources/watchExpressionsSidebarPane.css","/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.watch-expression-delete-button {\n  position: absolute;\n  top: 5px;\n  right: 6px;\n  cursor: pointer;\n  opacity: 0%;\n  min-width: 20px;\n}\n\n.watch-expression-header:hover .watch-expression-delete-button {\n  opacity: 50%;\n}\n\n.watch-expression-header:hover .watch-expression-delete-button:hover {\n  opacity: 100%;\n}\n\n.watch-expressions {\n  overflow-x: hidden;\n  min-height: 26px;\n}\n\n.watch-expression-title {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: 20px;\n}\n\n.watch-expression-title:hover {\n  padding-right: 26px;\n}\n\n.watch-expression-object-header .watch-expression-title {\n  margin-left: 1px;\n}\n\n.watch-expression {\n  position: relative;\n  flex: auto;\n  min-height: 20px;\n}\n\n.watch-expressions .name {\n  --override-watch-expression-name-color: rgb(136 19 145);\n\n  color: var(--override-watch-expression-name-color);\n  flex: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.-theme-with-dark-background .watch-expressions .name,\n:host-context(.-theme-with-dark-background) .watch-expressions .name {\n  --override-watch-expression-name-color: rgb(227 110 236);\n}\n\n.watch-expression-error {\n  color: var(--color-red);\n}\n\n.watch-expressions-separator {\n  flex: none;\n}\n\n.watch-expressions .value {\n  white-space: nowrap;\n  display: inline;\n}\n\n.watch-expression .text-prompt {\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap;\n  padding-left: 4px;\n  min-height: 18px;\n  line-height: 18px;\n  user-select: text;\n}\n\n.watch-expression-text-prompt-proxy {\n  margin: 2px 12px 2px -4px;\n  padding-bottom: 3px;\n}\n\n.watch-expression-header {\n  flex: auto;\n  margin-left: -16px;\n  padding-left: 15px;\n}\n\nli.watch-expression-tree-item {\n  padding-left: 4px;\n}\n\nli.watch-expression-tree-item:hover {\n  background-color: var(--color-background-elevation-2);\n}\n\n.watch-expression-header:focus-visible {\n  background: var(--legacy-focus-bg-color);\n}\n\nli.watch-expression-editing::before {\n  background-color: transparent;\n}\n\n@media (forced-colors: active) {\n  .watch-expression-header:hover .watch-expression-delete-button,\n  .watch-expressions .dimmed {\n    opacity: 100%;\n  }\n\n  li.watch-expression-tree-item * {\n    forced-color-adjust: none;\n    color: ButtonText;\n  }\n\n  li.watch-expression-tree-item:hover {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  li.watch-expression-tree-item:hover * {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=panels/sources/watchExpressionsSidebarPane.css */");RootModule.Runtime.cachedResources.set("panels/sources/dialog.css","/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  padding: 10px;\n}\n\n.widget {\n  align-items: center;\n}\n\nlabel {\n  white-space: nowrap;\n}\n\ninput[type=text].add-source-map {\n  box-shadow: 0 0 0 1px var(--box-shadow-outline-color);\n  font-size: inherit;\n  margin: 0 8px 0 5px;\n}\n\n/*# sourceURL=panels/sources/dialog.css */");