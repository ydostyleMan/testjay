'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1524115158268_5163';

    // add your config here
    config.middleware = [];
    // csrf 关闭
    config.security = {
        csrf: {
            enable: false,
        },
    };
    return config;
};
