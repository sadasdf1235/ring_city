import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")
    }
  },
  // server: {
  // 	https: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://gmall-h5-api.atguigu.cn',
  //       changeOrigin: true, 
  //       ws: true,  
  //       rewrite: (path) => path.replace(/^\/api/, "")
  //     }
  //    },
  // },
})
