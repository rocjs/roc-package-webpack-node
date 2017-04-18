import {
    isArray,
    isPath,
    isBoolean,
    oneOf,
    required,
} from 'roc/validators';

function v8InspectorIsSupported(value, info) {
    const booleanCheck = isBoolean(value, info);
    if (booleanCheck !== true) {
        return booleanCheck;
    }

    const nodeMajorVersion = process.version.substr(1, 1);
    if (value === true && nodeMajorVersion < 6) {
        return 'The V8 inspector is only supported on Node.js v6 and above!';
    }

    return true;
}

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
                    validator: v8InspectorIsSupported,
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
