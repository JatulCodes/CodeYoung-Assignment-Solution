const translate = require ('translate-google'); //third party liberary

const Translation = require ('../Models/translate'); //getting data with models folder

const sequelize = require ('../connection'); //getting sequelize from connection folder

exports.getTranslatedResponse = (req, res )=>{
    const{from, to ,text} = req.body;

//translations
    translate('i tell you right thing', {from:'en',to: 'hi'}).then(res=>{
        console.log(res);
    }).catch(err =>{
        console.error(err);
    })


    //Sequlize the data
    sequelize.query('CALL getTranslatedResponse(:fromLang, :toLang, :textContent)', //stored procedures getTranslatedResponse  
    {replacements:{fromLang:from, toLang:to, textContent:text}})
    .then(data=>{
    console.log(data);
    if (data && data.length > 0){
        res.status(200).json({message:"translated successfully",translatedText:data[0].translatedText})
    
    
        //add translation response to database

    }else{
        translate(text,{from:from, to:to, }).then(response=>{
            sequelize.query('CALL addTranslatedResponse(:fromLang, :toLang,:textContent :translatedText)', //stored procedures addTranslatedResponse
            {replacements:{fromLang:from,toLang:to,textContent:text,translatedText:response}})
            .then(data=>{
                res.status(200).json({message: "Translates text fetched",translatedText:response})
            }).catch(err=>{
                console.log(err);
            })
        }).catch(err =>{
            res.status(500).json({message:err.message || "Some error here...?"}); //cathing error
        })
    }
    
})
}