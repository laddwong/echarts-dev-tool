import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import json from '@rollup/plugin-json'
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
// import babel from 'rollup-plugin-babel';


export default {
  input:'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
  },
  plugins: [
    // babel(),
    serve({
      contentBase: ['dist', 'test'],
      open: true,
      openPage: '/index.html'
    }),
    livereload('dist'),
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