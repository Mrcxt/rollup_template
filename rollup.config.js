import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'


export default {
    input: 'src/main.js',
    output: {
        file: "dist/bundle.cjs.js",
        format: 'cjs', //  五种输出格式：amd /  es6 / iife / umd / cjs
        // name:"bundle",//当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
        sourcemap: true //生成bundle.map.js文件，方便调试
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: "**/node_modules/**"
        }),
        postcss(),
        // terser(), //压缩
        livereload(), //热更新
        serve({
            open: true,
            contentBase: ""
        })
    ],
    external: [], //告诉rollup不要将此lodash打包，而作为外部依赖
    global: {}, //告诉rollup 全局变量$即是jquery

}