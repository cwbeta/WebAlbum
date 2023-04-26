/** @class
*   命名空间
*   @abstract
*/

var CWBeta = window.CWBeta || {};


let CWBeta.Networking = class
{
    static SendXmlRequest(urls, method, param) {
    // 获取请求
    const http = new XMLHttpRequest();
    const url = "${pageContext.request.contextPath}" + urls
    // 遍历参数
    let data = '';
    let num = 1;
    // 遍历对象进行处理
    if (param != null) 
    {
        for (let key in param) 
        {
            // 数据为多个时拼接
            if (num !== 1) 
            {
                data = data + '&' + key + "=" + param[key];
            } 
            else 
            {
                data = key + "=" + param[key];
                num++;
            }
        }
    }
    // Get
    if (method === 'get' || method === 'GET') 
    {
        data = '?' + data;
        http.open(method, url + data, false);
        http.send(null);
        return JSON.parse(http.responseText);
    }
    // Post
    else
    {
        http.open(method, url, false);
        // 如果是post方法则增加请求头
        if (method === 'post' || method === 'POST') http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // 发送请求
        http.send(data);
        return JSON.parse(http.responseText);
    }
}
