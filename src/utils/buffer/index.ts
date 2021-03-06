/*
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * encode HMR data to binary
 *
 * HMR binary data are consist with two section: emit JSON and emit files:
 *
 * | field                | byte                 | type     |     // emit JSON:
 * |----------------------|----------------------|----------|
 * | lenOfContentLength   | 1                    | UInt8    |
 * | JSONContentLength    | lenOfContentLength   | UInt8    |
 * | JSONContent          | JSONContentLength    | Buffer   |
 * | fileNum              | 2                    | UInt16BE |     // emit files
 * | lenOfFname_i         | 1                    | UInt8    |
 * | fileName_i           | lenOfFname_i         | String   |
 * | lenOfContentLength_i | 1                    | UInt8    |
 * | fileContentLength_i  | lenOfContentLength_i | UInt8    |
 * | fileContent_i        | fileContentLength_i  | Buffer   |
 */
export { encodeHMRData } from './encode';
export { decodeHMRData } from './decode';
