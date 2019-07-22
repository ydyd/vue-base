import Mock from 'mockjs';
const files = require.context('./modules', false, /.js$/);
files.keys().forEach(key => {
    files(key).default.reduce((total, value) => {
        Mock.mock(value.url, value.type||'post', value.template);
    })
})