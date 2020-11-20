import config from './rollup.config'
import { terser } from 'rollup-plugin-terser'


config.output.sourcemap = false;

config.plugins = [
    ...config.plugins,
    terser(), //压缩
]

export default {
    ...config
}