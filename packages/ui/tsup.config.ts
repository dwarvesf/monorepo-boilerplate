import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  external: ['react'],
  /**
   * Custom script to import react by default
   * Without this, we need to specifically import React in the exported components
   * E.g.: import * as React from 'react'
   * Otherwise the components will not be consumable (React will be undefined)
   * This is due to the JSX React Import feature we are using (JSX without having to import React)
   */
  inject: ['./src/react-import.ts'],
})
