export default {
    settings: {
        dev: {
            watch: [
                'roc.config.js',
            ],
            inspect: false,
            'debug-brk': false,
        },

        build: {
            targets: ['node'],
        },
    },
};
