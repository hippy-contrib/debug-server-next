import*as RootModule from'../../core/root/root.js';RootModule.Runtime.cachedResources.set("panels/performance_monitor/performanceMonitor.css","/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.perfmon-pane {\n  overflow: hidden;\n}\n\n.perfmon-pane.suspended {\n  opacity: 40%;\n  pointer-events: none;\n}\n\n.perfmon-pane .perfmon-chart-suspend-overlay {\n  display: none;\n  font-size: 26px;\n  align-items: center;\n  justify-content: center;\n}\n\n.perfmon-pane.suspended .perfmon-chart-suspend-overlay {\n  display: flex;\n}\n\n.perfmon-control-pane {\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.perfmon-chart-container {\n  display: flex;\n  flex: 1 1;\n  border-left: 1px solid var(--color-details-hairline);\n  overflow-y: auto;\n}\n\n.perfmon-chart-container canvas {\n  width: 100%;\n}\n\n.perfmon-indicator {\n  padding: 6px 12px;\n  margin: -1px 0;\n  display: flex;\n  flex-shrink: 0;\n  width: 210px;\n}\n\n.perfmon-indicator:hover {\n  background-color: var(--color-background-elevation-0);\n}\n\n.perfmon-indicator:focus-visible {\n  background-color: var(--color-background-elevation-1);\n}\n\n.perfmon-indicator-swatch {\n  margin-right: 6px;\n}\n\n.perfmon-indicator:not(.active) .perfmon-indicator-swatch {\n  background-color: var(--color-background-elevation-2) !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.perfmon-indicator-title {\n  flex: 0 0 115px;\n}\n\n.perfmon-indicator:not(.active) .perfmon-indicator-title {\n  color: var(--color-text-secondary);\n}\n\n.perfmon-indicator-value {\n  flex: 0 0 55px;\n  text-align: right;\n  overflow: visible;\n}\n\n.perfmon-indicator:not(.active) .perfmon-indicator-value {\n  opacity: 0%;\n}\n\n/*# sourceURL=panels/performance_monitor/performanceMonitor.css */");