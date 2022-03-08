#!/usr/bin/env node

import { program } from "commander";
import download from 'download-git-repo'

const init = () => {
    download('CuberL/typed-wireshark-plugin-boilerplate#main', process.cwd(), err => {
        if (err) {
            console.log(err)
        }
        console.log('ok')
    })
}

program
    .command('init')
    .description('Init a new project')
    .action(init)

program.parse(process.argv)