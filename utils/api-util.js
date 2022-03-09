class ApiUtil {
    ApiCodeSuccess = [0, 'Api请求成功'];
    ApiCodeParamLack = [1001, '缺少参数'];
    ApiCodeParamError = [1002, '参数错误'];
    ApiCodeSignError = [1003, 'Sign参数验证失败'];
    ApiCodeError = [1004, '服务器内部出错'];
    ApiCodeRestrict = [1005, '操作频繁'];
    ApiCode404 = [1006, '资源不存在'];
    ApiCodeVersionLow = [1007, '客户端版本过低，请升级后重试'];
    ApiCodeIdentityError = [2001, "用户身份验证失败"];
    ApiCodeAuthError = [2002, 'Auth参数验证失败'];
    ApiCodeSessionError = [2003, '用户Session失效'];
    ApiCodeAssetsError = [2004, '用户资产不足'];
    ApiCodeAccountError = [2005, '用户账户异常'];
    ApiCodeGoodsError = [3001, '商品异常'];
    ApiCodePayError = [3002, '支付错误'];
    ApiCodeRedPacketError = [4001, '红包异常'];
    ApiCodeTwitterGetAuthUrlError = [5001, '获取授权连接失败'];
    ApiCodeTwitterUserAuthError = [5002, '授权失败'];
    ApiCodeTwitterUserInfoError = [5003, '获取用户信息失败'];
    ApiCodeTwitterUserDuplicateError = [5004, '用户已存在'];
    ApiCodeTwitterUserDelError = [5005, '用户不存在'];
    ApiCodeTwitterListenExceedError = [6001, '监听用户超出上限'];
    ApiCodeTwitterListenAddError = [6002, '添加监听失败'];
    ApiCodeTwitterUserNotFound = [6003, '没有已经授权的推特'];
    /**
     * 请求成功返回
     */
    success(data = [], message = '') {
        return {
            'code': this.ApiCodeSuccess[0],
            'message': message ? message : this.ApiCodeSuccess[1],
            'data': data,
            'time': parseInt(+new Date() / 1000)
        }
    }

    /**
     * 请求失败返回
     */
    fail(codeType, message = '', data = []) {
        return {
            'code': codeType[0],
            'message': message ? message : codeType[1],
            'data': data,
            'time': parseInt(+new Date() / 1000)
        }
    }
}
module.exports = new ApiUtil();