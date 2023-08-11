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
    },
    behaviour: {
        mode: 'perToken', // or 'fixed'
    }
};

module.exports = async function (context, req) {
    const obj = {
        msg: 'from GIT'
    };
    context.log(`JavaScript ${_.get(obj, 'msg')} HTTP trigger function processed a request (v${v}).`);






    // req.on('data', (chunk) => {
    //     body.push(chunk);
    //   }).on('end', () => {
    //     // on end of data, perform necessary action
    //     body = Buffer.concat(body).toString();
    //     response.write(request.body.user);
    //     response.end();
    //   }




    const report = {
        req: JSON.stringify(req, null, 4),
        headers: {},
        body: req.body,
        query: {}
    };

    for (const key of Object.keys(req.headers).sort()) {
        report.headers[key] = req.headers[key];
    }

    for (const key of Object.keys(req.query).sort()) {
        report.query[key] = req.query[key];
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(report, null, 4)
    };
}