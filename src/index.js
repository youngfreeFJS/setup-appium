const { execSync } = require('child_process')
const { setFailed } = require('@actions/core')
try {
  const installCommand = `npm install -g appium@next`
  const installReturn = execSync(installCommand, { shell: true, stdio: 'pipe' })
  if (installReturn.status !== 0) {
    setFailed(`install appium failed. original error: ${installReturn.stderr}`)
    return
  }
} catch (error) {
  setFailed(error.message)
}
