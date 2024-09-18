// Write your solution in this file!
let employee = {
    'name': "abc",
    'streetAddress': "abc"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let temp = Object.create({})
    temp['name'] = employee['name']
    temp['streetAddress'] = employee['streetAddress']
    temp[key] = value
    return temp
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let temp = Object.create({})
    temp['name'] = employee['name']
    temp['streetAddress'] = employee['streetAddress']
    delete temp[key]
    console.log(temp)
    console.log(key)
    return temp
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
    
}






