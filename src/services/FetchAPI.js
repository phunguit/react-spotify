import * as configs from '../contants/Configs';

export default class FetchAPI {
    
    static obj = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + configs.ACCESS_TOKEN
        }
    }

    static fetchToSearchArtist(query) {
        var url = configs.BASE_URL + 'search?q='+ query +'&type=artist';

        return fetch(url, FetchAPI.obj).then( (res) => {
            return res.json();
        }).catch((error) => {
            console.log(error);
        });
    }

}