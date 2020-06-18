function onSubmitForm(event) {
    event.preventDefault();
    let customerForm = [];
    let customer = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      request: document.getElementById("request").value,
    };
    customerForm.push(customer);
    console.log(customerForm);
    localStorage.setItem("customerForm", JSON.stringify(customerForm));
    showData();
  }

  function showData() {
    let jsonData = localStorage.getItem("customerForm");
    let customerForm = JSON.parse(jsonData);
    let html = `<ul>`;
    for (let form of customerForm) {
      html += `
                <li>
                    Name : <b>${form.name}</b></br>
                    Số điện thoại : <b>${form.phone}</b></br>
                    Địa chỉ  : <b>${form.address}</b></br>
                    Yêu cầu khác : <b>${form.request}</b></br>
                </li>
                    `;
    }
    html += `</ul>`;
    console.log(html);
    document.getElementById("app").innerHTML = html;
  }