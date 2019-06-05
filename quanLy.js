let data = "";
let products = ['Sony Xperia', 'Samsung Galaxy',
    'Nokia 6', 'Xiaomi Redmi Note 4',
    'Apple iPhone 6S', 'Xiaomi Mi 5s Plus',
    'Apple iPhone 8 Plus', 'Fujitsu F-04E', 'Oppo A71'];

function run() {
    document.getElementById('soLuong').innerText = products.length+" products";
    for (let i = 0; i < products.length; i++) {
        data += "<tr>";
        data += "<td style='width: 500px;'>" + products[i] + "</td>";
        data += "<td><input type='button' value='Edit' onclick='edit(" + i + ")'></td>";
        data += "<td><input type='button' value='Delete' onclick='del(" + i + ")'></td>";
        data += "</tr>";
    }
    document.getElementById("productShow").innerHTML = data;
}

function addProduct() {
    let newProduct = document.getElementById("nameProduct").value;
    products.push(newProduct);
    data = "";
    run();
}

function edit(i) {
    let editForm = "";
    let oldValue = products[i];
    editForm+= "<input type='text' id='new' value='"+oldValue+"'>";
    editForm+= "<input type='button' value='Confirm' onclick='confirmEdit("+i+")'>";
    document.getElementById("formEdit").innerHTML = editForm;
}
function confirmEdit(i) {
    let newValue = document.getElementById('new').value;
    products[i] = newValue;
    let closeEditForm ="";
    document.getElementById("formEdit").innerHTML = closeEditForm;
    data = "";
    run();
}
function del(i) {
    products.splice(i, 1);
    data = "";
    run();
}