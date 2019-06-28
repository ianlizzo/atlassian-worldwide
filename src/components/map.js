import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
import { Motion, spring } from "react-motion";
import { Grid, Row, Col } from "react-flexbox-grid";
import Sticky from "react-stickynode";
import Return from "@material-ui/icons/KeyboardReturn";
import scroll from "react-scroll-to-component";
import atlaswear from "../images/atlassian-supreme.png";
import am from "../images/AMSTERDAM.png";
import at from "../images/AUSTIN.png";
import bg from "../images/BANGALORE.png";
import mn from "../images/MANILA.png";
import mt from "../images/MTV.png";
import ny from "../images/NYC.png";
import sf from "../images/SF.png";
import sy from "../images/Sydney.png";
import yk from "../images/YOKOHAMA.png";
import ReactModal from "react-modal";
import { markers } from "./markers";
import {
  scrollStyles,
  scrollText,
  imageText,
  geographyDefault,
  geographyHover,
  geographyPressed,
  mapStyle,
  returnStyle,
} from "./mapStyles";

const wrapperStyles = {
  width: "100%",
  margin: "0 auto",
};

class Map extends Component {
  constructor() {
    super();
    this.state = {
      center: [0, 20],
      zoom: 1,
      modal: false,
    };
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // this.showModal = this.showModal.bind(this);
  }
  handleZoomIn() {
    this.setState({
      zoom: this.state.zoom * 2,
    });
  }
  handleZoomOut() {
    this.setState({
      zoom: this.state.zoom / 2,
    });
  }
  handleCityClick(city) {
    this.setState({
      zoom: 5,
      center: city.coordinates,
    });
  }
  handleReset() {
    this.setState({
      center: [0, 20],
      zoom: 1,
    });
  }
  //   showModal() {
  //     this.setState({ modal: true });
  //   }

  renderSideBar() {
    return (
      <Col xs={2} style={{ fontFamily: "monospace" }}>
        <Sticky>
          <img
            src={atlaswear}
            style={{
              marginTop: 20,
              maxHeight: 100,
              maxWidth: 150,
              cursor: "pointer",
            }}
            onClick={() => scroll(this.Home, scrollStyles)}
          />
          <Row middle="xs">
            <p style={scrollText} onClick={() => scroll(this.Sf, scrollStyles)}>
              {"San Francisco"}
            </p>
          </Row>
          <Row middle="xs">
            <p style={scrollText} onClick={() => scroll(this.Mv, scrollStyles)}>
              {"Mountain View"}
            </p>
          </Row>
          <Row middle="xs">
            <p style={scrollText} onClick={() => scroll(this.At, scrollStyles)}>
              {"Austin"}
            </p>
          </Row>
          <Row middle="xs">
            <p style={scrollText} onClick={() => scroll(this.Ny, scrollStyles)}>
              {"New York City"}
            </p>
          </Row>
          <Row middle="xs" style={{ cursor: "pointer" }}>
            <p style={scrollText} onClick={() => scroll(this.Mn, scrollStyles)}>
              {"Manila"}
            </p>
          </Row>
          <Row middle="xs">
            <p style={scrollText} onClick={() => scroll(this.Sy, scrollStyles)}>
              {"Sydney"}
            </p>
          </Row>
          <Row middle="xs">
            <p style={scrollText} onClick={() => scroll(this.Bg, scrollStyles)}>
              {"Bengaluru"}
            </p>
          </Row>
          <Row middle="xs">
            <p style={scrollText} onClick={() => scroll(this.Am, scrollStyles)}>
              {"Amsterdam"}
            </p>
          </Row>
          <Row middle="xs">
            <p style={scrollText} onClick={() => scroll(this.Yk, scrollStyles)}>
              {"Yokohama"}
            </p>
          </Row>
        </Sticky>
      </Col>
    );
  }

