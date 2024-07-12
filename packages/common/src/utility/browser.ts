export class BrowserUtility {
    static get = (key: string) => {
      const data = window.localStorage.getItem(key);
      return data;
    };
  
    static getObj = (key: string) => {
      const data = BrowserUtility.get(key);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    };
  
    static save = (key: string, value: string) => {
      window.localStorage.setItem(key, value);
    };
  
    static saveObj = (key: string, value: object) => {
      const str = JSON.stringify(value);
      BrowserUtility.save(key, str);
    };
  
    static remove = (key: string) => {
      window.localStorage.removeItem(key);
    };
  
    static clear = () => {
      window.localStorage.clear();
    };
  
    static saveInSession = (key: string, value: string) => {
      window.sessionStorage.setItem(key, value);
    };
  
    static getFromSession = (key: string) => {
      const data = window.sessionStorage.getItem(key);
      return data;
    };
  }
  