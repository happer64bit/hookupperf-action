import core from '@actions/core';
import github from '@actions/github';

interface Config {
    moduleConfig: {
        map: string;
    };
}

let config: Config;

try {
    config = require('hookuppref.config').default as Config;
} catch (error) {
    core.setFailed(`Failed to load config: ${(error as Error).message}`);
    process.exit(1);
}

async function run(): Promise<void> {
    try {
        const url: string = config.moduleConfig.map;
        core.info(`URL from config: ${url}`);
    } catch (error) {
        core.setFailed(`Action failed with error: ${(error as Error).message}`);
    }
}

run();