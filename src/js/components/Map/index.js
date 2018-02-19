import React,{Component} from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component{



    render(){
        return(
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: 48.0022519, lng: 37.8404051 }}>

                        <Marker position={{ lat: 48.0022519, lng: 37.8404051 }}/>

            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(Map))