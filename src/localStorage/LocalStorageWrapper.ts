import { observable, action, makeObservable } from 'mobx';
import Telefon from '../models/TelefonAndroid';


const setLocalStorageData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalStorageData = (key: string): any => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

class LocalStorageWrapper {
  data: Telefon[] | null = null;

  constructor() {
    makeObservable(this, {
      data: observable,
      setData: action,
      loadDataFromLocalStorage: action
    });
    this.loadDataFromLocalStorage();
  }

  setData(date: Telefon[]) {
    this.data = date;
    setLocalStorageData('telefoane', date);
  }

  async loadDataFromLocalStorage() {
    const storedData = getLocalStorageData('telefoane');
    if (!storedData) {
      const initialData: Telefon[] = [
        {
          nume: "Samsung Galaxy",
          model: "S23",
          descriere: "Display adaptiv Obține culoare și luminozitate optime, cu vizibilitate maximă în aer liber12. Ecranul de 120 Hz netezește derularea, în timp ce Eye Comfort Shield elimină oboseala ochilor, chiar și atunci când privești ecranul în întuneric.",
          imagine:"https://images.samsung.com/is/image/samsung/p6pim/ro/2302/gallery/ro-galaxy-s23-s911-sm-s911bzkgeue-thumb-534700949?imwidth=480",
          pret: 19000,
          specificatii: "",
          versiune: "10",
          relizul: 2021
       
         },
         {
           nume: "Xiaomi ",
           model: "Redmi 13C",
           descriere: "Telefon mobil Xiaomi Redmi 13C, 8GB RAM, 256GB, Midnight Black",
           imagine:"https://s13emagst.akamaized.net/products/63471/63470391/images/res_2df52b48660b0fe2782fccf7b5d99f8a.jpg?width=720&height=720&hash=233E02D59EF1E27CECCDC4374FF6F310",
           pret: 7500,
           specificatii: "",
           versiune: "10",
           relizul: 2021
          },
          {
           nume: "iPhone",
           model: "15 Pro Max",
           descriere: "Telefon mobil Apple iPhone 15 Pro Max, 256GB, 5G, Black Titanium",
           imagine:"https://s13emagst.akamaized.net/products/60458/60457151/images/res_44ffbf30efb9dcbd1501e316af596edb.jpg?width=720&height=720&hash=F8B9B844788445D1E92A240F213B0D64",
           pret: 22000,
           specificatii: "",
           versiune: "10",
           relizul: 2021
          }
      ]; 
      setLocalStorageData('products', initialData);
      this.data = initialData;
    } else {
      this.data = storedData;
    }
  }
}

const localStorageWrapper = new LocalStorageWrapper();
export default localStorageWrapper;
