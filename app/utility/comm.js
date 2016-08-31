var db = require('../models');

module.exports ={
    
    

    getFormNum:function(formType,callback){
        var nowYear = (new Date()).getFullYear()-1911;
        var nowMonth = (new Date()).getMonth()+1;
        var twoDigitMonth = nowMonth<10?'0'+nowMonth:''+nowMonth;

        var TNO = nowYear+formType+twoDigitMonth; //只有年月日的 105年S10月ex: 105S10
        if(formType='S'){

                // 要加上流水號 從Soft_Data table 找出目前最大流水號  -> 若目前沒有 就給他 0001
        db.Soft_Data.max('SNO',{ where: { SNO:{ $like:TNO+'%' } } }).then(function(maxSNO){
           
                if(maxSNO==null){
                    TNO = TNO + '0001';
                    callback(TNO);
                }
                else{
                    //105S080002
                    var sequNum = parseInt(maxSNO.substring(6,10)); //前面的0會不見 ex. 0012 變成 12 
                    sequNum++;
                    sequNum = sequNum.toString();
                    var pad = "0000";
                    sequNum = pad.substring(0,pad.length-sequNum.length)+sequNum; //固定4位元,超過還是OK ,ex : 1 -> 0001 , 12345 => 12345
                    TNO = TNO + sequNum;
                    callback(TNO);
                }
            });

        }else{

            db.Soft_Apply.max('FNO',{ where: { FNO:{ $like:TNO+'%' } } }).then(function(maxFNO){
           
                if(maxFNO==null){
                    TNO = TNO + '0001';
                    callback(TNO);
                }
                else{
                    //105S080002
                    var sequNum = parseInt(maxFNO.substring(6,10)); //前面的0會不見 ex. 0012 變成 12 
                    sequNum++;
                    sequNum = sequNum.toString();
                    var pad = "0000";
                    sequNum = pad.substring(0,pad.length-sequNum.length)+sequNum; //固定4位元,超過還是OK ,ex : 1 -> 0001 , 12345 => 12345
                    TNO = TNO + sequNum;
                    callback(TNO);
                }
            });

        }
        
    } // getFormNum end
};