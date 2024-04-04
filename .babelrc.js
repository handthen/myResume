module.exports = {
    presets: [["@babel/preset-env", {
        "useBuiltIns": "usage",
        "corejs": 3,
        "modules": false
    }], "@babel/preset-react", '@babel/preset-typescript'
    ],
    plugins: [
        ["import", {
            "libraryName": "antd",
            'css': true,
            "style": "css" // 指定按需加载 CSS 样式，默认为 "css"，也可以设置为 "less" 或 "true"
        }],
        ["@babel/plugin-proposal-decorators", { "legacy": true }], //解析装饰器
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-transform-runtime"],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],

    ]
};