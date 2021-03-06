// @deno-types="https://unpkg.com/@types/mocha@5.2.7/index.d.ts"
import "https://unpkg.com/mocha@7.0.0/mocha.js";
mocha.setup({ ui: 'bdd', reporter: 'spec' });

export function runIfMain(meta: ImportMeta): void {
  mocha.run();
}
