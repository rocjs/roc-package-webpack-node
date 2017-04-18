export default {
    settings: {
        dev: {
            watch: [
                'roc.config.js',
            ],
            inspect: {
                enable: false,
                'debug-brk': false,
            },
        },
        build: {
            targets: ['node'],
        },
    },
};
