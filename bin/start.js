const program = require('commander')
const shell = require('shelljs')
const fs = require('fs')

program
  .requiredOption('--lesson <lesson>')
  .description('Start slides of lesson')
  .action(() => {
    const params = program.opts()

    if (!fs.existsSync(`src/lessons/lesson${params?.lesson}.mdx`)) {
      shell.echo(`Lesson doesn't exists`)
      shell.exit(1)
    }

    if (
      shell.exec(`yarn mdx-deck src/lessons/lesson${params?.lesson}.mdx`)
        .code !== 0
    ) {
      shell.echo('Build lesson failed, tip: do you have yarn installed?')
      shell.exit(1)
    }
  })

program.parse(process.argv)
