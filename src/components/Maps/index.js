import React from 'react';
import { compose, withProps,lifecycle } from 'recompose';
import  {GoogleMap, Marker, withGoogleMap, withScriptjs, OverlayView} from 'react-google-maps';
import SearchBox  from 'react-google-maps/lib/components/places/SearchBox';
import _ from 'lodash';

/*global google*/



const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100vh`}} />,
        containerElement: <div style={{ height: `100vh`}} />,
        mapElement: <div style={{ height: `100vh`}} />,
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
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();
                    const bounds = new google.maps.LatLngBounds();

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
    >
        <OverlayView
            position={{lat:props.center.lat , lng: props.center.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            /*getPixelPositionOffset={getPixelPositionOffset}*/
        >
            <div style={{ background: `white`, border: `1px solid #ccc`, padding: 15 }}>
                <h1>hola</h1>
                <button style={{ height: 60 }} onClick={props.onAcceptClicked}>
                    Acceptar
                </button>
            </div>
        </OverlayView>
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
            <Marker key={index} position={marker.position} />
        )}
        <ol>
            {props.places.map(({ place_id, formatted_address, geometry: { location } }) =>
                <li key={place_id}>
                    {formatted_address}
                    {" at "}
                    ({location.lat()}, {location.lng()})
                </li>
            )}
        </ol>
    </GoogleMap>
);

export class Maps extends React.PureComponent {
    state = {
        isMarkerShown: false,
    };

    componentDidMount() {
        this.delayedShowMarker()
    };

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    };

    handleMarkerClick = () => {
        this.setState({isMarkerShown: false})
    };


    render() {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
            >
            </MyMapComponent>
        );
    }
};
