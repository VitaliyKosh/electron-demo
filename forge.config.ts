import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const config: ForgeConfig = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [new MakerSquirrel({}), new MakerZIP({}, ['darwin']), new MakerRpm({}), new MakerDeb({})],
  plugins: [
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './src/windows/mainWindow/index.html',
            js: './src/windows/mainWindow/renderer.ts',
            name: 'main_window',
            preload: {
              js: './src/windows/mainWindow/preload.ts',
            },
          }, {
            html: "./src/windows/secondWindow/index.html",
            js: "./src/windows/secondWindow/renderer.ts",
            name: "second_window",
            preload: {
              js: "./src/windows/secondWindow/preload.ts"
            }
          }
        ],
      },
    }),
  ],
};

export default config;
