console.clear();

function ajax({
    type = "get",
    url = requiredParameter("url"),
    data = {},
    success = requiredParameter("success"),
    error = () => {},
    isAsync = true
} = {}) {
    console.log(JSON.stringify({ type, url, data, success, error, isAsync }, null, 2));
}

function requiredParameter(name) {
    throw new Error(`Missing parameter "${name}"`);
}


var hari = {
    name: 'hari krishna',
    age: 25,
    address: {
        street: '4 ny plaza',
        zip: '10004'
    }
}

let { address, address: { street } } = hari;
console.log(address);
console.log(street);

try {
    ajax({
        url: "https://my.api.io",
        success: () => {}
    });
} catch (e) { console.warn(e.message) }