// script to run model predictions based on user input and produce price prediction

// assign API URL returning the data for neighbourhood dropdowns to a constant

const input_data_url = "/api/v1.0/names"

// console log the data to make sure it populates
d3.json(input_data_url).then(function(data) {
    console.log(data);
})

// initialization function to populate the neighbourhood dropdown
function init() {
    // select the dropdown element from home.html
    let nhood_select = d3.select("#dropdown-neighbourhood");
    // append to dropdown
    d3.json(input_data_url).then(function(data) {
        let nhoods = data;
        // loop through neigbourhoods and append to dropdown
        nhoods.forEach((nhood) => {
            nhood_select.append("option").text(nhood).property("value", nhood);
        });
    })
}

// function to load in the model
async function loadModel() {
    const model = "insert_model_flask_route_here"
    return model;
}

// function to predict output based on user input
async function generateOutput() {
    const neighbourhood = document.getElementById('dropdown-neighbourhood').value;
    const beds = document.getElementById('dropdown-beds').value;
    const baths = document.getElementById('dropdown-baths').value;
    const dens = document.getElementById('dropdown-dens').value;
    const property_type = document.getElementById('dropdown-property-type').value;

    // prepare input data
    const inputData = [[neighbourhood, beds, baths, dens, property_type]];

    // load the model
    const model = await loadModel();

    // get predictions
    const prediction = model.predict(inputData);

    // display predictions
    const outputElement = document.getElementById('output');
    outputElement.innerText = "Predicted Price: $" + prediction
}

// call loadModel function
loadModel();
init();
