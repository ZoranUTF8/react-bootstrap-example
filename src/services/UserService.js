import axios from "axios";

export default class UserService {
  static usersServerUrl = "https://jsonplaceholder.typicode.com/users";

  static getUsers() {
    return axios
      .get(this.usersServerUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error, "ERROR GETTING USERS DATA");
      });
  }
}
