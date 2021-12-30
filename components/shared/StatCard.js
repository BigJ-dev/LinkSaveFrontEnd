import { Button, Card, Col, Row } from 'antd';

import PropTypes from 'prop-types';

const StatCard = ({ type, siteUrl, siteName,icon,iconEdit,iconTrash, color, clickHandlerVist,clickHandlerEdit,clickHandlerDelete }) => {
  let before = null,
    after = null;

  const cardIcon = (
    <Col>
      <Button
        shape="circle"
        size="large"
        type="primary"
        style={{ backgroundColor: color, borderColor: color }}
        className={type !== 'fill' ? 'mr-4' : null}
        onClick={clickHandlerVist}
      >
        {icon}
      </Button>
      <Button
        shape="circle"
        size="large"
        type="primary"
        style={{ backgroundColor: color, borderColor: color }}
        className={type !== 'fill' ? 'mr-4' : null}
        onClick={clickHandlerEdit}
      >
        {iconEdit}
      </Button>
      <Button
        shape="circle"
        size="large"
        type="primary"
        style={{ backgroundColor: color, borderColor: color }}
        className={type !== 'fill' ? 'mr-4' : null}
        onClick={clickHandlerDelete}
      >
        {iconTrash}
      </Button>
    </Col>
  );

  if (icon||iconTrash||iconEdit) {
    type === 'fill' ? (after = cardIcon) : (before = cardIcon);
  }

  return (
    <Card
      className="mb-4"
      style={type === 'fill' ? { backgroundColor: color } : null}
    >
      <Row type="flex" align="middle" justify="start">
        {before}
        <Col>
          <h5 className={`mb-0 ${type === 'fill' ? 'text-white' : null}`}>
            {siteName}
          </h5>
          <small className={type === 'fill' ? 'text-white-50' : null}>
            {siteUrl}
          </small>
        </Col>
        <span className="mr-auto" />
        {after}
      </Row>
    </Card>
  );
};

StatCard.propTypes = {
  type: PropTypes.oneOf(['fill']),
  siteUrl: PropTypes.string,
  siteName: PropTypes.string,
  icon: PropTypes.element,
  color: PropTypes.string
};

export default StatCard;
