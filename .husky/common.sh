#!/bin/sh
###
 # @Author: Do not edit
 # @Date: 2022-02-08 11:40:06
 # @LastEditors: Liuyu
 # @LastEditTime: 2022-02-08 11:40:06
 # @FilePath: \vue3-ts-init\.husky\common.sh
###
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
