import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dataset from "./data"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import {HeatmapLayer} from "react-google-maps/lib/components/visualization/HeatmapLayer";

/* global google */

const KEY = "AIzaSyA8WPe64aRdjMzrWHdNinBY3Knc_qy6ci0";

const MapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KEY}&libraries=visualization`,
        loadingElement: <div style={{
            height: `100%`,
        }}/>,
        containerElement: <div style={{
            height: `600px`,
        }}/>,
        mapElement: <div style={{
            height: `100%`
        }}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: 51.5, lng: -0.10}}>
        <HeatmapLayer
            options={
                {
                    data: [
                        {
                            location: new google.maps.LatLng(51.539803, 0.119541),
                            weight: props.dataset[`Barking and Dagenham|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.619659, -0.213512),
                            weight: props.dataset[`Barnet|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.458130, 0.130962),
                            weight: props.dataset[`Bexley|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.560983, -0.265256),
                            weight: props.dataset[`Brent|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.372224, 0.055062),
                            weight: props.dataset[`Bromley|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.541308, -0.146122),
                            weight: props.dataset[`Camden|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.371581, -0.099185),
                            weight: props.dataset[`Croydon|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.522155, -0.328239),
                            weight: props.dataset[`Ealing|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.649768, -0.081967),
                            weight: props.dataset[`Enfield|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.473749, 0.051631),
                            weight: props.dataset[`Greenwich|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.555941, -0.061887),
                            weight: props.dataset[`Hackney|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.497648, -0.227004),
                            weight: props.dataset[`Hammersmith and Fulham|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.592500, -0.105505),
                            weight: props.dataset[`Haringey|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.597616, -0.351751),
                            weight: props.dataset[`Harrow|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.570595, 0.225811),
                            weight: props.dataset[`Havering|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.544891, -0.441086),
                            weight: props.dataset[`Hillingdon|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.470962, -0.374437),
                            weight: props.dataset[`Hounslow|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.547015, -0.111335),
                            weight: props.dataset[`Islington|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.503618, -0.199206),
                            weight: props.dataset[`Kensington and Chelsea|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.413538, -0.298307),
                            weight: props.dataset[`Kingston upon Thames|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.456116, -0.123702),
                            weight: props.dataset[`Lambeth|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.447312, -0.019750),
                            weight: props.dataset[`Lewisham|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.412089, -0.198640),
                            weight: props.dataset[`Merton|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.529453, 0.036863),
                            weight: props.dataset[`Newham|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.584549, 0.075646),
                            weight: props.dataset[`Redbridge|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.451434, -0.305930),
                            weight: props.dataset[`Richmond upon Thames|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.478267, -0.074852),
                            weight: props.dataset[`Southwark|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.363233, -0.171543),
                            weight: props.dataset[`Sutton|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.522595, -0.032238),
                            weight: props.dataset[`Tower Hamlets|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.600107, -0.013129),
                            weight: props.dataset[`Waltham Forest|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.455126, -0.182608),
                            weight: props.dataset[`Wandsworth|${props.year}`]
                        },
                        {
                            location: new google.maps.LatLng(51.516600, -0.158097),
                            weight: props.dataset[`Westminster|${props.year}`]
                        },
                    ],
                    dissipating: true,
                    radius: 50,
                    gradient: [
                        'rgba(0, 255, 255, 0)',
                        'rgba(0, 255, 255, 1)',
                        'rgba(0, 191, 255, 1)',
                        'rgba(0, 127, 255, 1)',
                        'rgba(0, 63, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 223, 1)',
                        'rgba(0, 0, 191, 1)',
                        'rgba(0, 0, 159, 1)',
                        'rgba(0, 0, 127, 1)',
                        'rgba(63, 0, 91, 1)',
                        'rgba(127, 0, 63, 1)',
                        'rgba(191, 0, 31, 1)',
                        'rgba(255, 0, 0, 1)'
                    ]
                }
            }
        />
    </GoogleMap>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.data = dataset.data;
        this.table = [];

        this.data.forEach(row => {
            if (this.table[`${row.Borough}|${row.Month.slice(0, 4)}`] === undefined) {
                this.table[`${row.Borough}|${row.Month.slice(0, 4)}`] = 0
            } else {
                this.table[`${row.Borough}|${row.Month.slice(0, 4)}`] += parseInt(row.Count);
            }
        });

        this.state = {
            currentYear: 2013,
        };
    }

    componentDidMount() {
        setInterval(
            () => {
                this.setState({currentYear: this.state.currentYear === 2017 ? 2013 : this.state.currentYear + 1})
            }, 1000
        )
    }

    render() {
        return (
            <div id="main">
                <h1>Crime Rates In London {this.state.currentYear}</h1>
                <MapComponent dataset={this.table} year={this.state.currentYear}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
