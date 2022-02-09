import Client from "modules/clients/infra/typeorm/entities/Client";

function isCpfValid (cpf:String, clients: Client[]): Boolean{
    let flag = 0;
    clients.forEach(client => {
        if(cpf.localeCompare(client.cpf) === 0) {
            flag++;
        }
    });
    if (flag !== 0) return false;
    return true;
}

function validatesCpf(cpf:String): Boolean{
    let flag = 0;

    if(cpf.length !== 14) flag++;

    let letter:any;
    let numberCount = 0;
    for (let i = 0; i < cpf.length; i++){
        letter = cpf.substring(i, i+1);
        if (!isNaN(letter)) numberCount ++;
    }
    if(numberCount !== 11) flag ++;

    if (flag !== 0) return false;

    return true;
}

module.exports ={isCpfValid, validatesCpf};