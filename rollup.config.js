import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import json from '@rollup/plugin-json'
// import babel from 'rollup-plugin-babel';


export default {
  input:'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
  },
  plugins: [
    // babel(),
    svelte({
      include: 'src/**/*.svelte'
    }),
    postcss({
      use: ['less']
    }),
    resolve({
      browser: true,
      extensions: ['.svelte', 'less']
    }),
    json(),
    commonjs(),
  ]
}