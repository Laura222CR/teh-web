import { makeAutoObservable } from "mobx";

class PersonData {
    name = "Buliga Laura";
    age = 21;
    group = "CR-222";

    constructor(){
        makeAutoObservable(this);
    }
}

const personData = new PersonData();
export default personData;