const request = require('request');

module.exports = {
     async requestAsync(url, method = "POST", params, isJson = false, header = null) {
         try{
            let options = {
                url: url,
                method: method,
                // proxy: "http://localhost:9998",
                json: isJson,
            }
    
            if (!isJson) {
                options["header"] = header == null ? {
                    "Content-type": "multipart/form-data;charset=utf-8"
                } : header
                options["formData"] = params
            } else {
                options["header"] = header == null ? {
                    "Content-type": "application/json;charset=utf-8"
                } : header
                options["body"] = params
            }
       return  await new Promise(function (resolve, reject) {
                const req = request(options)
                req.on('response', function (res) {
                    var chunks = [];
                    res.on('data', function (chunk) {
                        chunks.push(chunk);
                    });
                    res.on('end', function () {
                        try{
                            var buffer = Buffer.concat(chunks);
                            var encoding = res.headers['content-encoding'];
                            if (encoding == 'gzip') {
                                zlib.gunzip(buffer, function (err, decoded) {
                                    resolve(decoded.toString());
                                });
                            } else {
                                resolve(JSON.parse(buffer.toString()));
                            }
                        }catch(e){
                            console.error(`problem with response deal: ${e.message}`);
                            reject(null)
                        }
                    });
                });
                req.on('error', (e) => {
                    console.error(`problem with request: ${e.message}`);
                    reject(null)

                });
            })
         }catch(badRes) {
            console.error(`problem with requestAsync function`);
            return badRes;
         }
        
    }

};