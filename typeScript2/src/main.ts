import {SocialNetwork} from "./social-network"

import * as _ from "lodash";
import "rxjs"
class App implements SocialNetwork{
    title ="hari the great";
    getUsers(){
        return [{name:"just another name"}];
    }
}

console.log(_.isArray(((new App).getUsers())));