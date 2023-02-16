const { execSync } = require('child_process')
const { setFailed, info } = require('@actions/core')
try {
  const installCommand = `npm install -g appium@next`
  const installReturn = execSync(installCommand, { shell: true, stdio: 'pipe' })
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
} catch (error) {
  setFailed(error.message)
}
