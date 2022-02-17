$("#forecast").click(() =>{
    var pressure = $("#pressure").val();
    var humidty = $("#humidty").val();
    var city = $("#city").val();
    console.log(pressure)
    console.log(humidty)
    console.log(city)
    $.getJSON(`/api/predict/${pressure}/${humidty}/${city}`, (predicted) => { 
        var temp = Math.floor(predicted.prediction)
        $("#forecasted-temp").html(`
        <p>${temp}</p>
        `)
    });
});
