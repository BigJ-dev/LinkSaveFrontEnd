import {
  Archive,
  Edit,
  MoreHorizontal,
  PhoneCall,
  Printer,
  Save,
  Trash,
  TrendingDown,
  TrendingUp
} from 'react-feather';
import {
  Card,
  Col,
  DatePicker,
  Dropdown,
  Menu,
  Message,
  Row
} from 'antd';

import PostCard from './shared/PostCard';
import StatCard from './shared/StatCard';
import { theme } from './styles/GlobalStyles';


const axes = Array.from(Array(12).keys());

const menu = (
  <Menu>
    <Menu.Item>
      <Row type="flex" align="middle">
        <Archive size={16} strokeWidth={1} className="mr-3" />{' '}
        <span>Archive</span>
      </Row>
    </Menu.Item>
    <Menu.Item>
      <Row type="flex" align="middle">
        <Edit size={16} strokeWidth={1} className="mr-3" /> <span>Edit</span>
      </Row>
    </Menu.Item>
    <Menu.Item>
      <Row type="flex" align="middle">
        <Trash size={16} strokeWidth={1} className="mr-3" /> <span>Delete</span>
      </Row>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Row type="flex" align="middle">
        <Save size={16} strokeWidth={1} className="mr-3" /> <span>Save as</span>
      </Row>
    </Menu.Item>
    <Menu.Item>
      <Row type="flex" align="middle">
        <Printer size={16} strokeWidth={1} className="mr-3" />{' '}
        <span>Print</span>
      </Row>
    </Menu.Item>
  </Menu>
);


const Overview = (props) => {
  const userLinks = props.data;
  return (
    <div>
      <Card
        title="Sales analytics"
        extra={
          <Dropdown overlay={menu}>
            <MoreHorizontal size={20} strokeWidth={1} fill={theme.textColor} />
          </Dropdown>
        }
        bodyStyle={{ padding: '1rem' }}
        className="mb-4"
      >

      {userLinks.map(userLink => {
        return (
        <Col xs={50} sm={50} md={50}>
          <StatCard
            type="fill"
            title={userLink.siteName}
            value={230}
            icon={<PhoneCall size={20} strokeWidth={1} />}
            color={theme.darkColor}
            clickHandler={() => Message.info('Customers stat button clicked')}
           />
         </Col>
        )
       })}
      </Card>
    </div>
  );
};

export default Overview;



