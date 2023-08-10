const _ = require('lodash');

module.exports = async function (context, req) {
    const obj = {
        msg: 'from GIT'
    };
    context.log(`JavaScript ${_.get(obj, 'msg')} HTTP trigger function processed a request.`);

    const name = (req.query.name ?? req.body?.name);
    const responseMessage = name
        ? `Hello, ${name}. This Javascript ${_.get(obj, 'msg')} HTTP triggered function executed successfully.`
        : `This Javascript ${_.get(obj, 'msg')} HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.`;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}