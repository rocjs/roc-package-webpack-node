import {
    isArray,
    isPath,
    isBoolean,
    oneOf,
    required,
} from 'roc/validators';

export default {
    settings: {
        dev: {
            watch: {
                description: 'Files/folders that should trigger a restart of the server.',
                validator: required(oneOf(isPath, isArray(isPath))),
            },
            inspect: {
                enable: {
                    description: 'Enable V8 inspector',
                    validator: isBoolean,
                },
                'debug-brk': {
                    description: 'Break on first line when V8 inspector is enabled',
                    validator: isBoolean,
                },
            },
            build: {
                targets: {
                    override: 'roc-package-webpack-dev',
                    validator: required(isArray(/^node$/i)),
                },
            },
        },
    },
};
