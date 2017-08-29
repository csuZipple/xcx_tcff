interface type{
    招聘求职:1,
    拼顺风车:2,
    二手交易:3,
    房屋出兑:4,
    车辆买卖:5,
    其他信息:6,
    附近商家:7
}
//url:  https://ice97.cn/xcx/models/
//新建一个model：   url:   https://ice97.cn/xcx/models/   POST
/*
{
"creator":"sdfasdfasdf",   //唯一标识
"title":"中南大学汉堡店",
	"description":"中南大学汉堡店是致力于为学生服务的快餐店，美味可口，欢迎广大师生前来捧场~",
	"phone":"18373153353",
	"locaiton":"中南大学铁道学院",
	"type":"快餐",
	"model_type":7   //这个是type
}
 */
//返回数据：
/*
{
        "id": 1,
        "creator":"sdfasdfasdf",   //唯一标识
        "createdAt": "2017-08-13T12:38:07.958000Z",
        "updatedAt": "2017-08-13T12:38:07.959000Z",
        "model_type": 7,
        "title": "中南大学汉堡店",
        "description": "中南大学汉堡店是致力于为学生服务的快餐店，美味可口，欢迎广大师生前来捧场~",
        "phone": "18373153353",
        "location": "",
        "type": "快餐",
        "activated": 0,
        "pictures": "",
        "extra1": "",
        "extra2": ""
    }
 */


//获取某个type的数据：
//api:    /xcx/beans/1/   GET请求   1是type  可以变成其他的
//返回数据：
/*
[
    {
        "id": 1,
        "creator":"sdfasdfasdf",   //唯一标识
        "createdAt": "2017-08-13T12:38:07.958000Z",
        "updatedAt": "2017-08-13T12:38:07.959000Z",
        "model_type": 7,
        "title": "中南大学汉堡店",
        "description": "中南大学汉堡店是致力于为学生服务的快餐店，美味可口，欢迎广大师生前来捧场~",
        "phone": "18373153353",
        "location": "",
        "type": "快餐",
        "activated": 0,
        "pictures": "",
        "extra1": "",
        "extra2": ""
    }
]
 */

//获取某一个实例的数据：
//api: /xcx/models/1/   1是id
//返回数据：
/*
{
    "id": 1,
    "creator":"sdfasdfasdf",   //唯一标识
    "createdAt": "2017-08-13T12:38:07.958000Z",
    "updatedAt": "2017-08-13T12:38:07.959000Z",
    "model_type": 7,
    "title": "中南大学汉堡店",
    "description": "中南大学汉堡店是致力于为学生服务的快餐店，美味可口，欢迎广大师生前来捧场~",
    "phone": "18373153353",
    "location": "",
    "type": "快餐",
    "activated": 0,
    "pictures": "",
    "extra1": "",
    "extra2": ""
}
 */

//上传图片：
//api:  /xcx/uploadPic/   POST
// 需要post的数据：  <input name='file' type='file'/> 以及一个id
