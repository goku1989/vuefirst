const constUrl = {
    /* 开发环境 */
    authorityUrl : 'http://localhost:20030/',
    goodsUrl : 'http://localhost:25000/',




    /* 生产环境 */
    // authorityUrl : 'http://192.168.50.110:9001/db-authority/',
    // goodsUrl : 'http://101.200.171.172:20000/dbmall-goods/',

    getCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];

            if (c.indexOf(name) == 0) {
                // console.log(c.substring(name.length, c.length));
                return c.substring(name.length, c.length);
            }
            
        }
        return "";
    },
    
    setCookie: function(name, value) {
        var Days = 365;
        var exp = new Date(); 
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        var cookieContent = name + "="+ encodeURIComponent (value) + ";path=/;";
        if (this.cookieDomain != null && this.cookieDomain != undefined && this.cookieDomain != '') {
            cookieContent += "domain=" + this.cookieDomain;
        }
        document.cookie = cookieContent + cookieContent;
        // document.cookie = name + "="+ encodeURIComponent (value) + ";path=/;domain=" + cookieDomain;//expires=" + exp.toGMTString();
    },
}

export {
    constUrl
}
