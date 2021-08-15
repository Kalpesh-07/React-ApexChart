import {Component} from "react";
import Barchart from "./barchart";
import ColumnChart from "./columnchart";
import {Col, Container, Row} from "react-bootstrap";
import Piechart from "./piechart";
import Donutschart from "./Donutschart";
import ColumnLineChart from "./column&linechart";

class Home extends Component {

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col><Barchart></Barchart>
                            <hr/>
                        </Col>

                        <Col> <ColumnChart></ColumnChart>
                            <hr/>
                        </Col>

                    </Row>
                    <Row>
                        <Col><Piechart></Piechart>
                            <hr/>
                        </Col>

                        <Col><Donutschart></Donutschart>
                            <hr/>
                        </Col>

                    </Row>
                    <Row>
                        <Col><ColumnLineChart></ColumnLineChart></Col>
                        <hr/>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Home