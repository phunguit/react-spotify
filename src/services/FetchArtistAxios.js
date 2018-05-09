import * as configs from '../contants/Configs';
import axios from 'axios';

export default class FetchArtistAxios {
    
    static obj = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + configs.ACCESS_TOKEN
        }
    }

    static getArtist(id) {
        var url = configs.BASE_URL + 'artists/' + id;
        return axios.get(url, FetchArtistAxios.obj).then( res => {
            return res;
        }).catch( error => {
            console.log(error);
        });
    }

    static getArtistAblbums(id) {
        var url = configs.BASE_URL + 'artists/' + id + '/albums';
        return axios.get(url, FetchArtistAxios.obj).then( (res) => {
            return res;
        }).catch( (error) => {
            console.log(error);
        });
    }

    static getAblbumTracks(id) {
        var url = configs.BASE_URL + 'albums/' + id;
        return axios.get(url, FetchArtistAxios.obj).then( (res) => {
            return res;
        }).catch( (error) => {
            console.log(error);
        });
    }

}