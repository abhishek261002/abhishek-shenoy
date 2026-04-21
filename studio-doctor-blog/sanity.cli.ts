import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '0piuyzak',
    dataset: 'production'
  },
  deployment: {
    /* The ID provided by Sanity to link your local code to the deployed URL */
    appId: 'ndvzxpqa3ye7vgqpgra0h3sm',
    
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})