import axios from "axios";
const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

class ClientService {
    subscribe = async (fd) => {
        return axios
          .post(BACKEND_BASE_URL + "/client/register",fd)
          .then((response) => {
            return true;
          })
          .catch((err) => {
              if(err.response.status === 422){
                if(err.response.data['email']){
                  alert(err.response.data['email']);
                }
                if(err.response.data['g-recaptcha-response']){
                  alert(err.response.data['g-recaptcha-response']);
                }
              }
              console.log("err ", err)
            console.log(err.response.data);
            // throw err;
            return false;
          });
      };
}

export default new ClientService();