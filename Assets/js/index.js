
const makeRequest = async (url, method) =>{
   try{
    const result = await $.ajax({
        url: url,
        method : method
    })
    return result
   }catch (error){
    console.log(error)
   }
}

const getData = () =>{
    makeRequest("http://numbersapi.com/1/30/date?json")
    
    .then(res =>{
        if(res?.text == undefined){
            $("#historyALert").text("Data Not Fount Something Wrong!")
            $("#historyALert").addClass("alert-danger")
        }
        $("#historyText").text(res.text)
        $("#historyType").text(res.type)
        $("#historyYear").text(res.year)
        $("#historyMonth").text(res.number)
    })
    
}

getData()