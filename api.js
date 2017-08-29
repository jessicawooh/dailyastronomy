function sendApiRequest() {
    if (document.getElementById("earthpics") != null) {
        console.log("hi")
        var nodelength = document.getElementById("earthpics").childNodes.length
        for (var i = 0; i < nodelength; i++) {
            document.getElementById("earthpics").removeChild(document.getElementById("earthpics").firstChild)
        }
    }

    var userInput = document.getElementById("input").value
    var nasaImages = `https://epic.gsfc.nasa.gov/api/natural/date/${userInput}`
    //  var nasaImages = `https://epic.gsfc.nasa.gov/api/natural`
    fetch(nasaImages)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            console.log(json)
            //// var list = document.getElementById("myList"); // Get the <ul> element with id="myList"
            //// list.removeChild(list.childNodes[0]); // Remove <ul>'s first child node (index 0)
            var container = document.createElement("div")
            container.setAttribute("class", "container")
            container.setAttribute("id", "earthpics")
            document.body.appendChild(container)
            // var row= document.createElement 



            for (var pic = 0; pic < json.length; pic++) {
                var card = document.createElement("div")
                card.setAttribute("class", "card col-sm-3") //making it a class on the div
                card.style.height = "400px" //pixels-- fixed size
                card.style.margin = "1%" //--%-- no matter what size-- more specialized, more response, makes it more adaptable
                // card.style.border = "thick solid black"
                card.style.backgroundColor = "rgba(255,255,255,0.5)"
                //card.style.opacity = "0.4"
                card.style.marginLeft = "5.75%"
                card.style.borderRadius = "5px"
                document.getElementById("earthpics").appendChild(card)

                // outputting image
                var imgPath = json[pic.toString()].image
                console.log(imgPath)
                // var img = document.createElement("img")
                var withSlash = userInput.replace(/-/g, "/")
                console.log(withSlash)
                // img.setAttribute("src", `https://epic.gsfc.nasa.gov/archive/natural/${withSlash}/jpg/${imgPath}.jpg`)
                // document.getElementById("earthpics").appendChild(img)
                // // document.body.appendChild(img)

                var image = document.createElement("img")
                image.setAttribute("class", "card-img-top") //position of the image within the colmun
                image.setAttribute("src", `https://epic.gsfc.nasa.gov/archive/natural/${withSlash}/jpg/${imgPath}.jpg`)
                card.appendChild(image)
                image.style.display = "block"
                image.style.marginLeft = "auto"
                image.style.marginRight = "auto"
                image.style.width = "100%"
                image.style.padding = "20px"
                image.style.borderRadius = "30px"
                // image.style.opacity = "1.0"
                //make this image a part of the card
                card.appendChild(image)
                //creating card-block
                var cardblock = document.createElement("div")
                cardblock.setAttribute("class", "card-block") //making it a class on the div
                card.appendChild(cardblock)

                var title = document.createElement("H4")
                title.setAttribute("class", "card-title")
                title.innerHTML = (json[pic.toString()].date)
                cardblock.appendChild(title)

                var para = document.createElement("p")
                para.setAttribute("class", "card-text")
                para.innerHTML = (json[pic.toString()].caption)
                para.style.color = "black"
                cardblock.appendChild(para)






                // // outputting caption
                // console.log(json[pic.toString()].caption)
                // var text = document.createElement("p")
                // text.innerHTML = json[pic.toString()].caption
                // document.getElementById("earthpics").appendChild(text)

                // // outputting date+time 
                // var dateandtimePath = (json[pic.toString()].date)
                // var dateandtime = document.createElement("p")
                // dateandtime.innerHTML = dateandtimePath
                // document.getElementById("earthpics").appendChild(dateandtime)
            }
        })

}
