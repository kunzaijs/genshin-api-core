interface CommandOptions {
    cmd: string
    desc: string
    param: string
    level: number
    alias: string
    setup(cmdx, config): string | void
}