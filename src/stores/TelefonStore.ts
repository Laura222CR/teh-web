import { makeObservable, observable, action } from 'mobx';

import Telefon from '../models/TelefonAndroid';
import localStorageWrapper from '../localStorage/LocalStorageWrapper';

class TelefonStore {
  telefoane: Telefon[] = [];
  loading: boolean = true; 

  constructor() {
    makeObservable(this, {
      telefoane: observable,
      loading: observable,
      addProduct: action,
      removeProduct: action,
      setLoading: action
    });
    this.loadData(); 
  }

  addProduct(product: Telefon) {
    this.telefoane.push(product);
    this.saveData(); 
  }

  removeProduct(product: Telefon) {
    this.telefoane = this.telefoane.filter(t => t !== product);
    this.saveData(); 
  }

  async loadData() {
   
    this.setLoading(true);

    
    await new Promise(resolve => setTimeout(resolve, 2000));

    
    this.telefoane = localStorageWrapper.data ? localStorageWrapper.data : [];

    
    this.setLoading(false);
  }

  saveData() {
    localStorageWrapper.setData(this.telefoane);
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

}

const telefonStore = new TelefonStore();
export default telefonStore;
