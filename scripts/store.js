              //create an array of 10 lawnmowers
              let mowers = [
                {
                    "Brand":"Cub Cadet",
                    "type": "Riding Mower"
                },
                {
                    "Brand":"Troy Bilt",
                    "type": "Riding Mower"
                },
                {
                    "Brand":"Troy Bilt",
                    "type": "Riding Mower"
                },
                {
                    "Brand":"Troy Bilt",
                    "type": "Riding Mower"
                },
                {
                    "Brand":"Troy Bilt",
                    "type": "Riding Mower"
                },
                {
                    "Brand":"Troy Bilt",
                    "type": "Riding Mower"
                },
                {
                    "Brand":"Scag",
                    "type": "Zero-Turn Mower"
                },
                {
                    "Brand":"Craftsman",
                    "type": "Push Mower"
                },
                {
                    "Brand":"Craftsman",
                    "type": "Zero-Turn Mower"
                },
                {
                    "Brand":"Craftsman",
                    "type": "Riding Mower"
                },
            ];

            function buildTable(data){
                const table = document.getElementById("mowersInStock");
    
                for(let i = 0; i < data.length; i++){
                    const row = <tr>
                                    <td>${data[i].Brand}</td>
                                    <td>${data[i].type}</td>
                              </tr>;
                    table.innerHTML += row;
                }
            }