document.addEventListener("DOMContentLoaded", function () {
  const tableData = [
    ["Desks", "", "", "", ""],
    ["Large straight", "90", "11", "990", ""],
    ["Sm Straight", "55", "", "", ""],
    ["L 1.3", "65", "", "", ""],
    ["L 1.8", "90", "", "", ""],
    ["120 degree", "65", "", "", ""],
    ["Desk – reception", "250", "", "", ""],
    ["Desk risers", "25", "", "", ""],
    ["Storage", "", "", "", ""],
    ["Bookcase – Lg", "80", "", "", ""],
    ["Bookcase – Small", "40", "", "", ""],
    ["Credenza - Lg", "100", "", "", ""],
    ["Credenza – Small", "60", "", "", ""],
    ["Cubby unit", "50", "", "", ""],
    ["4 Drawer Filing Cabinet", "50", "", "", ""],
    ["3 Drawer Filing Cabinet", "40", "", "", ""],
    ["2 Drawer Filing Cabinet", "30", "", "", ""],
    ["Hutch", "30", "", "", ""],
    ["Lockers per bay", "25", "", "", ""],
    ["Lundia per bay", "30", "", "", ""],
    ["Mobiles - Double", "45", "", "", ""],
    ["Mobiles - Single", "30", "", "", ""],
    ["Server Racking", "60", "", "", ""],
    ["Small Cupboard", "50", "", "", ""],
    ["Storage cab", "100", "", "", ""],
    ["Tambour – Lg", "80", "", "", ""],
    ["Tambour - med", "60", "", "", ""],
    ["Tambour – small", "40", "", "", ""],
    ["Wall mounted open shelfs", "50", "", "", ""],
    ["Chairs", "", "", "", ""],
    ["Boardroom", "30", "", "", ""],
    ["Task", "21", "", "", ""],
    ["Poof", "10", "", "", ""],
    ["Reception", "20", "", "", ""],
    ["Stacker", "15", "", "", ""],
    ["Couch", "100", "", "", ""],
    ["Lounge Chair", "35", "", "", ""],
    ["Tables", "", "", "", ""],
    ["Coffee Table", "20", "", "", ""],
    ["Round table", "60", "", "", ""],
    ["Sm Table", "50", "", "", ""],
    ["Table - BBQ", "80", "", "", ""],
    ["Table – Boardroom lg", "150", "", "", ""],
    ["Table – Boardroom sm", "80", "", "", ""],
    ["Table - Cafe", "50", "", "", ""],
    ["Table Lg", "80", "", "", ""],
    ["Table – Folding", "30", "", "", ""],
    ["Table – Trolley", "40", "", "", ""],
    ["Partitioning", "", "", "", ""],
    ["Partition shelfs", "3", "", "", ""],
    ["Dividers", "10", "", "", ""],
    ["Partitions", "20", "", "", ""],
    ["Boards", "", "", "", ""],
    ["Boards - Cork", "5", "", "", ""],
    ["Boards - Pin", "5", "", "", ""],
    ["Boards - White", "10", "", "", ""],
    ["Boards - White on wheels", "15", "", "", ""],
    ["Elec whiteboard", "50", "", "", ""],
    ["Kitchen", "", "", "", ""],
    ["Bar fridge", "50", "", "", ""],
    ["Bar leaners", "20", "", "", ""],
    ["Bar Stool", "20", "", "", ""],
    ["Dishwasher", "50", "", "", ""],
    ["Fridge", "80", "", "", ""],
    ["Kitchen items per box", "10", "", "", ""],
    ["Microwave", "15", "", "", ""],
    ["Tech", "", "", "", ""],
    ["Fan", "10", "", "", ""],
    ["Heater", "10", "", "", ""],
    ["Printer", "10", "", "", ""],
    ["Shredder", "30", "", "", ""],
    ["TV", "10", "", "", ""],
    ["Other", "", "", "", ""],
    ["Art work", "10", "", "", ""],
    ["BBQ", "50", "1", "50", ""],
    ["Bin", "2", "", "", ""],
    ["Carpet Rug", "30", "", "", ""],
    ["Carpet Tiles", "1", "", "", ""],
    ["Foot stools", "10", "", "", ""],
    ["Hat stand", "15", "1", "15", ""],
    ["Office stationary (Box)", "10", "", "", ""],
    ["Plants", "20", "1", "20", ""],
    ["Single Mattress", "17", "1", "17", ""],
    ["Single Base", "25", "1", "25", ""],
    ["Double Mattress", "21", "1", "21", ""],
    ["Double Base", "38", "11", "418", ""],
    ["Queen Mattress", "30", "1", "30", ""],
    ["Queen Base", "44", "1", "44", ""],
    ["King Mattress", "72", "1", "72", ""],
    ["King Base", "46", "1", "46", ""],
    ["Other 2", "", "", "", "set a weight value"],
    ["Other 3", "", "", "", "set a weight value"],
    ["Other 4", "", "", "", "set a weight value"],
    ["Other 5", "", "", "", "set a weight value"],
  ];

  let tableBody = document.getElementById("table-body");
  let totalWeights = document.getElementById("total-weight");
  let totalQuantities = document.getElementById("total-qty");
  let totalfee = document.getElementById("total-fee");
  let defaultFee = document.getElementById("default-fee");
  //   console.log(totalfee, defaultFee);

  // Function to calculate total weight and update the total row
  function calculateTotal() {
    let total = 0;
    let totalqty = 0;

    for (let i = 1; i < tableBody.rows.length; i++) {
      let row = tableBody.rows[i];
      let weightCell = row.cells[1].getElementsByTagName("input")[0];
      let quantityCell = row.cells[2].getElementsByTagName("input")[0];
      let totalWeightCell = row.cells[3];
      let totalQuantityCell = row.cells[2];
      //console.log(weightCell, quantityCell, totalWeightCell);
      //   console.log("totalquantitycell", totalQuantityCell, quantityCell.value);

      let weight = parseInt(weightCell.value) || 0;
      let quantity = parseInt(quantityCell.value) || 0;
      //   console.log(quantity, "quantity");
      let totalWeight = weight * quantity;
      total += totalWeight;
      totalqty += quantity;

      totalWeightCell.textContent = totalWeight;
    }
    // console.log("totalquty",totalqty)

    totalWeights.textContent = total;
    totalQuantities.textContent = totalqty;
    let weightFee = calculateFee(total);
    // console.log(weightFee, "fwifj");
    defaultFee.textContent = `$${weightFee}`;

    let defaultNumFee = defaultFee.innerText;
    let newDefaultNumfee = defaultNumFee.slice(1);

    // console.log(typeof defaultNumFee, "heii", typeof total);

    let weighttotalFee = (total / 1000) * parseInt(newDefaultNumfee);
    // console.log(weighttotalFee, "wight toal fee");

    totalfee.textContent = `$${weighttotalFee.toFixed(0)}`;
  }

  // Function to handle input change events
  function handleInputChange() {
    calculateTotal();
  }

  // Loop through the data and create table rows
  for (let i = 0; i < tableData.length; i++) {
    let row = document.createElement("tr");

    // Loop through the row data and create table cells
    for (let j = 0; j < tableData[i].length; j++) {
      let cell = document.createElement("td");

      //   if (j === 1) {
      //     console.log(tableData[i][j], "tableData");
      //     if (tableData[i][j] === "") {
      //       cell.textContent = " ";
      //       console.log("empay");
      //     }
      //   }

      // Check if the cell should contain an editable input field
      if (j === 1 || j == 2) {
        let input = document.createElement("input");
        input.type = "number";
        input.value = tableData[i][j];
        input.addEventListener("input", handleInputChange);
        cell.appendChild(input);
      } else {
        cell.textContent = tableData[i][j];
      }

      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }

  // Calculate the initial total
  calculateTotal();
});

function calculateFee(weight) {
  let fee = 0;
  let feePer1000kg = 240;

  if (weight > 0) {
    fee = (weight / 1000) * feePer1000kg;
  }

  return Math.ceil(fee);
}
