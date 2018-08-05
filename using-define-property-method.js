/** 
 * Object.defineProperty() method is used to define or create a new property on an exisitng object
 * Syntax: Object.defineProperty(<object>, <propertyname>, descriptor)
 * The descriptor is an object and inturn consists of following properties:
 * value: the value for the property
 * writable(true|false): Whether the property value can be changed or not
 * enumerable(true|false): Whether the property shows up during enumeration such as when we use the Object.keys() or a for..in loop
 * configurable(true|false): Whether the type of the property can changed or not. Or whether the property can be deleted or not
*/

var task = {
  title: "Connect microplug",
  description: "Microplug is disconnected connect it"
}

// defining a new property on the task object
Object.defineProperty(task, 'showTaskDetails', {
  value: () => {
    return task.title.toUpperCase() + ' ' + task.description;
  },
  writable: false,
  configurable: false,
  enumerable: false
})
console.log(task.showTaskDetails())

// since the writable is set to false the `showTaskDetails` property value cannot be changed
task.showTaskDetails = "desc"
console.log(task.showTaskDetails());

// since the enumerable is set to false the `showTaskDetails` property does not show up when we enumerate through the task keys
console.log(Object.keys(task))

// since the configurable is set to false we cannot change the accessibility of the object
Object.defineProperty(task, 'showTaskDetails', {
  enumerable: true
})
console.log(Object.keys(task))

// cannot delete since configurable is set to false
delete task['showTaskDetails']
