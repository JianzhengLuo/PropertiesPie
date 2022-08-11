function addNew() {
    let unallocatedContainer = document.querySelector("#unallocatedValue");
    let max = parseInt(unallocatedContainer.innerText);

    let name = prompt("Property name: ");
    let value = prompt(`Property value (max: ${max}): `);

    let tr = document.createElement("tr");
    let trNum = document.querySelectorAll("tbody>tr").length;
    tr.innerHTML = `
    <tr>
        <!-- <td><input type="color" name="control-color-${trNum}" id="control-color-${trNum}" value="#${Math.floor(Math.random() * (0xffffff - 0x000000) + 0x000000).toString(16).padStart(6, 0)}"></td> -->
        <td class="control-name">${name}</td>
        <td>
            <input type="range" name="control-bar-${trNum}" id="control-bar-${trNum}" min="0" max="100" value="${value}">
        </td>
        <td class="control-value">${value}%</td>
    </tr>
    `;

    document.querySelector("tbody").insertBefore(tr, document.querySelector(".add-new"));

    unallocatedContainer.innerText = `${max - value}%`;
    document.querySelector("#control-bar-0").value = max - value;
}

function drawChart() {
    document.querySelector("#pie").innerHTML = "";
    // create an instance of a pie chart
    let chart = anychart.pie();
    // set the data
    let data = [];
    let values = document.querySelectorAll(".control-value"),
        names = document.querySelectorAll(".control-name");

    values.forEach((value, index, array) => { data.push([names[index].innerText, parseInt(value.innerText)]); });

    console.log(data);

    chart.data(data);
    // set chart title
    chart.title(prompt("Title: "));
    // set the container element 
    chart.container("pie");
    // initiate chart display
    chart.draw();
}
