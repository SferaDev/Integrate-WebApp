import React from 'react';
import {compose, lifecycle, withProps} from 'recompose';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';
import SearchBox from 'react-google-maps/lib/components/places/SearchBox';
import _ from 'lodash';

/*global google*/

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `100%`}}/>,
        mapElement: <div style={{height: `80%`}}/>,
    }),
    lifecycle({
        componentWillMount() {
            const refs = {};

            this.setState({
                bounds: null,
                places: [],
                center: {
                    lat: 41.3818, lng: 2.1685
                },
                over: {
                    lat: 41.419318, lng: 2.16165419999993
                },
                markers: [],
                onMapMounted: ref => {
                    refs.map = ref;
                },
                onBoundsChanged: () => {
                    this.setState({
                        bounds: refs.map.getBounds(),
                        center: refs.map.getCenter(),
                    })
                },
                _insertButton: (parentThis, map) => {
                    let controlDiv = document.createElement('div');
                    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
                },
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref;
                },
                onAcceptClicked() {
                    window.close()
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();
                    {
                        places.map(({formatted_address, geometry: {location}}) =>
                            this.props.onUserSearched(formatted_address, location.lat(), location.lng())
                        )
                    }
                    const bounds = new google.maps.LatLngBounds();
                    console.log();
                    places.forEach(place => {
                        if (place.geometry.viewport) {
                            bounds.union(place.geometry.viewport)
                        } else {
                            bounds.extend(place.geometry.location)
                        }
                    });
                    const nextMarkers = places.map(place => ({
                        position: place.geometry.location,
                    }));
                    const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

                    this.setState({
                        center: nextCenter,
                        markers: nextMarkers,
                        places
                    });
                },
            })
        },
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={13}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}
        controls={this._insertButton}
    >
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onPlacesChanged}
        >
            <input
                type="search"
                placeholder="Nom de l'adreça"
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    marginTop: `10px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                }}
            />
        </SearchBox>
        {props.markers.map((marker, index) =>
            <Marker key={index} position={marker.position}/>
        )}
    </GoogleMap>
);

export class Maps extends React.PureComponent {
    state = {
        isMarkerShown: false,
    };
    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({isMarkerShown: true})
        }, 3000)
    };
    handleMarkerClick = () => {
        this.setState({isMarkerShown: false})
    };

    componentDidMount() {
        this.delayedShowMarker()
    };

    render() {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
                onUserSearched={this.props.onUserSearched}
            >
            </MyMapComponent>
        );
    }
}