// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.data-grid {
  border: none;
}

.data-grid td .url-outer {
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
}

.data-grid td .url-outer .filter-highlight {
  font-weight: bold;
}

.data-grid td .url-prefix {
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.data-grid td .url-suffix {
  flex: none;
}

.data-grid td .bar {
  display: inline-block;
  height: 8px;
  border: 1px solid transparent;
}

.data-grid .selected td .bar {
  border-top: 1px var(--color-background) solid;
  border-bottom: 1px var(--color-background) solid;
}

.data-grid .selected td .bar:last-child {
  border-right: 1px var(--color-background) solid;
}

.data-grid .selected td .bar:first-child {
  border-left: 1px var(--color-background) solid;
}

.data-grid td .bar-unused-size {
  background-color: var(--color-red);
}

.data-grid td .bar-used-size {
  background-color: var(--color-green);
}

.data-grid td .percent-value {
  color: var(--color-text-secondary);
  width: 6ex;
  display: inline-block;
}

.data-grid:focus tr.selected span.percent-value {
  color: var(--color-text-secondary-selected);
}

@media (forced-colors: active) {
  .data-grid td .bar-container {
    forced-color-adjust: none;
  }

  .data-grid td .bar-unused-size {
    background-color: ButtonText;
  }

  .data-grid td .bar-used-size {
    background-color: ButtonFace;
  }

  .data-grid td .bar {
    border-color: ButtonText;
  }

  .data-grid .selected td .bar {
    border-top-color: HighlightText;
    border-bottom-color: HighlightText;
  }

  .data-grid .selected td .bar:last-child {
    border-right-color: HighlightText;
  }

  .data-grid .selected td .bar:first-child {
    border-left-color: HighlightText;
  }

  .data-grid:focus tr.selected span.percent-value {
    color: HighlightText;
  }
}

/*# sourceURL=coverageListView.css */
`);
export default styles;
