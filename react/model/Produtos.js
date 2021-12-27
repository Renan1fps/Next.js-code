export default class Product {

  #id
  #name
  #value

  constructor(id, name, value){
    this.#id = id,
    this.#name = name,
    this.#value = value
  }

  get id(){
    return this.#id
  }

  get name(){
    return this.#name
  }

  get value(){
    return this.#value
  }
}