//hash map is like dictionary 
// methods of set, get, has,delete
//set is to add a data = "john", {age: 23, gender: "male"}

//get is to get the specific data

//has return true if the data is exist

//delete to delete one specific data

const map = new Map()
map.set("john", { age: 25, role: "admin" })
map.set("jane", { age: 30, role: "user" })

map.get("john")   // { age: 25, role: "admin" } ← INSTANT!
map.has("jane")   // true ← INSTANT!
map.delete("john") // removes john