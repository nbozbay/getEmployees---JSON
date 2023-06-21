document.querySelector("#get-employee").addEventListener('click', loadEmployee);

function loadEmployee() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'employees.json', true);

    const loading = document.getElementById("loading");
    loading.style.display = "block";

    setTimeout(() => {

        xhr.onload = function () { 

            loading.style.display = "none";

            if (this.status === 200) { 

                let employees = JSON.parse(this.responseText) 

                let html = "";

                employees.forEach(employee => {
                    html +=
                        ` 
                        <tr>
                            <td>${employee.firstName} </td>
                            <td>${employee.lastName} </td>
                            <td>${employee.age} </td>
                            <td>${employee.retired} </td>
                        </tr>
                         `;
                });


                const employeeTable = document.getElementById("employees");
                employeeTable.innerHTML = html;
            }
        }

        xhr.send();

    }, 2500);
}