const  geocode = require('./utils/geocoder')
const forcase  = require('./utils/forecast')
// const yargs = require('yargs')
const address = process.argv[2]
console.log(address);
if(!address)
{
    console.log('please provide address');
    
}
else
{
geocode(address,(error,{location,latitude,longitude})=>{
    console.log(latitude,longitude);
    
    if(error) return console.error(error);
    else
    {
    console.log(location,latitude,longitude);
    
    forcase(latitude,longitude,(error,forcaseresponse)=>{
        if(error) return console.error(error);
        else
        {        console.log(forcaseresponse);
        
        }
        })
}
})

}




// weather letitude and longitude convert to address..
// var options = {
//     'method': 'GET',
//     'url': 'https://api.mapbox.com/geocoding/v5/mapbox.places/rajkot.json?access_token=pk.eyJ1IjoiaGlyZW4xIiwiYSI6ImNsNGkwOG9oczA5ejcza3AydDcxNWpwMTcifQ.JWgNFUU5raVDGnozUkmxFA&limit=1',
//   };
//   let letitude = '';
//   let longitude = '';
  
//   request(options, function (error, response) {

//     let datas  = response.body;
//     datas  = JSON.parse(datas);
//     if (error) throw new Error(error);
//     else if(datas.features.length == 0)
//     {
//         console.log('try another serch');
        
//     }
//     else{
    
//         let texts = datas.features[0].text
//         console.log(texts);
//     letitude  =  datas.features[0].center[1]
//     console.log(letitude);
    
//     longitude =   datas.features[0].center[0]
//     console.log(longitude);
//     url = `http://api.weatherstack.com/current?access_key=1efb2972cc53a9b28382b8f90ca63bc7&query=${letitude},${longitude}`
//     request({url: url, json : true},(err,res,body) =>{
//     if(err)
//     {
//         console.log('somthing is wrong');        
//     }
//     else if(res.body.err)
//     {
//         console.log('unable to finde location');
//     }
//     else{
//         const data = body.current;
//         console.log(data);
//         console.log(`in ${texts} the temperature  is a ${data.temperature} and felllike ${data.feelslike}`);
//     }
//     })
// }
// });
// console.log(letitude, longitude);




