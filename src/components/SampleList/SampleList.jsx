/* eslint-disable eqeqeq */
import React from "react";

import { connect } from "react-redux";
import { actions } from "../../actions";


import {
  Table,
  Modal,
  Spin,
  Row,
  Col
} from "antd";
// import {
//   EditOutlined,
//   DeleteOutlined,
//   QuestionCircleOutlined,
//   PlusCircleFilled,
//   SearchOutlined,
//   Loading3QuartersOutlined,
//   SyncOutlined,
// } from "@ant-design/icons";

class SampleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,//Add modal state
      street:"",
      city:"",
      zipcode:"",
      lat:"",
      lan:""
     // demoList: [],
     
    };


     this.showDetail = this.showDetail.bind(this);
  
  }

  componentDidMount() {
    this.props.getSampleList();
  }

  showDetail(address) {

    setTimeout(() => {
      this.setState({
        showModal: true,
        street:address.street,
        city:address.city,
        zipcode:address.zipcode
      });
    }, 50);
  }
  
  render() {

    const { samplelist } = this.props;
  
    const dataSource = samplelist.items;



    // const layout = {
    //   labelCol: { span: 16 },
    //   wrapperCol: { span: 24 },
    // };
    // const tailLayout = {
    //   wrapperCol: { offset: 8, span: 16 },
    // };

   

    //Table columns
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        render: (text, record, dataIndex) => (
          <span
            className="name"
            onClick={() => {
              this.showDetail(
                record.address
              );
            }}
          >
            {record.name}
          </span>
        ),
      },
      {
        title: "Email",
        dataIndex: "email"
      },
      {
        title: "Latitude",
        render: (text, record, dataIndex) => (
          <span
            className="name"
          >
            {record.address.geo.lat}
          </span>
        ),
      },
      {
        title: "Longitutde",
        render: (text, record, dataIndex) => (
          <span
            className="name"
          >
            {record.address.geo.lng}
          </span>
        ),
      }
    ];

    return (
      <React.Fragment>
        <div className="member-team row-component">
          <div className="btn-row">
            <h1>Listview </h1>
          </div>
        </div>
     
        {samplelist.prodloading ? (
          <Spin className="loading_initial" tip="Loading list...">
          </Spin>)
          :(<Table dataSource={dataSource} columns={columns} />)}
        
          <Modal
          title="Detail"
          visible={this.state.showModal}
          footer={null}
          onOk={() => this.setState({ showModal: false })}
          onCancel={() => this.setState({ showModal: false })}
        >
                      <Row className="">
                        <Col span={10}>
                          <p style={{"font-weight": "bold"}}>Street :</p>
                        </Col>
                        <Col span={10}>
                          <p>{this.state.street}</p>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col span={10}>
                          <p style={{"font-weight": "bold"}}>City :</p>
                        </Col>
                        <Col span={10}>
                          <p>{this.state.city}</p>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col span={10}>
                          <p style={{"font-weight": "bold"}}>zipcode :</p>
                        </Col>
                        <Col span={10}>
                          <p>{this.state.zipcode}</p>
                        </Col>
                      </Row>
          </Modal>
      </React.Fragment>
    );
  }
}

function mapState(state) {
  const { samplelist } = state;
  return { samplelist };
}

const actionCreators = {
  getSampleList: actions.getSampleList
};

const connectedSampleList = connect(mapState, actionCreators)(SampleList);
export { connectedSampleList as SampleList };