const jsonString = '{"name": "Desiree", "age": 23, "hobby": "Playing with dogs"}';

const jsonObject = JSON.parse(jsonString);

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString);