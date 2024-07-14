// Copyright 2011-2015 by Vitaly Puzrin. All rights reserved. MIT license.
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

/**
 * {@linkcode parse} and {@linkcode stringify} for handling
 * {@link https://yaml.org/ | YAML} encoded data.
 *
 * Ported from
 * {@link https://github.com/nodeca/js-yaml/commit/665aadda42349dcae869f12040d9b10ef18d12da | js-yaml v3.13.1}.
 *
 * Use {@linkcode parseAll} for parsing multiple documents in a single YAML
 * string.
 *
 * ```ts
 * import { parse, stringify } from "@std/yaml";
 * import { assertEquals } from "@std/assert";
 *
 * const data = parse(`
 * foo: bar
 * baz:
 *   - qux
 *   - quux
 * `);
 * assertEquals(data, { foo: "bar", baz: [ "qux", "quux" ] });
 *
 * const yaml = stringify({ foo: "bar", baz: ["qux", "quux"] });
 * assertEquals(yaml, `foo: bar
 * baz:
 *   - qux
 *   - quux
 * `);
 * ```
 *
 * ## Limitations
 * - `binary` type is currently not stable.
 *
 * @module
 */

export * from "./parse.ts";
export * from "./stringify.ts";
