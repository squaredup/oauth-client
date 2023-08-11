const _ = require('lodash');
const v = 3;

const jsonSchema = {
    token: {
        type: 'header', // or 'query' or 'body'
        path: 'Authorization',
        prefix: 'Bearer ',
        isJwt: true
    },
    introspection: {
        url: 'https://authr.server.com/token/introspection',
        method: 'post', // or 'get
        arg: {
            type: 'header', // or 'query' or 'body'
            path: 'Authorization'
        }
    }
};

module.exports = async function (context, req) {
    const obj = {
        msg: 'from GIT'
    };
    context.log(`JavaScript ${_.get(obj, 'msg')} HTTP trigger function processed a request (v${v}).`);

    const name = (req.query.name ?? req.body?.name);
    const responseMessage = name
        ? `Hello, ${name}. This Javascript ${_.get(obj, 'msg')} HTTP triggered function executed successfully (v${v}).`
        : `This Javascript ${_.get(obj, 'msg')} HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response (v${v}).`;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}