'use strict'


const { Builder, By, Key, promise, until } = use('selenium-webdriver');
const firefox = use('selenium-webdriver/firefox');
var fs = use('fs');

class JustgaController {

    async index({session,response,request,view}){
        return view.render('justga.index');
    }

    //輸入完網站基本資料後跳轉至事件葉面
    async getInfo1({session,response,request,view}){
        var data = request.all();
        if(data.eve_num >0){
            var eve_num = [];
            for(var i=1;i<parseInt(data.eve_num)+1;i++){
                eve_num.push(i);
            }
            //有事件的
            return view.render('justga.haveevent',{
                site_name:data.site_name,
                in_site_name:data.in_site_name,
                site_url:data.site_url,
                eve_num:eve_num
            })
        }
        else{
            //無事件的頁面
            return view.render('justga.noevent',{
                site_name:data.site_name,
                in_site_name:data.in_site_name,
                site_url:data.site_url,
                eve_num:data.eve_num
            })
        }
    }

//只有PV
    async justPV({session,response,request,view}){
        
    }
       
}

module.exports = JustgaController
