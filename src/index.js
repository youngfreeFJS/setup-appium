const { spawnSync } = require('child_process')
const { setFailed, info } = require('@actions/core')
try {
  const installCommand = `npm install -g appium@next`
  const installReturn = spawnSync(installCommand, { shell: true, stdio: 'pipe' })
  info(`
      pid: ${installReturn.pid}
      output: ${installReturn.output}
      stdout: ${installReturn.stdout}
      stderr: ${installReturn.stderr}
      status: ${installReturn.status}
      signal: ${installReturn.signal}
      error: ${installReturn.error}
    `)
  if (installReturn.status !== 0) {
    setFailed(`install appium failed. original error: ${installReturn.pid}`)
    return
  }
  const whichAppiumReturn = spawnSync('which appium', { shell: true, stdio: 'pipe' })
  info(`
      pid: ${whichAppiumReturn.pid}
      output: ${whichAppiumReturn.output}
      stdout: ${whichAppiumReturn.stdout}
      stderr: ${whichAppiumReturn.stderr}
      status: ${whichAppiumReturn.status}
      signal: ${whichAppiumReturn.signal}
      error: ${whichAppiumReturn.error}
    `)
} catch (error) {
  setFailed(error.message)
}
