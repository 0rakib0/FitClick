
// about us section animation

$("#aboutUs").click(() => {
    $("#aboutUsSec").show()
    $("#whyChoos").hide()
    $("#whyChoosus").css('color', 'black')
    $("#aboutUs").css('color', '#FB5B20')
})

$("#whyChoosus").click(() => {
    $("#aboutUsSec").hide()
    $("#whyChoos").show()
    $("#whyChoosus").css('color', '#FB5B20')
    $("#aboutUs").css('color', 'black')
})



// upload image file
const submitImage = () => {
    const input = $("#imageInput")
    const file = input.prop('files')[0];

    console.log("Hello Image Comming soonn..")
    console.log(file)
    uploadImage(file)

}

const uploadImage = (file) => {
    const formData = new FormData()
    console.log(formData)
    formData.append('image', file)

    $.ajax({
        url: 'http://localhost:5000/upload',
        method: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: (response) => {
            $("#uploadAlert").text("Image successfully uploaded")
            $("#uploadAlert").addClass('alert-success')
        },
        error: (error) => {
            console.error("Image Not Upload something wrong")
        }

    });
}






// call API data

const makeRequest = async (url, method) => {
    try {
        const result = await $.ajax({
            url: url,
            method: method
        })
        return result
    } catch (error) {
        console.log(error)
    }
}

const getData = () => {
    makeRequest("http://numbersapi.com/1/30/date?json")

        .then(res => {
            if (res?.text == undefined) {
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