  renderImages() {
    return (
      <Grid fluid>
        <Row xs end="xs">
          <img
            src={sf}
            style={{ width: "76%", marginRight: 20 }}
            className="sf"
            ref={section => {
              this.Sf = section;
            }}
          />
          <p style={imageText}>SAN FRANCISCO</p>
        </Row>

        <Row xs end="xs">
          <img
            style={{ width: "76%", marginRight: 20 }}
            className="mv"
            ref={section => {
              this.Mv = section;
            }}
            src={mt}
            style={{ width: "76%", marginRight: 20 }}
          />
          <p style={imageText}>MOUNTAIN VIEW</p>
        </Row>
        <Row xs end="xs">
          <img
            className="at"
            ref={section => {
              this.At = section;
            }}
            src={at}
            style={{ width: "76%", marginRight: 20 }}
          />
          <p style={imageText}>AUSTIN</p>
        </Row>
        <Row xs end="xs">
          <img
            className="ny"
            ref={section => {
              this.Ny = section;
            }}
            src={ny}
            style={{ width: "76%", marginRight: 20 }}
          />
          <p style={imageText}>NEW YORK CITY</p>
        </Row>
        <Row xs end="xs">
          <img
            className="mn"
            ref={section => {
              this.Mn = section;
            }}
            src={mn}
            style={{ width: "76%", marginRight: 20 }}
          />
          <p style={imageText}>MANILA</p>
        </Row>
        <Row xs end="xs">
          <img
            className="sy"
            ref={section => {
              this.Sy = section;
            }}
            src={sy}
            style={{ width: "76%", marginRight: 20 }}
          />
          <p style={imageText}>SYDNEY</p>
        </Row>
        <Row xs end="xs">
          <img
            className="bg"
            ref={section => {
              this.Bg = section;
            }}
            src={bg}
            style={{ width: "76%", marginRight: 20 }}
          />
          <p style={imageText}>BENGALURU</p>
        </Row>
        <Row xs end="xs">
          <img
            className="am"
            ref={section => {
              this.Am = section;
            }}
            src={am}
            style={{ width: "76%", marginRight: 20 }}
          />
          <p style={imageText}>AMSTERDAM</p>
        </Row>
        <Row xs end="xs">
          <img
            className="yk"
            ref={section => {
              this.Yk = section;
            }}
            src={yk}
            style={{ width: "76%", marginRight: 20 }}
          />
          <p style={imageText}>YOKOHAMA</p>
        </Row>
      </Grid>
    );
  }

  render() {
    return (
      <div
        className="home"
        ref={section => {
          this.Home = section;
        }}
        style={wrapperStyles}
      >
        <Grid fluid style={{ marginBottom: 100 }}>
          <Row xs>
            {this.renderSideBar()}
            <Col xs>
              <ReactModal
                isOpen={this.state.modal}
                contentLabel="Examplemodal"
              />
              <Motion
                defaultStyle={{
                  zoom: 1,
                  x: 0,
                  y: 20,
                }}
                style={{
                  zoom: spring(this.state.zoom, {
                    stiffness: 50,
                    damping: 20,
                  }),
                  x: spring(this.state.center[0], {
                    stiffness: 210,
                    damping: 20,
                  }),
                  y: spring(this.state.center[1], {
                    stiffness: 210,
                    damping: 20,
                  }),
                }}
              >
                {({ zoom, x, y }) => (
                  <ComposableMap
                    projectionConfig={{ scale: 215 }}
                    width={980}
                    height={450}
                    style={mapStyle}
                  >
                    <ZoomableGroup center={[x, y]} zoom={zoom}>
                      <Geographies geography="https://raw.githubusercontent.com/ianlizzo/atlassian-worldwide/master/public/static/world-110m.json">
                        {(geographies, projection) =>
                          geographies.map(
                            (geography, i) =>
                              geography.id !== "010" && (
                                <Geography
                                  key={i}
                                  geography={geography}
                                  projection={projection}
                                  style={{
                                    default: geographyDefault,
                                    hover: geographyHover,
                                    pressed: geographyPressed,
                                  }}
                                />
                              )
                          )
                        }
                      </Geographies>
                      <Markers>
                        {markers.map((marker, i) => (
                          <Marker
                            onClick={this.handleCityClick}
                            // onMouseEnter={this.showModal}
                            key={i}
                            marker={marker}
                            style={{
                              default: { fill: "#FF5722" },
                              hover: { fill: "#FFFFFF", cursor: "pointer" },
                              pressed: { fill: "#FF5722" },
                            }}
                          >
                            <circle
                              cx={0}
                              cy={0}
                              r={5}
                              style={{
                                stroke: "#0052CC",
                                strokeWidth: 3,
                                opacity: 0.9,
                              }}
                            />
                            <text
                              textAnchor="middle"
                              y={marker.markerOffsetY}
                              x={marker.markerOffsetX}
                              style={{
                                fontFamily: "monospace",
                                fill: "black",
                              }}
                            >
                              {marker.name}
                            </text>
                          </Marker>
                        ))}
                      </Markers>
                    </ZoomableGroup>
                  </ComposableMap>
                )}
              </Motion>
              <Return style={returnStyle} onClick={this.handleReset} />
            </Col>
          </Row>
        </Grid>
        {this.renderImages()}
        <div style={{ margin: 50 }} ref={this.myRef} />
      </div>
    );
  }
}

export default Map;
